"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getHireServices, submitHireApplication } from "@/lib/api";

const TECH_GROUPS = [
  {
    label: "Frontend Development",
    fields: [
      { name: "htmlCss", label: "HTML & CSS", value: "html-css" },
      { name: "react", label: "React", value: "react" },
      { name: "angular", label: "Angular", value: "angular" },
      { name: "vuejs", label: "Vue.js", value: "vuejs" },
      { name: "nextjs", label: "Next.js", value: "nextjs" },
      { name: "frontendOthers", label: "Others", value: "frontend-others" },
    ],
  },
  {
    label: "Backend Development",
    fields: [
      { name: "nodejs", label: "Node.js", value: "nodejs" },
      { name: "javaSpring", label: "Java (Spring)", value: "java-spring" },
      { name: "phpLaravel", label: "PHP (Laravel)", value: "php-laravel" },
      { name: "dotNet", label: ".NET", value: "dot-net" },
      { name: "python", label: "Python", value: "python" },
      { name: "go", label: "GO", value: "go" },
      { name: "backendOthers", label: "Others", value: "backend-others" },
    ],
  },
  {
    label: "Mobile Application",
    fields: [
      { name: "flutter", label: "Flutter", value: "flutter" },
      { name: "reactNative", label: "React Native", value: "react-native" },
      { name: "mobileAppOthers", label: "Others", value: "mobile-app-others" },
    ],
  },
];

const INPUT =
  "w-full text-[#666666] placeholder:text-[#666666] border rounded-[5px] p-3 bg-white outline-none border-[#E5E5E5]";
const SELECT =
  "w-full text-[#666666] border rounded-[5px] px-3 py-3.5 bg-white outline-none border-[#E5E5E5]";

function StepIndicator({ step }) {
  const color = (n) => (step > n ? "#34C759" : step === n ? "#5856D6" : "#3A3A3A");
  const labels = ["Overview", "Services", "Tech Stack"];
  return (
    <div className="flex justify-between w-[300px] md:w-96 mx-auto mb-8">
      {labels.map((label, i) => {
        const n = i + 1;
        return (
          <div key={label} className="flex flex-col items-center">
            <span
              className="border-2 rounded-full p-[2px] md:p-1 relative"
              style={{ borderColor: color(n) }}
            >
              <span
                className="w-6 h-6 rounded-full block"
                style={{ backgroundColor: color(n), opacity: 0.15 }}
              />
              {i < labels.length - 1 && (
                <span
                  className="absolute top-1/2 -translate-y-1/2 -right-[75px] md:-right-24 after:content-['---------'] md:after:content-['------------']"
                  style={{ color: color(n) }}
                />
              )}
            </span>
            <span className="text-xs md:text-base mt-1" style={{ color: color(n) }}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function SuccessModal({ onClose }) {
  return (
    <div className="fixed top-0 inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10">
      <div className="bg-[#FAFAFA] w-[600px] max-w-[95vw] shadow-lg rounded-md p-5">
        <div className="space-y-3 text-center">
          <h2 className="text-lg md:text-2xl font-bold">Success! Your Request Has Been Received</h2>
          <p className="text-[#5F5F5F]">
            Thank you for reaching out. Our team will review your submission and get in touch with you
            shortly to discuss the next steps.
          </p>
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={onClose}
            className="px-5 h-10 bg-[#5856d6] hover:bg-[#4a46bc] rounded-md text-white text-sm font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HireApplicationForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [agree, setAgree] = useState(false);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState({});
  const [tech, setTech] = useState({});
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    team_size: "",
    project_duration: "",
    experience_level: "",
    tentative_onboarding_duration: "",
  });
  const [status, setStatus] = useState({ loading: false, error: "", success: false });

  useEffect(() => {
    getHireServices().then((data) => setServices(Array.isArray(data) ? data : []));
  }, []);

  function updateField(name, value) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validateStep1() {
    const required = [
      "name",
      "company",
      "email",
      "phone",
      "team_size",
      "project_duration",
      "experience_level",
      "tentative_onboarding_duration",
    ];
    return required.every((k) => form[k]) && agree;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: false });

    const serviceIds = Object.entries(selectedServices)
      .filter(([, v]) => v)
      .map(([k]) => k.replace("service_", ""));

    const techMap = Object.fromEntries(
      TECH_GROUPS.flatMap((g) => g.fields).map((f) => [f.name, f.value])
    );
    const serviceSolution = Object.entries(tech)
      .filter(([, v]) => v)
      .map(([k]) => techMap[k])
      .filter(Boolean);

    try {
      const res = await submitHireApplication({
        ...form,
        agree,
        service_id: serviceIds.join(","),
        service_solution: serviceSolution.join(","),
      });
      if (res?.success) {
        setStatus({ loading: false, error: "", success: true });
      } else {
        setStatus({
          loading: false,
          error: res?.message || "Something went wrong. Please try again.",
          success: false,
        });
      }
    } catch {
      setStatus({
        loading: false,
        error: "Something went wrong. Please try again.",
        success: false,
      });
    }
  }

  return (
    <div className="bg-white py-0 md:py-10 lg:mt-[100px] border-t">
      <div className="container py-5 bg-[#F9F9F9] lg:max-w-[1040px] rounded-[15px] shadow-md flex flex-col items-center">
        <div className="md:text-center">
          <h6 className="text-black text-xl font-bold mb-2 md:mb-4">
            Hire top developers quickly and easily
          </h6>
          <p className="text-neutral-500 text-sm font-normal mb-5 md:mb-10">
            Build your dream team with skilled developers, ready to meet your needs.
          </p>
        </div>

        <StepIndicator step={step} />

        <form onSubmit={handleSubmit} className="w-full">
          {step === 1 && (
            <div>
              <p className="text-[#4a4a4a] md:text-center text-base font-semibold mb-5 md:mb-10">
                Provide your basic details and project requirements.
              </p>
              <div className="md:grid md:grid-cols-2 gap-8 space-y-3 md:space-y-0">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Enter your name" },
                  {
                    name: "company",
                    label: "Company",
                    type: "text",
                    placeholder: "Enter your company name",
                  },
                  { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
                  {
                    name: "phone",
                    label: "Phone",
                    type: "tel",
                    placeholder: "+880 0000-000000",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-[#666666] text-xs font-semibold mb-2 block">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={form[field.name]}
                      onChange={(e) => updateField(field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className={INPUT}
                      required
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[#666666] text-xs font-semibold mb-2 block">Team Size</label>
                  <select
                    value={form.team_size}
                    onChange={(e) => updateField("team_size", e.target.value)}
                    className={SELECT}
                    required
                  >
                    <option value="" disabled>
                      Select the number of developers
                    </option>
                    {["1-5", "6-10", "11-15", "16-20", "20+"].map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[#666666] text-xs font-semibold mb-2 block">
                    Project Duration
                  </label>
                  <select
                    value={form.project_duration}
                    onChange={(e) => updateField("project_duration", e.target.value)}
                    className={SELECT}
                    required
                  >
                    <option value="" disabled>
                      Select the project duration
                    </option>
                    {["1-3 months", "3-6 months", "6-12 months", "12+ months"].map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[#666666] text-xs font-semibold mb-2 block">
                    Experience Level
                  </label>
                  <select
                    value={form.experience_level}
                    onChange={(e) => updateField("experience_level", e.target.value)}
                    className={SELECT}
                    required
                  >
                    <option value="" disabled>
                      Select the required years of expertise
                    </option>
                    {[
                      ["entry-level", "Entry-Level (1-3 years)"],
                      ["junior", "Junior (1-3 years)"],
                      ["mid-level", "Mid-Level (3-5 years)"],
                      ["senior", "Senior (5-10 years)"],
                      ["expert", "Expert (10+ years)"],
                    ].map(([v, l]) => (
                      <option key={v} value={v}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[#666666] text-xs font-semibold mb-2 block">
                    Tentative Onboarding Time
                  </label>
                  <select
                    value={form.tentative_onboarding_duration}
                    onChange={(e) => updateField("tentative_onboarding_duration", e.target.value)}
                    className={SELECT}
                    required
                  >
                    <option value="" disabled>
                      Select onboarding timeline
                    </option>
                    {[
                      ["15", "15 days"],
                      ["30", "30 days"],
                      ["45", "45 days"],
                    ].map(([v, l]) => (
                      <option key={v} value={v}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-sm font-normal flex items-center gap-2 text-[#666666] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-xs md:text-base">
                      I agree to the Non-Disclosure Agreement (NDA) and confirm that all shared
                      information will remain confidential.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-[#4a4a4a] text-center text-base font-semibold mb-10">
                Choose the specific services you need for your project.
              </p>
              <div className="space-y-4">
                {services.map((s) => (
                  <label
                    key={s.id}
                    className="flex items-center space-x-4 justify-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={!!selectedServices[`service_${s.id}`]}
                      onChange={(e) =>
                        setSelectedServices((prev) => ({
                          ...prev,
                          [`service_${s.id}`]: e.target.checked,
                        }))
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-[#666666] text-sm w-[200px]">{s.name}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <p className="text-[#4a4a4a] text-center text-base font-semibold mb-10">
                Select the technologies and tools your project requires.
              </p>
              {TECH_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="bg-white p-5 rounded-lg border border-[#efefef] grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:w-[800px] mx-auto mb-2"
                >
                  <p className="col-span-1 text-[#373737] text-sm font-semibold md:text-center">
                    {group.label}
                  </p>
                  <div className="space-y-2 col-span-1 md:col-span-2 flex flex-col items-start">
                    {group.fields.map((field) => (
                      <label key={field.name} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={!!tech[field.name]}
                          onChange={(e) =>
                            setTech((prev) => ({ ...prev, [field.name]: e.target.checked }))
                          }
                        />
                        <span className="text-sm text-[#666666]">{field.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {status.error ? (
            <p className="text-red-600 text-sm text-center mt-4">{status.error}</p>
          ) : null}

          <div className="mt-5 md:mt-10 flex justify-center space-x-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="w-20 h-10 border border-[#5856d6] hover:border-white hover:bg-black rounded-md text-[#5856d6] hover:text-white text-sm"
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={() => {
                  if (step === 1 && !validateStep1()) return;
                  setStep((s) => s + 1);
                }}
                className="w-20 h-10 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm"
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                type="submit"
                disabled={status.loading}
                className="w-20 h-10 bg-[#5856d6] hover:bg-[#3d3b98] rounded-md text-white text-sm disabled:opacity-60"
              >
                {status.loading ? "..." : "Submit"}
              </button>
            )}
          </div>
        </form>
      </div>

      {status.success ? (
        <SuccessModal
          onClose={() => {
            setStatus({ loading: false, error: "", success: false });
            router.push("/hire");
          }}
        />
      ) : null}
    </div>
  );
}
