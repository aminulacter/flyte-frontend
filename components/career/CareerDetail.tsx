"use client";

import { FormEvent, useState } from "react";
import { submitJobApplication } from "@/lib/api";
import type { Career } from "@/lib/types";

export default function CareerDetail({ job }: { job: Career }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("loading");
    try {
      const body: Record<string, unknown> = Object.fromEntries(form.entries());
      body.career_id = String(job.slug || job.id || "");
      const response = await submitJobApplication(body);
      setStatus(response.success === false ? "error" : "success");
      setMessage(response.message || "Application received.");
      if (response.success !== false) event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("The application could not be sent.");
    }
  }

  const skills = Array.isArray(job.skills) ? job.skills : [];

  return (
    <div className="container py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-wide text-[#5856d6]">{job.company_name}</p>
        <h1 className="text-3xl font-semibold">{job.title}</h1>
        <p className="text-[#838383]">{job.short_description}</p>
        <div className="flex flex-wrap gap-4 text-sm text-[#62ae86]">
          {job.location && <span>{job.location}</span>}
          {job.employment_status && <span>{job.employment_status}</span>}
          {job.experience && <span>{job.experience}</span>}
          {job.salary && <span>{job.salary}</span>}
        </div>
      </div>
      {job.description && (
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: job.description }} />
      )}
      {skills.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li key={skill} className="rounded-full bg-[#f4f5f9] px-3 py-1 text-sm">{skill}</li>
          ))}
        </ul>
      )}
      <form className="grid gap-4 max-w-xl" onSubmit={onSubmit}>
        <h2 className="text-xl font-medium">Apply for this role</h2>
        <input name="first_name" required placeholder="First name" className="rounded-md border px-3 py-2" />
        <input name="last_name" placeholder="Last name" className="rounded-md border px-3 py-2" />
        <input name="email" type="email" required placeholder="Email" className="rounded-md border px-3 py-2" />
        <input name="phone" placeholder="Phone" className="rounded-md border px-3 py-2" />
        <textarea name="cover_letter" placeholder="Cover letter" rows={5} className="rounded-md border px-3 py-2" />
        <button className="w-fit rounded-md bg-[#191919] px-6 py-3 text-white" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Submit application"}
        </button>
        {message && <p className={status === "error" ? "text-red-600" : "text-green-700"}>{message}</p>}
      </form>
    </div>
  );
}
