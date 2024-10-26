// ApartmentComplex.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sliding() {
  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-4">Apartment Complex</h1>
      <p className="text-lg mb-4">Welcome to our apartment complex!</p>
      <ul className="list-none mb-4">
        <li className="mb-2">
          <Link to="/apartments" className="text-blue-600 hover:text-blue-800">
            View Apartments
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/amenities" className="text-blue-600 hover:text-blue-800">
            View Amenities
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sliding;