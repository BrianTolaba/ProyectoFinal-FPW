import imagen1 from '../assets/imag/logo.png';
import sonidoDied from '../assets/sound/Died.mp3';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Games() {
  const navegacion = useNavigate();

  const ejecutarSonido = () => {
    const sonido = new Audio(sonidoDied);
    sonido.play();
  }

  const manejarClickImagen = () => {
    //que haga cualquier otra cosa antes de navegar
    ejecutarSonido();
    navegacion('/');
  }

  return (
    <div>
      <h1>GAMES</h1>
      
      <h1> <Link to="/">HOME</Link> </h1>
      <img src={imagen1} width="100%" onClick={manejarClickImagen} />
    </div>
  );
}

export default Games;