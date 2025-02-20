import React from "react";

function Cards({ item }) {
  if (!item) {
    return <div>No data available</div>; // Fallback if item is undefined
  }

  const { image, name, price, title } = item;

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-5 px-4 flex flex-col md:flex-row md:my-5">
      <div className="card bg-base-100 dark:bg-slate-900 dark:text-white border-double w-96 shadow-xl border border-gray-300 hover:scale-105 duration-200">
        <figure className="w-full h-48 overflow-hidden">
          <img
            src={image || "https://via.placeholder.com/150"} // Fallback image
            alt="Not available"
            className="object-contain w-full h-full" // Ensures image covers the available space
          />
        </figure>
        <hr className="border border-gray-300"/>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div
              className={`badge badge-outline text-xs px-2 py-1 ${
                price === 0 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {price === 0 ? "Free" : `${item.category}`}
            </div>
          </h2>
          <p>{title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline px-3 py-4">Rs. {price}</div>
            <div className="badge cursor-pointer px-3 py-4 bg-blue-500 text-white border-none hover:bg-blue-600 transition-all">
              Buy now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
