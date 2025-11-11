import { Link } from 'react-router-dom';
import '../assets/css/Error.css';

function NoAutorizado() {
  return (
    <div className="error-container">
      <Link to="/" className="error-button">Volver a Home</Link>
    </div>
  );
}

export default NoAutorizado;