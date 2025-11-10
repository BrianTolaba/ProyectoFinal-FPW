import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function Questions() {
  const [answers, setAnswers] = useState({
    //Agregar mas tipos de preguntas
    grammar: null,
    vocabulary: null,
    reading: null,
  });

  const [score, setScore] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const total = Object.values(answers).reduce((acc, val) => acc + (val || 0), 0);
    setScore(total);
  };

  return (
    <Container className="mt-4">
      <h4>Cuestionario de Inglés</h4>
      <Form onSubmit={handleSubmit}>
        {/* Pregunta 1 */}
        <Form.Group className="mb-3">
          <Form.Label>¿Conoces las reglas gramaticales básicas?</Form.Label>
          <div>
            <Form.Check 
              type="radio"
              label="Sí"
              name="grammar"
              value={1}
              checked={answers.grammar === 1}
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="No"
              name="grammar"
              value={0}
              checked={answers.grammar === 0}
              onChange={handleChange}
              inline
            />
          </div>
        </Form.Group>
        

        {/* Pregunta 2 */}
        <Form.Group className="mb-3">
          <Form.Label>¿Tienes buen vocabulario en inglés?</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Sí"
              name="vocabulary"
              value={1}
              checked={answers.vocabulary === 1}
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="No"
              name="vocabulary"
              value={0}
              checked={answers.vocabulary === 0}
              onChange={handleChange}
              inline
            />
          </div>
        </Form.Group>

        {/* Pregunta 3 */}
        <Form.Group className="mb-3">
          <Form.Label>¿Puedes leer textos en inglés?</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Sí"
              name="reading"
              value={1}
              checked={answers.reading === 1}
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="No"
              name="reading"
              value={0}
              checked={answers.reading === 0}
              onChange={handleChange}
              inline
            />
          </div>
        </Form.Group>

        <Button type="submit">Calcular puntaje</Button>
      </Form>

      {score !== null && (
        <div className="mt-4">
          <h5>Puntaje total: {score} / 3</h5>
          <p>
            {score === 3
              ? '¡Excelente dominio del inglés!'
              : score === 2
              ? 'Buen nivel, pero puedes mejorar.'
              : 'Te recomendamos seguir practicando.'}
          </p>
        </div>
      )}
    </Container>
  );
}

export default Questions;