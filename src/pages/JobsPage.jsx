import JobListing from '../components/JobListings';

const JobsPage = () => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListing isHome={true} />
    </section>
  );
};

export default JobsPage;
