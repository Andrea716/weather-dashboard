import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) { // Ensure city is not empty before searching
      onSearch(city);
      setCity(''); // Clear input after search
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 justify-center"> {/* Added justify-center for alignment */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="p-2 rounded-lg border border-gray-300"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
