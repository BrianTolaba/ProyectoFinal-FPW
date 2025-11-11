import { useAutorizacion } from '../hooks/useAutorizacion.js';
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import imagenMascota from '../assets/imag/Mascota.jpg';
import imagenAdivinarNumero from '../assets/imag/Adivinar.png'
import imagenEstrella from '../assets/imag/Estrella.png'
import imagenIngles from '../assets/imag/ingles.png'
import Button from 'react-bootstrap/Button';


function Home() {

  const { user, isAuthenticated } = useAutorizacion();
  const navigate = useNavigate();

  return (
    <div>
      <h2 className='text-center mt-5'>Algunos trabajos anteriores</h2>
      <Carousel className='mx-auto' style={{ maxWidth: '800px' }}>
        {isAuthenticated && (
        <Carousel.Item onClick={() => navigate('/questions')}>
          <img className="d-block w-100" src={imagenIngles} />
          <Carousel.Caption>
            <h3>Cuestionario de Inglés</h3>
          </Carousel.Caption>
        </Carousel.Item>
      )}
        <Carousel.Item onClick={() => navigate('/tp3ej2')}>
          <img className="d-block w-100" src={imagenMascota} />
          <Carousel.Caption>
            <h3>Registro de Mascotas</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate('/tp4ej1')}>
          <img className="d-block w-100" src={imagenAdivinarNumero} />
          <Carousel.Caption>
            <h3>Adivina el número</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={() => navigate('/tp5ej1')}>
          <img className="d-block w-100" src={imagenEstrella} />
          <Carousel.Caption>
            <h3>Atrapar la estrella</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;