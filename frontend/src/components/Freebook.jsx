import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards"; // ✅ Import Cards component

function Freebook() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("./list.json") // ✅ Ensure `list.json` is inside `public/`
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const filterBook = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: false, // ✅ Keep this consistent in breakpoints
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
          infinite: false, // ✅ Keep this consistent
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
      <div className="mx-5 my-10 ">
        <h1 className="font-semibold text-3xl pb-2 flex align-middle justify-center ">
          Free Offered Books
        </h1>
      </div>

      <div>
        {filterBook.length > 0 ? ( // ✅ Avoid rendering Slider if no books found
          <Slider {...settings}>
            {filterBook.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No free books available.</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
