import { Link } from 'react-router-dom';
import '../assets/css/Error.css';
import errorImage from '../assets/imag/error.png';

function Error() {

  
  return (
    <div className="error-container">
    <h1 className="error-title">ERROR</h1> 
    <Link to="/" className="error-button">  Volver a Home</Link>
    <img src={errorImage} alt="Página no encontrada" className="error-image" />
    </div>
  );
}

export default Error;
