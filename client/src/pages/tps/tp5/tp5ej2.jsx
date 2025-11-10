import FormulariosWeb from '../../../components/FormulariosWeb';
import Archivos from "../../../assets/imag/tp-5-Archivos.jpg";
function tp5ej2() {
  return (<>

    <div className='text-center shadow-lg text-light bg-primary  rounded-4 mt-5'>
      <h1>FORMULARIO</h1>
      <h2>Ingrese su nombre de usuario y correo electronico</h2>
      <p>* este formulario es una prueba cerrada</p>

    </div>

    <div className='row'>
<div className='col-md-6 shadow-lg bg-dark-subtle rounded-3 '> 
      <FormulariosWeb />
    </div>

<div className='col-md-6 shadow-lg rounded-3 text-center'>
  <img src={Archivos} alt="imagen de Registro" style={{ width: "auto", height: "auto"}} />
</div>
    
    
    </div>
  </>
  );
}

export default tp5ej2;