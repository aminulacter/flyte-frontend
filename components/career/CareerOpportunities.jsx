import JobCard from "./JobCard";

/**
 * Career openings grid. `jobs` is fetched at build time (SSG) from
 * `GET /career` and passed in from the page. When there are no openings we show
 * the original "Coming Soon" state.
 */
export default function CareerOpportunities({ jobs = [] }) {
  const list = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="container mb-10 md:mb-16">
      <h2 className="w-full md:w-[613px] md:text-center text-lg md:text-[32px] font-semibold mx-auto md:leading-10">
        Explore Exciting <span className="text-[#5856d6]">Career</span> Opportunities -
        <span className="text-[#5856d6]"> Join</span> Our Team Today!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {list.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-lg font-semibold py-10">
            🚧 Coming Soon 🚧
          </div>
        ) : (
          list.map((job) => (
            <div key={job?.id ?? job?.slug}>
              <JobCard opportunity={job} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
