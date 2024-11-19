import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [formData, setFormData] = useState({
    title: '',
    company_name: '',
    description: '',
    last_date: '',
    apply_link: '',
    salary:0
  });

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const response = await axios.post('http://localhost:8080/jobs', formData);
      setJobs([...jobs, response.data]);
      setFormData({
        title: '',
        company_name: '',
        description: '',
        last_date: '',
        apply_link: '',
        salary:0
      });
      setSuccess('Job posted successfully!');
    } catch (error) {
      console.error('Error posting job:', error);
      setError('Failed to post job. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="flex md:flex-wrap md:justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 w-full mx-2 md:w-[60%]">
        <div>
          <label className="block text-sm font-medium ">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">Company Name</label>
          <input
            type="text"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium ">Last Date</label>
          <input
            type="date"
            name="last_date"
            value={formData.last_date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium ">Salary offered</label>
          <input
            type="integer"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Apply Link</label>
          <input
            type="text"
            name="apply_link"
            value={formData.apply_link}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post Job
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default AdminPanel;