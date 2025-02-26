import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards"; // ✅ Import Cards component

function Freebook() {
  const [books, setBooks] = useState([]); // ✅ Store books from backend
  const [loading, setLoading] = useState(true); // ✅ Track loading state
  const [error, setError] = useState(null); // ✅ Track error state

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("Fetched Books:", res.data); // ✅ Debugging
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to load books");
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  // ✅ Filter books with category "Free"
  const filterBook = books.filter((book) => book.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-5 dark:bg-slate-900 dark:text-white px-4 my-10">
      <div className="mx-5 my-10">
        <h1 className="font-semibold text-3xl pb-2 flex align-middle justify-center">
          Free Offered Books
        </h1>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading books...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filterBook.length > 0 ? (
        <Slider {...settings}>
          {filterBook.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-500">No free books available.</p>
      )}
    </div>
  );
}

export default Freebook;
