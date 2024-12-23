import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import '../css/basket.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Basket = () => {
  return (
    <div className="basket-container">

      {/* Карточка персонализации */}
      <Card style={{ width: '18rem', marginBottom: '20px' }}>
        <Card.Body>
          <Card.Title>Персонализация</Card.Title>
          <Card.Text>
            Здесь вы можете изменить ваши данные.
          </Card.Text>
          <Form>
            <Form.Group controlId="formBasicLastName">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control type="text" defaultValue="Иванов" placeholder="Введите фамилию" />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" defaultValue="Иван" placeholder="Введите имя" />
            </Form.Group>

            <Form.Group controlId="formBasicMiddleName">
              <Form.Label>Отчество</Form.Label>
              <Form.Control type="text" defaultValue="Иванович" placeholder="Введите отчество" />
            </Form.Group>

            <div style={{ marginBottom: '20px' }}></div>
            <Button variant="primary" type="submit">
              Сохранить
            </Button>
          </Form>
        </Card.Body>
      </Card>

      {/* Карточка аналитики */}
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Аналитика</Card.Title>
          <Form>
            <div className="form-check" style={{ marginLeft: '-10px' }}>
              <Form.Check
                type="switch"
                id="custom-switch-day"
                label="Включить аналитику за день"
              />
            </div>
            <div className="form-check" style={{ marginLeft: '-10px' }}>
              <Form.Check
                type="switch"
                id="custom-switch-month"
                label="Включить аналитику за месяц"
              />
            </div>
          </Form>
        </Card.Body>
      </Card>

    </div>
  );
}

export default Basket;