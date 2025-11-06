import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Error from './pages/Error';
import NoAutorizado from './pages/NoAutorizado';
import Games from './pages/Games';
import AboutUs from './pages/AboutUs';
import Formulario from './pages/Formulario';
import Tp2Ej1 from './pages/tps/tp2/tp2ej1';
import Tp2Ej2 from './pages/tps/tp2/tp2ej2';
import Tp2Ej3 from './pages/tps/tp2/tp2ej3';
import Tp2Ej4 from './pages/tps/tp2/tp2ej4';
import Tp2Ej5 from './pages/tps/tp2/tp2ej5';
import Tp3Ej1 from './pages/tps/tp3/tp3ej1';
import Tp3Ej2 from './pages/tps/tp3/tp3ej2';
import Tp4 from './pages/tps/tp4/tp4';
import Tp5 from './pages/tps/tp5/tp5';
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectorRutas from './components/ProtectorRutas';

function App() {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/games" element={
            <ProtectorRutas allowedRoles={['ADMINISTRATIVO']}>
              <Games />
            </ProtectorRutas>
          } />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/tp2ej1" element={<Tp2Ej1 />} />
          <Route path="/tp2ej2" element={<Tp2Ej2 />} />
          <Route path="/tp2ej3" element={<Tp2Ej3 />} />
          <Route path="/tp2ej4" element={<Tp2Ej4 />} />
          <Route path="/tp2ej5" element={<Tp2Ej5 />} />
          <Route path="/tp3ej1" element={<Tp3Ej1 />} />
          <Route path="/tp3ej2" element={<Tp3Ej2 />} />
          <Route path="/tp4" element={<Tp4 />} />
          <Route path="/tp5" element={<Tp5 />} />
          <Route path="/unauthorized" element={<NoAutorizado />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Container>
  )
}
export default App;