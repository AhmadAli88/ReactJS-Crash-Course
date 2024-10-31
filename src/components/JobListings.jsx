/*eslint-disable*/
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { jobs } from '../jobs.json';
import JobListing from './JobListing';
import Spinner from './Spinner';

// const JobListings = ({ isHome = false }) => {
const JobListings = ({ isHome }) => {
  const apiUrl = isHome ? '/api/jobs' : '/api/jobs';
  // console.log('jobs:::::::::::', jobs);
  // const recentJobs = isHome ? jobs : jobs.slice(0, 3);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/jobs')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
          {isHome ? 'Browse Jobs' : 'Recent Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;

JobListings.propTypes = {
  job: PropTypes.object,
};
