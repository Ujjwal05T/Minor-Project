import React, { useState } from 'react';

function AdminPanel() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    description: '',
    applyDate: '',
    lastDate: '',
    applyLink: ''
  });

  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs([...jobs, formData]);
    setFormData({
      jobTitle: '',
      companyName: '',
      description: '',
      applyDate: '',
      lastDate: '',
      applyLink: ''
    });
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
      <div className="flex flex-wrap justify-center">
      <form onSubmit={handleSubmit} className="space-y-4 lg:w-[60%]">
        <div>
          <label className="block text-sm font-medium text-gray-500">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Apply Date</label>
          <input
            type="date"
            name="applyDate"
            value={formData.applyDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Last Date</label>
          <input
            type="date"
            name="lastDate"
            value={formData.lastDate}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500">Apply Link</label>
          <input
            type="url"
            name="applyLink"
            value={formData.applyLink}
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
      <div className="mt-8 flex flex-wrap justify-center">
        <h2 className="text-2xl font-bold mb-4">Posted Jobs</h2>
        <ul>
          {jobs.map((job, index) => (
            <li key={index} className="mb-4 p-4 border border-gray-300 rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">{job.jobTitle}</h3>
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Description:</strong> {job.description}</p>
              <p><strong>Apply Date:</strong> {job.applyDate}</p>
              <p><strong>Last Date:</strong> {job.lastDate}</p>
              <p><strong>Apply Link:</strong> <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">{job.applyLink}</a></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;