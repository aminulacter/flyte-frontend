"use client";

import { useEffect, useRef, useState } from "react";
import CaseStudyCard from "./CaseStudyCard";
import { getCaseStudiesByCategory } from "@/lib/api";

const ALL = { id: null, name: "All Industries", type: "" };

import type { CaseStudy, PaginatedResponse } from "@/lib/types";

function Pagination({
  currentPage,
  lastPage,
  onPageChange,
  visibleRange = 2,
  isLoading,
}: {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
  visibleRange?: number;
  isLoading?: boolean;
}) {
  if (lastPage <= 1) return null;

  const pages = (() => {
    const out = [];
    const start = Math.max(2, currentPage - visibleRange);
    const end = Math.min(lastPage - 1, currentPage + visibleRange);
    out.push(1);
    if (start > 2) out.push("...");
    for (let p = start; p <= end; p++) out.push(p);
    if (end < lastPage - 1) out.push("...");
    if (lastPage > 1) out.push(lastPage);
    return out;
  })();

  return (
    <nav className="flex items-center justify-center gap-2 mt-8">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1 || isLoading}
        className={`px-2.5 py-2 text-sm rounded-md ${
          currentPage === 1 || isLoading
            ? "text-[#cccccc] cursor-not-allowed"
            : "text-[#333333] hover:text-blue-900 transition-colors"
        }`}
        aria-label="Previous page"
      >
        Previous
      </button>
      <div className="flex items-center gap-[5px]">
        {pages.map((p, i) => (
          <button
            key={i}
            onClick={() => typeof p === "number" && p !== currentPage && onPageChange(p)}
            disabled={p === "..." || isLoading || p === currentPage}
            className={`w-8 h-8 rounded-md flex items-center justify-center border ${
              p === currentPage
                ? "bg-[#2f80ed] text-white font-medium"
                : p === "..."
                ? "pointer-events-none"
                : "text-black hover:bg-gray-300 transition-colors duration-500"
            }`}
            aria-current={p === currentPage ? "page" : undefined}
            aria-label={p === "..." ? "Ellipsis" : `Go to page ${p}`}
          >
            {p}
          </button>
        ))}
      </div>
      <button
        onClick={() => currentPage < lastPage && onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage || isLoading}
        className={`px-2.5 py-2 text-sm rounded-md ${
          currentPage === lastPage || isLoading
            ? "text-[#cccccc] cursor-not-allowed"
            : "text-[#333333] hover:text-blue-900 transition-colors"
        }`}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}

/**
 * Interactive case-studies listing: category tabs + paginated card grid.
 * `categories` and `initial` (the "All Industries" first page) come from the
 * server (build-time fetch); further category/page changes fetch on the client
 * — mirroring the original RTK Query behaviour.
 */
export default function CaseStudiesList({
  categories = [],
  initial,
}: {
  categories?: Array<{ id?: number | null; name?: string; type?: string }>;
  initial?: PaginatedResponse<CaseStudy>;
}) {
  const tabs = categories.length ? categories : [ALL];
  const [active, setActive] = useState(tabs[0] || ALL);
  const [page, setPage] = useState(1);
  const [payload, setPayload] = useState(initial || { data: [], current_page: 1, last_page: 1 });
  const [loading, setLoading] = useState(false);
  const isFirst = useRef(true);

  useEffect(() => {
    // Skip the very first render — the server already provided `initial`.
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    let cancelled = false;
    setLoading(true);
    getCaseStudiesByCategory({ categoryId: active?.id ?? 0, page })
      .then((data) => {
        if (!cancelled) setPayload(data || { data: [], current_page: 1, last_page: 1 });
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
          window.scrollTo({ top: 850, behavior: "smooth" });
        }
      });
    return () => {
      cancelled = true;
    };
  }, [active, page]);

  const items = payload?.data || [];
  const currentPage = payload?.current_page || 1;
  const lastPage = payload?.last_page || 1;

  return (
    <div className="rounded-t-[60px] lg:py-5 lg:px-0 w-full flex justify-center items-center">
      <div className="container">
        <div className="flex flex-col justify-center items-center gap-1 w-full">
          <p className="pb-2.5 text-lg text-btnColor font-['DM_Sans'] lg:px-0">Case Studies</p>
          <div>
            <h1 className="w-full text-black text-2xl lg:text-3xl font-semibold text-start lg:leading-[50px]">
              Driving Innovation with Real-World Solutions
            </h1>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-2 mt-4 lg:mt-10">
          {tabs.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                if (cat.id !== active.id) {
                  setActive(cat);
                  setPage(1);
                }
              }}
              className={`h-9 px-4 py-2 ${
                active?.name === cat?.name ? "bg-[#fff]" : "bg-[#FDF6E3]"
              } hover:bg-[#fff] justify-center items-center gap-2 inline-flex`}
            >
              <span className="text-center text-[#4A4A89] text-base font-normal font-['Open_Sans'] leading-tight tracking-tight">
                {cat?.name?.toUpperCase()}
              </span>
            </button>
          ))}
        </div>

        <div className="pt-5 lg:pt-12">
          {loading ? (
            <div className="animate-pulse rounded-md bg-primary/10 h-screen w-full" />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              {items.length === 0 ? (
                <div className="col-span-2 text-center text-lg text-gray-500 py-5 lg:py-20">
                  No case studies found.
                </div>
              ) : (
                items.map((cs, i) => (
                  <CaseStudyCard key={cs.id || i} caseStudy={cs} index={i} />
                ))
              )}
            </div>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          lastPage={lastPage}
          onPageChange={setPage}
          isLoading={loading}
        />
      </div>
    </div>
  );
}
