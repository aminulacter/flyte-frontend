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

import type {
  AboutUsData,
  ApiEnvelope,
  Blog,
  BlogList,
  Career,
  CaseStudiesPageContent,
  CaseStudy,
  PaginatedResponse,
  Product,
  ProductApiResponse,
  RelatedBlogsResponse,
  SoftwareSolution,
  TrendingBlogs,
} from "@/lib/types";

export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin.flytesolutions.com/api";

interface ApiGetOptions<T> {
  fallback?: T;
}

/**
 * Build-time GET. Returns the `data` field of the standard `{ success, data }`
 * envelope, or `fallback` on any error.
 */
export async function apiGet<T>(endpoint: string, { fallback = null as T }: ApiGetOptions<T> = {}): Promise<T> {
  try {
    const res = await fetch(`${API_BASE}/${endpoint}`, { cache: "force-cache" });
    if (!res.ok) return fallback;
    const json = (await res.json()) as ApiEnvelope<T>;
    return json?.data ?? fallback;
  } catch {
    return fallback;
  }
}

/* ---- Named endpoint helpers (mirrors the original RTK Query endpoints) ---- */

// Footer + global site settings
export const getInitSystem = () => apiGet<Record<string, unknown>>("init-system");

// Careers
export const getCareers = () => apiGet<Career[]>("career", { fallback: [] });
export const getCareerDetails = (slugOrId: string) => apiGet<Career>(`career/${slugOrId}`);

// Blogs
export const getAllBlogs = () => apiGet<BlogList>("blog-paginate", { fallback: [] });
export const getTrendingBlogs = () => apiGet<TrendingBlogs>("blog-trending", { fallback: {} });
export const getSingleBlog = (slug: string) => apiGet<Blog>(`blog/${slug}`);
export const getRelatedBlogs = () => apiGet<RelatedBlogsResponse>("related-blog", { fallback: [] });

// Products
export const getProducts = () => apiGet<{ data: Product[] }>("products", { fallback: { data: [] } });
export const getProduct = (slug: string) => apiGet<ProductApiResponse>(`products/${slug}`);

// Case studies
export const getContentCaseStudies = () => apiGet<CaseStudiesPageContent>("content-case-studies");
export const getCaseStudies = () => apiGet<PaginatedResponse<CaseStudy>>("case-studies", { fallback: { data: [] } });
export const getSpecificCaseStudy = (slug: string) => apiGet<CaseStudy>(`case-studies/${slug}`);
export const getCaseStudiesByCategory = ({
  categoryId = 0,
  page = 1,
}: {
  categoryId?: number;
  page?: number;
} = {}) =>
  apiGet<PaginatedResponse<CaseStudy>>(`case-studies?category_id=${categoryId ?? 0}&page=${page}`, {
    fallback: { data: [], current_page: 1, last_page: 1 },
  });

// Marketing content
export const getAboutUs = () => apiGet<AboutUsData>("aboutus");
export const getClientFeedback = () => apiGet<unknown[]>("client-feedback");
export const getHireServices = () => apiGet<unknown[]>("service", { fallback: [] });
export const submitHireApplication = (body: Record<string, unknown>) => postForm("hire-service", body);
export const getSoftwareSolutions = () => apiGet<SoftwareSolution[]>("software-solution", { fallback: [] });

/* ---- Mutations (client-side form submissions) ---- */

export async function postForm(endpoint: string, body: Record<string, unknown>): Promise<ApiEnvelope> {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
  return res.json() as Promise<ApiEnvelope>;
}

export async function postFormData(endpoint: string, formData: FormData): Promise<ApiEnvelope> {
  const res = await fetch(`${API_BASE}/${endpoint}`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error(`POST ${endpoint} failed: ${res.status}`);
  return res.json() as Promise<ApiEnvelope>;
}

export const submitContact = (formData: FormData) => postFormData("addContact", formData);
export const submitJobApplication = (body: Record<string, unknown>) => postForm("applicationsubmit", body);
