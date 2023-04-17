import React from 'react'

const Carousal = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id = 'carousel'>
  <div className="carousel-caption " style={{zIndex:"10"}}>
  <form className="d-flex">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>


    <div className="carousel-item active">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?burger" style={{filter: "brightness(30%)"}} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?pizza" style={{filter: "brightness(30%)"}} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?fries" style={{filter: "brightness(30%)"}} alt="Third slide"/>
    </div>
  </div>
  <button className="carousel-control-prev" data-bs-target="#carouselExampleFade" type="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" data-bs-target="#carouselExampleFade" type="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}


export default Carousal