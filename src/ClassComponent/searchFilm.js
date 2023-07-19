import React, { Component } from "react";
import Tcard from "./tampilCard";
import ContentBanner from "./bannerContent";

class Search extends React.Component {
  state = {
    tampungMovie: [],
    input: "",
  };
  SearchMovie = async () => {
    const getMovie = await this.fetchMovie();
    console.log(getMovie);
    if (this.state.input !== "") {
      this.setState({
        tampungMovie: getMovie,
        input: "",
      });
    }
  };

  fetchMovie = () => {
    return fetch(
      "https://www.omdbapi.com/?apikey=76ab7cb7&s=" + this.state.input
    )
      .then((respon) => respon.json())
      .then((respon) => respon.Search);
  };
  render() {
    // console.log("TampungM : ",this.state.tampungMovie);
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
                      onChange={(inpt) =>
                        this.setState({ input: inpt.target.value })
                      }
                      placeholder="Search Movie"
                      value={this.state.input}
                    />
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-4 pe-2">
                    <button
                      className="btn bg-transparent btn-outline-primary"
                      onClick={this.SearchMovie}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContentBanner />
        <div className="container">
          <h1 className="mt-4 text-light">Movie List</h1>
        </div>
        <Tcard data={this.state.tampungMovie} />
      </>
    );
  }
}

export default Search;
