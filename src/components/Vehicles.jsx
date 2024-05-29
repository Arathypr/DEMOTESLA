import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "./constant/index";

function Vehicles() {
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  const filteredCars = navLinks.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCars = filteredCars.slice(0, itemsPerPage);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <section className="p-4">
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by model"
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {paginatedCars.map(({ id, img, title, desc }) => (
            <Link to={`/car/${id}`} key={id}>
              <div className="vehicle-card relative flex flex-col items-center justify-center p-4 border border-gray-300 rounded">
                <img src={img} alt={title} className="h-40 object-cover mb-4" />
                <h1 className="text-2xl font-medium">{title}</h1>
                <p className="text-sm font-medium">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default Vehicles;
