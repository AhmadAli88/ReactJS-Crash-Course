import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';

import ViewJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewJobs />
    </div>
  );
};

export default HomePage;
