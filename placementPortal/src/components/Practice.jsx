import React from 'react';
import { materials } from '../index';

function Practice() {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Placement Preparation Materials</h1>
      <div className="space-y-4">
        {materials.map((material, index) => (
          <div key={index} className="bg-inherit shadow-lg rounded-lg p-4 flex justify-between">
            <div>
            <h2 className="text-2xl font-semibold mb-2">{material.title}</h2>
            <p className=" mb-2"><strong>Type:</strong> {material.type}</p>
            <p className="mb-4">{material.description}</p>
            </div>
            <div>
            <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 btn">
              Access Material
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Practice;