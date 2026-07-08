"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitContact } from "@/lib/api";
import type { ContactSectionProps, FormStatus } from "@/lib/types";

/**
 * "Get in Touch with Us" contact form + "What's Next With Flyte?" panel.
 * Shared across many marketing pages (case studies, services, industries, …).
 *
 * Submits multipart/form-data to `POST /addContact` (supports the optional
 * file attachment). Client component because of the interactive phone input,
 * file picker and submit handling.
 */

const NEXT_STEPS = [
  {
    icon: "fa-regular fa-hourglass-half",
    text: "Your request has been received and is currently under review.",
  },
  {
    icon: "fa-solid fa-user",
    text: "A solution advisor will analyze your requirements and provide a response within 3 business days.",
  },
  {
    icon: "fa-solid fa-handshake-angle",
    text: "If required, a mutual NDA can be arranged within 1-2 business days to ensure confidentiality.",
  },
  {
    icon: "fa-regular fa-square-check",
    text: "Project estimates or recommendations will be presented within 3-5 business days.",
  },
];

const INPUT_CLASS =
  "self-stretch lg:h-14 p-3 lg:p-4 bg-white rounded-lg border border-[#cccccc] text-sm outline-none hover:border-btnColor focus:border-btnColor";
const LABEL_CLASS = "text-[#666666] text-sm lg:text-base font-semibold";

export default function ContactSection({ title = "Get in Touch with Us" }: ContactSectionProps) {
  const [phone, setPhone] = useState<string | undefined>();
  const [status, setStatus] = useState<FormStatus>({ state: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "loading", message: "" });

    try {
      const formData = new FormData(form);
      if (phone) formData.set("phone", phone);

      await submitContact(formData);
      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent — we'll be in touch shortly.",
      });
      form.reset();
      setPhone(undefined);
    } catch {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    }
  }

  return (
    <div className="bg-neutral-50">
      <div className="container py-5">
        <div className="w-full">
          <div className="mb-5 flex w-full items-center justify-center">
            <div className="w-full lg:-mb-3">
              <div>
                <h1 className="w-full text-[#15161B] text-base lg:text-xl px-0 font-semibold text-start lg:leading-[50px]">
                  {title}
                </h1>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center gap-8">
            {/* Form */}
            <div className="w-full lg:w-2/3">
              <form
                onSubmit={handleSubmit}
                className="w-full h-full flex-col justify-start items-start gap-4 inline-flex"
              >
                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
                  <div className="w-full flex-col gap-2 inline-flex">
                    <label className={LABEL_CLASS}>Name</label>
                    <input
                      type="text"
                      className={INPUT_CLASS}
                      placeholder="Type your name"
                      autoComplete="off"
                      name="name"
                      required
                    />
                  </div>
                  <div className="w-full flex-col gap-2 inline-flex">
                    <label className={LABEL_CLASS}>Company</label>
                    <input
                      type="text"
                      className={INPUT_CLASS}
                      placeholder="Type your company name"
                      name="company_name"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-4 lg:gap-8">
                  <div className="w-full flex-col gap-2 inline-flex">
                    <label className={LABEL_CLASS}>Email</label>
                    <input
                      type="email"
                      className={INPUT_CLASS}
                      placeholder="Type your email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="w-full flex-col gap-2 inline-flex">
                    <label className={LABEL_CLASS}>Phone</label>
                    <PhoneInput
                      international
                      defaultCountry="BD"
                      value={phone}
                      onChange={setPhone}
                      name="phone"
                      placeholder="Enter phone number"
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div className="w-full flex-col gap-2 flex">
                  <label className={LABEL_CLASS}>How can we help you?</label>
                  <textarea
                    className="w-full min-h-[100px] p-4 bg-white rounded-lg border border-[#cccccc] text-sm outline-none hover:border-btnColor focus:border-btnColor resize-none"
                    placeholder="Type here"
                    rows={4}
                    name="message"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".jpg,.png,.pdf,.docx"
                    name="attachment"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center gap-2 cursor-pointer text-[#5856d6] text-xs font-bold"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        strokeWidth="2"
                        d="M22,12 C22,12 19.0000009,15.0000004 13.0000004,21.0000004 C6.99999996,27.0000004 -2.00000007,18.0000004 3.99999994,12.0000004 C9.99999996,6.00000037 9,7.00000011 13,3.00000008 C17,-0.999999955 23,4.99999994 19,9.00000005 C15,13.0000002 12.0000004,16.0000007 9.99999995,18.0000004 C7.99999952,20 5,17 6.99999995,15.0000004 C8.99999991,13.0000007 16,6 16,6"
                      />
                    </svg>
                    Attach files
                  </label>
                  <ul className="text-[10px] text-[#5856d6]">
                    <li>Max Size: 25MB per file</li>
                    <li>Supported Formats: .jpg, .png, .pdf, .docx</li>
                  </ul>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={status.state === "loading"}
                    className="cursor-pointer bg-blue-500 w-45 h-10 px-8 py-3 rounded-md text-sm font-semibold"
                  >
                    {status.state === "loading" ? "Sending..." : "Send Message"}
                  </button>
                  {status.message ? (
                    <p
                      className={`text-sm font-medium ${
                        status.state === "error" ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  ) : null}
                </div>
              </form>
            </div>

            {/* What's Next */}
            <div className="w-full lg:w-1/3">
              <div>
                <div className="px-3 lg:px-10 py-5 lg:py-10 w-full h-full flex flex-col justify-center items-center gap-5 lg:gap-10 bg-[#FFFFFF] rounded-lg lg:rounded-[30px]">
                  <div>
                    <p className="text-center text-black text-xl lg:text-2xl font-semibold">
                      What&#39;s Next With Flyte?
                    </p>
                  </div>
                  <div className="flex flex-col gap-4">
                    {NEXT_STEPS.map((step, i) => (
                      <div
                        key={i}
                        className="flex flex-row justify-between lg:items-center w-full gap-3"
                      >
                        <div className="w-1/6">
                          <div className="w-8 lg:w-10 h-8 lg:h-10 bg-transparent border-[1px] lg:border-[2px] border-[#EAEAEA] rounded-md lg:rounded-xl flex justify-center items-center text-[#868686]">
                            <i className={step.icon} />
                          </div>
                        </div>
                        <div className="w-5/6">
                          <h1 className="text-black text-sm lg:text-base">{step.text}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex justify-center">
                    <Link
                      className="h-10 px-6 py-2.5 bg-white hover:bg-black group transition duration-500 rounded-md shadow-[0px_0px_10px_10px_rgba(230,230,230,0.25)] border border-[#dddddd] justify-start items-start gap-2.5 inline-flex overflow-hidden"
                      href="/schedule-consultation"
                    >
                      <p className="text-[#191919] group-hover:text-white transition duration-500 text-sm font-semibold font-['DM_Sans']">
                        Book A Consultation
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
