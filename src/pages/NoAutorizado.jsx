import { Link } from 'react-router-dom';

function NoAutorizado() {
  return (
    <div>
      <Link to="/" className="error-button">Volver a Home</Link>
    </div>
  );
}

export default NoAutorizado;