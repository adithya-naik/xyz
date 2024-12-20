import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "ShakeShack",
      image: "https://cdn.sanity.io/images/3vte03iz/production/3934c5000d7d4a36a249cd915464ead82672804b-2381x2381.jpg?auto=format&amp;w=1000&amp;h=1000",
      link: "/shakeshack",
    },
    {
      id: 2,
      title: "Jaffa",
      video: "https://stream.mux.com/Lnj84JuJnW5ZZ0100Eu1j8ijJiXwqBeNsHtqnzO3um2hg.m3u8",
      link: "/jaffa",
    },
    {
      id: 3,
      title: "Caulfield Cup",
      video: "https://stream.mux.com/N6Xh3gY02KL8VLoE8TwvqUmARSTFnHyxdhknq00LA7DwA.m3u8",
      link: "/caulfield-cup",
    },
    {
      id: 4,
      title: "Frugo",
      video: "https://stream.mux.com/ejhv50001qeHns2HU6E007a18tUVN01TJStdIMcK8AFigmI.m3u8",
      link: "/frugo",
    },
    {
      id: 5,
      title: "Brompton",
      image: "https://cdn.sanity.io/images/3vte03iz/production/fdcb516c840afca7e81dd9c22280046858bab0e4-1500x1500.jpg?auto=format&amp;w=1000&amp;h=1000",
      link: "/brompton",
    },
    {
      id: 6,
      title: "260 Collins",
      image: "https://cdn.sanity.io/images/3vte03iz/production/c9e0c0332346ea0e8031e53baa38cc69d44cb21f-2711x2711.png?auto=format&amp;w=1000&amp;h=1000",
      link: "/260-collins",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section className="index-page__project relative overflow-hidden">
      <div className="text-block mb-8">
        <h4 className="text-block__title text-2xl font-semibold text-gray-800">Featured Work</h4>
        <p className="text-block__description text-lg text-gray-600">Select recent and notable projects</p>
      </div>

      {/* Carousel Container */}
      <div className="carousel__container relative overflow-hidden">
        <div className="carousel__track flex transition-transform duration-500 ease-in-out">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`carousel__slide flex-shrink-0 w-full ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
              style={{
                transition: "opacity 0.5s ease",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover rounded-lg shadow-lg" // Set height to 72 (18rem) and responsive width with rounded corners and shadow
                />
              ) : (
                <video
                  src={project.video}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-72 object-cover rounded-lg shadow-lg"
                />
              )}
              <a
                href={project.link}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full cursor-pointer text-xl font-semibold shadow-lg"
              >
                {project.title}
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Carousel;
