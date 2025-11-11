import Jake from ".././assets/imag/Jake.png"
function AboutUs() {
  return (
    <div>
      <h1>Nosotros</h1>
      

      <div className="row text-center justify-content-center">

        <div className="card col-md-3 m-2">
          <img src={"https://avatars.githubusercontent.com/u/83613258?v=4"} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Gonzalez Ariki Sebastian</h5>
            <p className="card-text"></p>
            <a href="https://github.com/SebaGAriki" target="_blank" className="btn btn-primary ">REPOSITORIO</a>
          </div>
        </div>

        <div className="card col-md-3 m-2">
          <img src={"https://avatars.githubusercontent.com/u/165035227?v=4"} className="card-img-top " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Chiliguay Lucas</h5>
            <p className="card-text"></p>
            <a href="https://github.com/chiliguaylucas" target="_blank" className="btn btn-primary">REPOSITORIO</a>
          </div>
        </div>
        <div className="card col-md-3 m-2">
          <img src={"https://avatars.githubusercontent.com/u/165030015?v=4"} className="card-img-top  " alt="..." />
          <div className="card-body">
            <h5 className="card-title">Tolaba Brian</h5>
            <p className="card-text"></p>
            <a href="https://github.com/BrianTolaba" target="_blank" className="btn btn-primary">REPOSITORIO</a>
          </div>
        </div>
      </div>

    </div>


  );
}

export default AboutUs;