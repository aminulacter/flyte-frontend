/**
 * Reusable API/data layer.
 *
 * The original site fetched all dynamic content from this backend (via RTK
 * Query). Because the project is a static export (`output: 'export'`), we fetch
 * at **build time** — Next.js caches these `fetch` calls during `next build`
 * and bakes the result into the static HTML (SSG). Content changes therefore
 * require a rebuild.
 *
 * Every helper is resilient: if the API is unreachable at build time it returns
 * `null`/`[]` instead of throwing, so the build never fails and pages degrade
 * gracefully (e.g. an empty list renders its "coming soon" state).
 */

export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin.flytesolutions.com/api";

/**
 * Build-time GET. Returns the `data` field of the standard `{ success, data }`
 * envelope, or `fallback` on any error.
 */
export async function apiGet(endpoint, { fallback = null } = {}) {
  try {
    const res = await fetch(`${API_BASE}/${endpoint}`, { cache: "force-cache" });
    if (!res.ok) return fallback;
    const json = await res.json();
    return json?.data ?? fallback;
  } catch {
    return fallback;
  }
}

/* ---- Named endpoint helpers (mirrors the original RTK Query endpoints) ---- */

// Footer + global site settings
export const getInitSystem = () => apiGet("init-system");

// Careers
export const getCareers = () => apiGet("career", { fallback: [] });
export const getCareerDetails = (slugOrId) => apiGet(`career/${slugOrId}`);

// Blogs
// `blog-paginate` returns `data` as a plain array of blog objects.
export const getAllBlogs = () => apiGet("blog-paginate", { fallback: [] });
export const getTrendingBlogs = () => apiGet("blog-trending", { fallback: {} });
export const getSingleBlog = (slug) => apiGet(`blog/${slug}`);
export const getRelatedBlogs = () => apiGet("related-blog", { fallback: [] });

// Products
export const getProducts = () => apiGet("products", { fallback: { data: [] } });
export const getProduct = (slug) => apiGet(`products/${slug}`);

// Case studies
export const getContentCaseStudies = () => apiGet("content-case-studies");
export const getCaseStudies = () => apiGet("case-studies", { fallback: { data: [] } });
export const getSpecificCaseStudy = (slug) => apiGet(`case-studies/${slug}`);
// Paginated / category-filtered list. `categoryId` of 0 means "All Industries".
// Usable at build time (SSG) and on the client (category tabs / pagination).
export const getCaseStudiesByCategory = ({ categoryId = 0, page = 1 } = {}) =>
  apiGet(`case-studies?category_id=${categoryId ?? 0}&page=${page}`, {
    fallback: { data: [], current_page: 1, last_page: 1 },
  });

// Marketing content
export const getAboutUs = () => apiGet("aboutus");
export const getClientFeedback = () => apiGet("client-feedback");
export const getHireServices = () => apiGet("service", { fallback: [] });
export const submitHireApplication = (body) => postForm("hire-service", body);
export const getSoftwareSolutions = () => apiGet("software-solution", { fallback: [] });

/* ---- Mutations (client-side form submissions) ---- */

export async function postForm(endpoint, body) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
  return res.json();
}

/**
 * POST multipart/form-data (used by forms that support file uploads, e.g. the
 * contact form's optional attachment). Pass a `FormData` instance — the browser
 * sets the correct `Content-Type` boundary automatically.
 */
export async function postFormData(endpoint, formData) {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
  return res.json();
}

export const submitContact = (formData) => postFormData("addContact", formData);
export const submitJobApplication = (body) => postForm("applicationsubmit", body);
