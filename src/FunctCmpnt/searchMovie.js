import React, { useState, useRef, useEffect } from "react";
import Card from "./card";
import Banner from "./banner";

const SearchMovie = () => {
  const [inputMovie, setInputMovie] = useState("");
  const [tampungMovie, setTampungMovie] = useState([]);
  const mRef = useRef(null);

  useEffect(() => {
    if (tampungMovie.length > 0) {
      mRef.current.textContent = "Movie List";
    }
  }, [tampungMovie]);

  const doMovie = async (e) => {
    e.preventDefault();
    const getMovie = await gtMovie();
    console.log("List Movie", getMovie);

    if (inputMovie !== "") {
      setTampungMovie(getMovie);
      setInputMovie("");
    }
  };

  const gtMovie = () => {
    return fetch("https://www.omdbapi.com/?apikey=76ab7cb7&s=" + inputMovie)
      .then((respon) => respon.json())
      .then((respon) => respon.Search);
  };
  return (
    <>
      <section className="SearchMovie">
        <div className="container">
          <div className="text-light">
            <div className="row mt-4">
              <h3 className="">🎬 Movie Web Search </h3>
            </div>
            <div className="row mt-3">
              <div className="input-group mb-3">
                <div class="col-lg-6 col-md-6 col-sm-4 pe-2">
                  <input
                    type="text"
                    className="form-control bg bg-dark text-light"
                    placeholder="Search Movie"
                    onChange={(inp) => setInputMovie(inp.target.value)}
                    value={inputMovie}
                  />
                </div>
                <div class="col-lg-6 col-md-4 col-sm-2">
                  <button
                    className="btn bg-transparent btn-outline-primary"
                    onClick={doMovie}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
      <div className="container">
        <div className="row mt-5 text-light">
          <h1 className="" ref={mRef}></h1>
        </div>
      </div>
      <Card tampung={tampungMovie} />
    </>
  );
};

export default SearchMovie;
