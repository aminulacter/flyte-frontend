const values = [
  {
    icon: "fa-earth-americas",
    title: "Diversity",
    text: "We hire people from diverse backgrounds to foster innovation and creativity.",
  },
  {
    icon: "fa-trophy",
    title: "Collaboration",
    text: "We believe in teamwork and open communication to achieve great results.",
  },
  {
    icon: "fa-shield-alt",
    title: "Integrity",
    text: "Honesty and transparency are at the heart of everything we do.",
  },
  {
    icon: "fa-arrow-up-right-dots",
    title: "Growth Mindset",
    text: "We encourage continuous learning and self-improvement.",
  },
];

export default function WorkCulture() {
  return (
    <div className="container mb-10 lg:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
        <div className="space-y-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full lg:w-[311px] lg:h-[165px] object-cover"
            src="https://i.ibb.co.com/2NN4pNq/Rectangle-1.png"
            alt="work culture"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full lg:w-[311px] lg:h-[165px] object-cover"
            src="https://i.ibb.co.com/wNB52YH/Rectangle-3.png"
            alt="work culture"
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full lg:w-[244px] lg:h-[346px] object-cover"
          srcSet="https://i.ibb.co.com/ykzczw9/Rectangle-2.png 480w, https://i.ibb.co/1rh6PLb/Rectangle-2-1.png 1024w"
          sizes="(max-width: 480px) 100vw, (max-width: 768px) 75vw, 244px"
          src="https://i.ibb.co/1rh6PLb/Rectangle-2-1.png"
          alt="work-culture"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center mb-4 lg:mb-8">
          <span className="text-[#5856d6]">Work</span> Culture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-x-6 gap-5 lg:gap-y-9">
          {values.map((v) => (
            <div key={v.title}>
              <div className="md:w-[250px] mx-auto">
                <div className="flex items-center gap-3 md:gap-6 mb-1 md:mb-4 w-[180px] md:w-full">
                  <i className={`fa-solid text-white bg-[#5856D6] p-2 ${v.icon}`} />
                  <h4 className="text-base font-semibold">{v.title}</h4>
                </div>
                <p className="text-xs md:text-sm">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
