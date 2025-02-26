import React, { useState, useEffect } from "react";
import Cards from "./Cards"; // Ensure Cards is correctly imported
import axios from "axios"; 
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]); // Stores books fetched from backend
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("Fetched Books:", res.data); // Debugging
        setBook(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books");
        setLoading(false);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl md:text-4xl dark:text-white">
          We're delighted to have you{" "}
          <span className="text-purple-700">Here! :)</span>
        </h1>
        <p className="mt-12 dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum
          aliquid laboriosam eveniet illum sunt explicabo veniam nesciunt
          consequuntur repellat. Facilis placeat omnis itaque quod officiis.
          Beatae autem harum voluptate architecto aperiam vitae optio, dolor
          rerum explicabo nemo, obcaecati itaque tempora, dolorum ad ex
          inventore? Similique culpa possimus repellendus nisi.
        </p>
        <Link to="/">
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* Show Loading, Error, or Books */}
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading courses...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">{error}</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {book.length > 0 ? (
            book.map((item) => (
              <Cards key={item.id} item={item} /> // Ensure Cards component uses correct data
            ))
          ) : (
            <p className="text-center text-gray-500">No courses found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Course;
