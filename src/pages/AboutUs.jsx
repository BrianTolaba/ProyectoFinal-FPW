import Jake from ".././assets/imag/Jake.png"
function AboutUs() {
  return (
    <div>
      <h1>ABOUT US</h1>
      

      <div className="row text-center justify-content-center">

        <div className="card col-md-3 m-2">
          <img src={Jake} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="https://github.com/SebaGAriki" target="_blank" className="btn btn-primary ">Go to Seba</a>
          </div>
        </div>

        <div className="card col-md-3 m-2">
          <img src={Jake} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="https://github.com/chiliguaylucas" target="_blank" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card col-md-3 m-2">
          <img src={Jake} className="card-img-top  " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="https://github.com/BrianTolaba" target="_blank" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </div>


  );
}

export default AboutUs;