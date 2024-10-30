import { Slider } from "@chakra-ui/react";
import { movies } from "../providers/data";

export default function Movies() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const renderMovies = (startIndex) => (
    <>
      {movies.slice(startIndex, startIndex + 3).map((movie) => {
        const isReversed = movie.id % 2 === 0;
        return (
          <div
            className={`w-full px-4 flex ${
              isReversed ? "flex-row-reverse" : "flex-row"
            } items-center mt-20`}
            key={movie.id}
          >
            <div
              className={`w-1/3 bg-gradient-to-tl ${movie.gradient} rounded-xl shadow-lg p-2 aspect-square flex items-center justify-center text-white`}
            >
              <div className="flex flex-col p-4">
                <h3 className="font-bold md:text-4xl">{movie.title}</h3>
                <span className="lg:text-md">| {movie.year}</span>
                <p className="lg:text-md italic mt-4">{movie.genres}</p>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div className="text-center text-black lg:text-3xl font-bold font-noto leading-tight writing-mode-vertical md:text-xl">
                {movie.japaneseTitle.split("").map((char, idx) => (
                  <span key={idx}>
                    {char}
                    <br />
                  </span>
                ))}
              </div>
            </div>
            <div className="w-1/3 relative group">
              <img
                className="w-full h-full rounded-full shadow object-cover object-center transition-transform transform hover:scale-110"
                src={movie.image}
                alt={movie.title}
                loading="lazy"
              />
              <img
                className="hidden w-full h-full rounded-full shadow object-cover object-center absolute top-0 left-0 transition-opacity opacity-0 group-hover:opacity-100"
                src={movie.gif}
                alt={`${movie.title} Hover`}
                loading="lazy"
              />
            </div>
          </div>
        );
      })}
    </>
  );

  return (
    <section className="py-10 lg:py-10 bg-stone-100" id="movies">
      <div className="max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        {/* Section Title */}
        <div className="text-center flex flex-col items-center mb-8">
          <span className="text-sm text-gray-600 uppercase">Masterpieces</span>
          <h1 className="mt-2 text-3xl font-black font-oregano text-gray-700 md:text-5xl border-b-4 border-pink-500">
            Movies
          </h1>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          <div>{renderMovies(0)}</div>
          <div>{renderMovies(3)}</div>
          <div>{renderMovies(6)}</div>
          <div>{renderMovies(9)}</div>
          <div>{renderMovies(12)}</div>
          <div>{renderMovies(15)}</div>
        </Slider>
      </div>
    </section>
  );
}
