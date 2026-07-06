import Link from "next/link";

export default function BlogCard({ blog }) {
  const { image, title, tag = [], date, view_count, short_description, slug, admin } = blog || {};
  return (
    <div className="w-full max-w-[392px] h-[504.80px] bg-white group">
      <div className="w-full h-[200px] relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute top-2 left-2 flex flex-wrap gap-2 z-10">
          {tag?.map((t, i) => (
            <div key={i} className="blogs-keyword-div px-3 py-1 rounded-lg text-xs">
              <span className="inline-block text-white">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 flex-col bg-white group-hover:bg-cyan-50 group-hover:shadow-xl transition-all duration-500 justify-start items-start gap-3 flex">
        <h2 className="h-16 overflow-hidden text-[#121416] text-base font-semibold leading-loose">
          {title}
        </h2>
        <div className="h-[220.80px] flex-col justify-start items-start gap-3 flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch grow shrink basis-0 justify-start items-center gap-2 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-[31.82px] h-[31.82px] rounded-full border" src={admin?.profile} alt={admin?.name} />
                <div className="text-[#121416] text-xs font-semibold leading-loose">{admin?.name}</div>
              </div>
              <div className="w-[28.64px] h-[0.80px] bg-[#6c757d]/40" />
              <div className="text-[#6c757d] text-xs font-normal leading-loose">{date}</div>
            </div>
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="justify-center items-center gap-1 flex">
                <i className="fa-regular fa-bookmark text-[#6c757d]" />
                <div className="text-[#6c757d] text-xs font-normal leading-loose"> 5 min read</div>
              </div>
              <div className="justify-center items-center gap-1 flex">
                <i className="fa-solid fa-chart-simple text-[#6c757d]" />
                <div className="text-[#6c757d] text-xs font-normal leading-loose">{view_count || 0} views</div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[54px] overflow-hidden text-[#6c757d] text-xs font-normal leading-[17.96px]">
            {short_description}
          </div>
          <div className="flex-col justify-start items-center flex">
            <Link href={`/company/news-and-blogs/${slug}`} className="svg-wrapper">
              <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="320" />
              </svg>
              <div className="text">Read More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
