import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../App.css";

class ContentBanner extends React.Component {
  render() {
    return (
      <>
        <section className="Banner text-light">
          <div className="container">
            <div className="content">
              <div style={{ position: "relative", top: "10rem" }}>
                <h1 className="">Welcome To ImdbID</h1>
                <h3 className={{ fontWeight: "bold" }}>Website Movie</h3>

                <p className="">
                  Lorem ipsum dolor
                  <br />
                  adipisicing elit. Vitae,
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ContentBanner;
