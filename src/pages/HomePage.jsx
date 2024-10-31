import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import BrowseJobs from '../components/BrowseJobs';
import ViewJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCards />
      <BrowseJobs />
      <ViewJobs />
    </div>
  );
};

export default HomePage;
