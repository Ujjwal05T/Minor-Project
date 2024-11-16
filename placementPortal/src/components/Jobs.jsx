import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {jobs} from '../index';


function Jobs() {
    
  return (
    <>
    <h1 className='text-3xl font-bold text-center my-8'>Available Jobs</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="job-card bg-white shadow-lg rounded-lg p-4 mx-4">
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-2"><strong>Company:</strong> {job.company}</p>
            <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
            <p className="text-gray-700 mb-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-gray-700 mb-4"><strong>Description:</strong> {job.description}</p>
            <div>
              <strong className="text-gray-700">Requirements:</strong>
              <ul className="list-disc list-inside ml-4 mb-4">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-600">{requirement}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-500 text-sm"><strong>Posted Date:</strong> {job.posted_date}</p>
          </div>
        ))}
      </div>
        
      

    
    </>
  )
}

export default Jobs