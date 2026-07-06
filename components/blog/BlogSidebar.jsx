import Link from "next/link";

/** Trending Topics + Top Reads sidebar cards for the blog list page. */

export function TrendingTopics({ trending }) {
  const topics = trending?.trendingtopics || [];
  return (
    <div className="py-2.5 lg:py-10 px-3 lg:px-[40px] border-2 border-[#FFD988] bg-[#FFF8E6] h-full rounded-2xl flex flex-col flex-1">
      <h1 className="text-center text-[#161c2d] text-2xl font-bold mb-2">Trending Topics</h1>
      <p className="text-[#121416] text-center text-base font-normal mb-5">
        Navigate through our most popular blog topics.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {topics.map((t, i) => (
          <div key={i} className="rounded-xl relative">
            <Link href={`/company/news-and-blogs/${t?.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="lg:w-[240px] lg:h-[165px] rounded-xl object-cover mb-2"
                src={t?.image}
                alt={t?.slug}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[29px] px-2 py-[7px] bg-white/20 rounded-[3.18px] backdrop-blur-[9.55px] flex items-center">
                <p className="text-white text-xs font-normal">{t?.tag}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopReads({ trending }) {
  const reads = (trending?.topreads || []).slice(0, 2);
  return (
    <div className="py-2.5 lg:py-10 px-3 lg:px-[40px] border-2 border-[#FFB2B2] bg-[#FFF8E6] h-full rounded-2xl flex flex-col flex-1">
      <h1 className="text-center text-black text-xl font-bold mb-7">Top Reads</h1>
      <div className="flex flex-col gap-8">
        {reads.map((b, i) => (
          <div key={i} className="bg-white flex flex-col lg:flex-row gap-5 transition-transform duration-500 mb-2">
            <div className="flex-1 relative h-auto">
              <Link href={`/company/news-and-blogs/${b?.slug}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" src={b?.image} alt={b?.title} />
                <div className="absolute h-full inset-0 bg-black/25" />
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  {b?.tag?.map((t, j) => (
                    <div key={j} className="blogs-keyword-div px-3 py-1 rounded-lg text-xs bg-white/50">
                      <span className="inline-block text-white">{t}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
            <div className="px-2.5 lg:px-0 w-full lg:w-1/2 py-4 space-y-3">
              <h2 className="w-fit h-11 overflow-hidden text-[#121416] text-sm text-wrap font-semibold mb-2 lg:mb-0 line-clamp-2">
                {b?.title}
              </h2>
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b?.admin?.profile} alt="user image" className="rounded-full w-8 h-8 object-cover border" />
                <h4 className="text-[#696A75] text-xs font-semibold">{b?.admin?.name}</h4>
                <div className="w-5 h-[1px] bg-[#696A75]" />
                <time className="text-[#696A75] text-xs" dateTime={b?.date}>
                  {b?.date}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#696A75] text-xs">
                  <i className="mr-1 fa-solid fa-bookmark" /> 5 min read
                </div>
                <div className="w-5 h-[1px] bg-[#696A75]" />
                <div className="text-[#696A75] text-xs">
                  <i className="mr-1 fa-solid fa-chart-simple" /> {b?.view_count} views
                </div>
              </div>
              <p className="h-16 overflow-hidden text-[#6c757d] text-xs line-clamp-4">{b?.short_description}</p>
              <div>
                <Link className="border-black hover:border-btnColor" href={`/company/news-and-blogs/${b?.slug}`}>
                  <div className="text-black hover:text-btnColor text-xs">View Post</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
