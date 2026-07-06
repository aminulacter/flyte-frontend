import type { ReactNode } from "react";

/* ---- API response shapes ---- */

export interface PaginatedResponse<T> {
  data: T[];
  current_page?: number;
  last_page?: number;
}

export interface ApiEnvelope<T = unknown> {
  success?: boolean;
  data?: T;
  message?: string;
}

export interface Blog {
  id?: number | string;
  slug: string;
  title: string;
  short_description?: string;
  description?: string;
  image?: string;
  created_at?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keyword?: string;
  tags?: string[];
  tag?: string[];
  date?: string;
  view_count?: number;
  admin?: { name?: string; profile?: string; image?: string };
  blog_section?: Array<{ id?: string | number; blog_section_title: string; [key: string]: unknown }>;
  [key: string]: unknown;
}

export interface TrendingBlogs {
  topreads?: Blog[];
  trendingtopics?: Blog[];
  [key: string]: unknown;
}

export interface ProductScreenshot {
  id: number | string;
  url: string;
  status?: string;
}

export interface ProductTechnology {
  id: number | string;
  name: string;
  logo: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductSection {
  section?: {
    title?: string;
    short_description?: string;
    description?: string;
    image?: string;
  };
}

export interface ProductDetailData {
  id?: number | string;
  slug?: string;
  title: string;
  slogan?: string;
  version?: string;
  release_date?: string;
  short_description?: string;
  description?: string;
  image?: string;
  video?: string;
  image_one?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keyword?: string;
  tag?: string[];
  screenshots?: ProductScreenshot[];
  images?: ProductScreenshot[];
  technology?: ProductTechnology[];
  integrations?: ProductTechnology[];
  features?: ProductFeature[];
  demo_link?: string;
  work_flow_image?: string;
  sections?: ProductSection[];
  productivity_title?: string;
  productivity_short_title?: string;
  productivity_image?: string;
  productivity_description?: string;
  productivity_link?: string;
}

export interface Product {
  id: number | string;
  slug: string;
  name?: string;
  title?: string;
  short_description?: string;
  description?: string;
  image?: string;
  icon_class?: string;
  icon_color?: string;
  meta_title?: string;
  meta_description?: string;
  tag?: string[];
}

export interface CaseStudy {
  id?: number | string;
  slug: string;
  title: string;
  short_description?: string;
  description?: string;
  image?: string;
  category?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keyword?: string;
  tag?: string[];
}

export interface Career {
  id?: number | string;
  slug?: string;
  title: string;
  description?: string;
  short_description?: string;
  company_name?: string;
  location?: string;
  type?: string;
  job_type?: string;
  experience?: string;
  employment_status?: string;
  salary?: string;
}

export interface SoftwareSolution {
  id: number | string;
  name: string;
  icon_class: string;
  icon_color: string;
}

export interface AboutUsData {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

export interface CaseStudiesPageContent {
  contents?: Array<Record<string, unknown>>;
  images?: Array<string | { image?: string }>;
  categories?: Array<{ id?: number | null; name?: string; type?: string; [key: string]: unknown }>;
}

export interface FooterLinkItem {
  title?: string;
  url?: string;
  href?: string;
  label?: string;
}

export interface FooterLinkSection {
  title?: string;
  links?: FooterLinkItem[];
  items?: FooterLinkItem[];
  [key: string]: unknown;
}

export interface InitSystemData {
  title?: string;
  logo_small?: string;
  address?: string;
  mobile1?: string;
  mobile2?: string;
  contact_email?: string;
  feedback_email?: string;
  fb?: string;
  tw?: string;
  ln?: string;
  yt?: string;
  expertise?: FooterLinkSection | null;
  services?: FooterLinkSection | null;
  email?: string;
  phone?: string;
  [key: string]: unknown;
}

/* ---- Shared marketing / content shapes ---- */

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  variant?: "filled" | "outline" | string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface DevelopingContent {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  stepsTitle: string;
  steps: StepItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ProcessSection {
  title: string;
  cards: FeatureCard[];
}

export interface UseCaseCard {
  icon: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface UseCasesSectionData {
  eyebrow: string;
  title: string;
  cards: UseCaseCard[];
}

export interface WhyChooseSection {
  title: string;
  description?: string;
  cards: FeatureCard[];
}

export interface ExpertiseSection {
  title: string;
  cards: FeatureCard[];
  image?: string;
}

export interface TrendItem {
  number: string;
  title: string;
  description: string;
}

export interface TrendsSectionData {
  title: string;
  image?: string;
  items: TrendItem[];
}

export interface ServiceDetail {
  slug: string;
  hero: HeroContent;
  developing: DevelopingContent;
  whyProcess: ProcessSection;
  useCases: UseCasesSectionData;
}

export interface IndustryDetail {
  slug: string;
  hero: HeroContent;
  whyChoose: WhyChooseSection;
  expertise: ExpertiseSection;
  trends: TrendsSectionData;
}

export interface ServiceLandingItem {
  eyebrow: string;
  title: string;
  description: string;
  tags?: string[];
  images?: { src: string; alt: string }[];
  href: string;
  reversed?: boolean;
}

export interface IndustryLandingItem {
  slug: string;
  title: string;
  description: string;
  image?: string;
  href: string;
}

export interface ExploreRoleLink {
  href: string;
  label: string;
}

export interface HireRole {
  slug: string;
  hero: HeroContent;
  whyChoose: WhyChooseSection;
  developing: DevelopingContent;
  expertise: ExpertiseSection;
  technologies?: { title: string; items: Array<{ src: string; alt: string }> };
  exploreRoles?: { title: string; links: ExploreRoleLink[] };
}

export interface NavMenuItem {
  href: string;
  icon: string;
  title: string;
  desc: string;
}

export interface MegaMenu {
  label: string;
  title: string;
  description: string;
  moreHref: string;
  items: NavMenuItem[];
}

export interface CompanyMenuItem {
  href: string;
  label: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
}

export interface FormStatus {
  state: "idle" | "loading" | "success" | "error";
  message: string;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlay?: string;
  width?: string;
}

export interface RecoveredHtmlProps {
  html: string;
}

export interface ContactSectionProps {
  title?: string;
}

export interface AboutUsProps {
  about: AboutUsData | null;
}

export type BlogList = Blog[] | { data?: Blog[] };
export type RelatedBlogsResponse = Blog[] | { data?: Blog[] };
export type ProductApiResponse = ProductDetailData | { data?: ProductDetailData };

export function unwrapProduct(data: ProductApiResponse | null | undefined): ProductDetailData | null {
  if (!data) return null;
  if ("data" in data && data.data) return data.data;
  return data as ProductDetailData;
}

export function unwrapBlogList(data: BlogList | null | undefined): Blog[] {
  if (!data) return [];
  return Array.isArray(data) ? data : data.data || [];
}
