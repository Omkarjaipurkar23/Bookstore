import React from "react";

function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <div className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-2 text-lg">Learn more about who we are and what we do</p>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600">Who We Are</h2>
          <p className="mt-2 text-lg">
            We are a team of passionate developers, designers, and problem-solvers 
            dedicated to creating innovative solutions that make life easier and better.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
          <p className="mt-2 text-lg">
            Our mission is to build high-quality, user-friendly applications that help 
            businesses and individuals achieve their goals effortlessly.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600">Our Vision</h2>
          <p className="mt-2 text-lg">
            We envision a world where technology empowers people, making processes 
            smoother, businesses more efficient, and lives more connected.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-600">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-3">John Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-3">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src="https://via.placeholder.com/100"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-3">David Lee</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 bg-blue-600 text-white">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Aboutus;
