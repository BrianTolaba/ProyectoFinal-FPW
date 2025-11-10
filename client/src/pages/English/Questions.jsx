import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from 'react-bootstrap';
import Oso from '../../assets/imag/Oso.jpg';
import Quiz from '../../assets/imag/Quiz.jpg';
import Gato from '../../assets/imag/Gato.jpg';

function Questions({ userId }) {
  const navigate = useNavigate();
  const [juegoIniciado, setJuegoIniciado] = useState(false);
  const [formularioVisible, setFormularioVisible] = useState(true);
  const [answers, setAnswers] = useState({
    Animal: '',
    vocabulary1: '',
    vocabulary2: '',
    vocabulary3: '',
    reading: '',
    pruebaFinal: '',
  });
  const [score, setScore] = useState(null);

  const respuestasCorrectas = {
    Animal: 'Bear',
    vocabulary1: 'Pensamiento',
    vocabulary2: 'Escalon',
    vocabulary3: 'IN',
    reading: 'Sí',
    pruebaFinal: 'Por supuesto',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let score = 0;
    for (const pregunta in respuestasCorrectas) {
      if (answers[pregunta] === respuestasCorrectas[pregunta]) {
        score += 1;
      }
    }

    setScore(score);
    setFormularioVisible(false);

    // Enviar a MongoDB 
    try {
      const res = await fetch('http://localhost:5000/api/respuestas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...answers,
          puntajeTotal: score,
          usuario: userId,
        }),
      });
      const data = await res.json();
      console.log('Respuesta guardada:', data);
    } catch (error) {
      console.error('Error al guardar en MongoDB:', error);
    }
  };

  return (
    <Container className="col-md-12 mt-4 text-center">
      {!juegoIniciado && (
        <div className='col-12 pantallaDeInicio'>
          <img src={Quiz} alt="QUIZ IMAGEN" />
          <h1>Bienvenido al Cuestionario de Inglés</h1>
          <Button size='lg' onClick={() => setJuegoIniciado(true)}>COMENZAR</Button>
        </div>
      )}

      {juegoIniciado && formularioVisible && (
        <Form onSubmit={handleSubmit}>
          <h3>Cuestionario de Inglés</h3>

          {/* Pregunta 1 */}
          <img className="rounded-4 w-50 h-50" src={Oso} alt="Aqui deberia haber un oso" />
          <Form.Group className="mb-3">
            <Form.Label>¿Qué ves en la imagen de arriba?</Form.Label>
            <div>
              <Form.Check label="Bear" name="Animal" value="Bear" type="radio" checked={answers.Animal === 'Bear'} onChange={handleChange} inline />
              <Form.Check label="Boar" name="Animal" value="Boar" type="radio" checked={answers.Animal === 'Boar'} onChange={handleChange} inline />
              <Form.Check label="Beer" name="Animal" value="Beer" type="radio" checked={answers.Animal === 'Beer'} onChange={handleChange} inline />
            </div>
          </Form.Group>

          {/* Pregunta 2 */}
          <Form.Group className="mb-3">
            <Form.Label>¿Que interpretacion usarias para la palabra "thought"?</Form.Label>
            <div>
              <Form.Check label="A travez de..." name="vocabulary1" value="A travez de..." type="radio" checked={answers.vocabulary1 === 'A travez de...'} onChange={handleChange} inline />
              <Form.Check label="Aunque" name="vocabulary1" value="Aunque" type="radio" checked={answers.vocabulary1 === 'Aunque'} onChange={handleChange} inline />
              <Form.Check label="Pensamiento" name="vocabulary1" value="Pensamiento" type="radio" checked={answers.vocabulary1 === 'Pensamiento'} onChange={handleChange} inline />
              <Form.Check label="Dificil" name="vocabulary1" value="Dificil" type="radio" checked={answers.vocabulary1 === 'Dificil'} onChange={handleChange} inline />
            </div>
          </Form.Group>


          {/* Pregunta 3 */}
          <Form.Group className="mb-3">
            <Form.Label>¿Puedes entender el siguiente dialogo? </Form.Label>
            <Form.Label> I don't know what's happening, it worked on my computer.</Form.Label>
            <div>
              <Form.Check label="Sí" name="reading" value="Sí" type="radio" checked={answers.reading === 'Sí'} onChange={handleChange} inline />
              <Form.Check label="No" name="reading" value="No" type="radio" checked={answers.reading === 'No'} onChange={handleChange} inline />
              
            </div>
          </Form.Group>

          {/* Pregunta 4 */}
          <Form.Group className="mb-3">
            <Form.Label>¿Que significa la palabra "Step"?</Form.Label>
            <div>
              <Form.Check label="Escalon" name="vocabulary2" value="Escalon" type="radio" checked={answers.vocabulary2 === 'Escalon'} onChange={handleChange} inline />
              <Form.Check label="Estepa" name="vocabulary2" value="Estepa" type="radio" checked={answers.vocabulary2 === 'Estepa'} onChange={handleChange} inline />
              <Form.Check label="Pasaje" name="vocabulary2" value="Pasaje" type="radio" checked={answers.vocabulary2 === 'Pasaje'} onChange={handleChange} inline />
              <Form.Check label="Crespa" name="vocabulary2" value="Crespa" type="radio" checked={answers.vocabulary2 === 'Crespa'} onChange={handleChange} inline />
            </div>
          </Form.Group>
          {/* Pregunta 5 */}
          <img className="rounded-4" src={Gato} alt="Aqui deberia haber un Gato" />
          <Form.Group className="mb-3">
            <Form.Label>Con respecto a la imagen de arriba, que palabra usarias en:</Form.Label>
            <p>The cat is ___ the box</p>
            <div>
              <Form.Check label="AT" name="vocabulary3" value="AT" type="radio" checked={answers.vocabulary3 === 'AT'} onChange={handleChange} inline />
              <Form.Check label="IN" name="vocabulary3" value="IN" type="radio" checked={answers.vocabulary3 === 'IN'} onChange={handleChange} inline />
              <Form.Check label="ON" name="vocabulary3" value="ON" type="radio" checked={answers.vocabulary3 === 'ON'} onChange={handleChange} inline />
            </div>
          </Form.Group>
          {/* Pregunta FINAL */}
          <h4>Prueba definitiva</h4>
          <div className="w-auto ratio ratio-16x9 w-50">
            <iframe
              src="https://www.youtube.com/embed/34mk2F4iff4?si=IaFx8vpu0biYUxE8"
              title="Prueba final"
              allowFullScreen
            ></iframe>
          </div>
          <Form.Group className="mb-3 m-4">
            <Form.Label>¿Conseguiste entender TODO el video?</Form.Label>
          <div>
            <Form.Check label="Por supuesto" name="pruebaFinal" value="Por supuesto" type="radio" checked={answers.pruebaFinal === 'Por supuesto'} onChange={handleChange} inline />
            <Form.Check label="Nop" name="pruebaFinal" value="Nop" type="radio" checked={answers.pruebaFinal === 'Nop'} onChange={handleChange} inline />
            <Form.Check label="😐" name="pruebaFinal" value="😐" type="radio" checked={answers.pruebaFinal === '😐'} onChange={handleChange} inline />
          </div>
          </Form.Group>


          <Button type="submit">Calcular puntaje</Button>
        </Form>
      )}

      {score !== null && (
        <div className="mt-4">
          <h5>Puntaje total: {score} / 6</h5>
          <p>
            {score === 6 ?'Wow, espera... en serio entendiste eso?'
            : score === 5 ? '¡Excelente dominio del inglés!'
              : score === 4 ? 'Buen nivel, pero puedes mejorar.'
                : score === 3 ? 'Nivel intermedio, sigue practicando.'
                  : score === 2 ? 'Nivel básico, no vendria mal un repaso.'
                    : score === 1 ? 'Hay mucho con lo que trabajar.'

                : 'Bueno...'}
          </p>
          <Button onClick={() => navigate('/')}>Vorver a la pagina de inicio</Button>
        </div>
      )}
    </Container>
  );
}

export default Questions;
