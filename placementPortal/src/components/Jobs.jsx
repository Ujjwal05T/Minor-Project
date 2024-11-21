import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import useAuth from '../hooks/useAuth';


function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, token } = useAuth();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:8080/jobs', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setJobs(response.data);
        console.log(token)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to fetch jobs. Please try again later.');
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchJobs();
    }
  }, [isAuthenticated, token]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd-MM-yyyy');
  };

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
    
  return (
    <>
    <h1 className='text-3xl font-bold text-center my-8'>Available Jobs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job,index) => (
          <div key={index} className="job-card bg-white shadow-lg rounded-lg p-4 mx-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">{job.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company_name}</p>
            
            <p className="text-gray-700 mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong> {job.description}</p>
            <p className="text-gray-700 mb-4"><strong>Last Date:</strong> {formatDate(job.last_date)}</p>

            <a href={job.apply_link} className='btn text-semibold'>Apply</a>
            
          </div>
        ))}
      </div>   
    </>
  )
}

export default Jobs