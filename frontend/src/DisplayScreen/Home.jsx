import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState("");

  const [foodcat, setfoodcat] = useState([]);
  const [fooditem, setfooditem] = useState([]);

  const loadData = async () => {
    let response = await fetch("/api/fooddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setfooditem(response[0]);
    setfoodcat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <div>
        <div className="">
          <Navbar />
        </div>

        <div className="carousle">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" id="carousel">
              <div className="carousel-caption " style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center ">
                  <input
                    className="form-control mr-sm-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                  {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                </div>
              </div>

              <div className="carousel-item active">
                <img
                  className="d-block w-100 "
                  src="https://source.unsplash.com/random/500×400/?metro"
                  style={{ filter: "brightness(30%)" }}
                  alt="First slide"
                  styles={{ objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/random/500×400/?bus"
                  style={{ filter: "brightness(30%)" }}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://source.unsplash.com/random/500×400/?hotels"
                  style={{ filter: "brightness(30%)" }}
                  alt="Third slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              data-bs-target="#carouselExampleFade"
              type="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              data-bs-target="#carouselExampleFade"
              type="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="m-3 container ">
          {foodcat !== []
            ? foodcat.map((data) => {
                return (
                  <div className="row mb-3">
                    <div key={data._id} className="">
                      {data.CategoryName}
                    </div>

                    {fooditem !== [] ? (
                      fooditem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <>
                              <div
                                className="col-12 col-md-6 col-lg-3"
                                key={filterItems._id}
                              >
                                <Card
                                  fooditem={filterItems}
                                  options={filterItems.options[0]}
                                />
                              </div>
                            </>
                          );
                        })
                    ) : (
                      <div> no data found </div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
