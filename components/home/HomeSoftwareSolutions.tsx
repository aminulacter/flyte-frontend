import type { SoftwareSolution } from "@/lib/types";

export default function HomeSoftwareSolutions({ solutions = [] }: { solutions?: SoftwareSolution[] }) {
  if (!solutions.length) return null;

  return (
    <div className="bg-gradient-to-b from-[#8e8cff] to-[#5856d6]">
      <div className="container p-5 lg:p-16 relative">
        <h2 className="text-center text-white text-2xl lg:text-[45px] font-bold mb-5">
          Custom Software Solutions
        </h2>
        <p className="text-center text-white text-base lg:text-lg">
          Choose Custom Solutions to Fit Your Business Needs
        </p>
        <div className="my-10 lg:my-14 flex flex-wrap justify-center gap-7">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="p-4 flex items-center gap-3 bg-white/5 rounded-[7.20px] border border-[#1ed0c6] lg:w-[220px]"
              style={{ borderColor: item.icon_color }}
            >
              <i
                className={`fa-2x fa-solid bg-transparent font-extralight ${item.icon_class}`}
                style={{ color: item.icon_color }}
              />
              <span className="text-white text-sm font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
