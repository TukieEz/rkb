import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/devicepage.css'; // Assuming you extract styles into a CSS file
import { SHOP_ROUTE } from '../utils/consts';

const DevicePage = () => {
  const [formData, setFormData] = useState({
    eventDate: '',
    department: '',
    place: '',
    eventObject: '',
    dob: '',
    fio: '',
    registrar: '',
    description: '',
    reasons: '',
    correction: '',
    classifier: '',
    probability: '',
    consequences: '',
    riskDegree: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your save logic here
  };


  return (
    <div className="popup" id="add-popup">
      <div className="popup-content">
        <h3>Добавить событие</h3>
        <form id="add-form" onSubmit={handleSubmit}>
          <div className="form-row-inline">
            <div className="form-row">
              <label htmlFor="eventDate">Дата и время:</label>
              <input
                type="datetime-local"
                id="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите дату и время, когда произошло событие.</div>
            </div>
            <div className="form-row">
              <label htmlFor="department">Отделение:</label>
              <input
                type="text"
                id="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите отделение, в котором произошло событие.</div>
            </div>
            <div className="form-row">
              <label htmlFor="place">Место:</label>
              <input
                type="text"
                id="place"
                value={formData.place}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите место события.</div>
            </div>
          </div>

          <h4>Объект события</h4>
          <div className="form-row-inline">
            <div className="form-row">
              <label htmlFor="eventObject">Объект события:</label>
              <input
                type="text"
                id="eventObject"
                value={formData.eventObject}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите, что является объектом события (например, человек, оборудование и т.д.).</div>
            </div>
            <div className="form-row">
              <label htmlFor="dob">Дата рождения:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите дату рождения объекта события (если применимо).</div>
            </div>
            <div className="form-row">
              <label htmlFor="fio">ФИО:</label>
              <input
                type="text"
                id="fio"
                value={formData.fio}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите полное ФИО человека, с которым связано событие.</div>
            </div>
            <div className="form-row">
              <label htmlFor="registrar">Регистратор:</label>
              <input
                type="text"
                id="registrar"
                value={formData.registrar}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите фамилию, имя и отчество регистратора события.</div>
            </div>
          </div>

          <h4>Дополнительная информация</h4>
          <div className="form-row">
            <label htmlFor="description">Краткое описание:</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <div className="hint">Опишите, что именно произошло в ходе события.</div>
          </div>
          <div className="form-row">
            <label htmlFor="reasons">Причины:</label>
            <textarea
              id="reasons"
              value={formData.reasons}
              onChange={handleChange}
              required
            ></textarea>
            <div className="hint">Укажите возможные причины произошедшего события.</div>
          </div>
          <div className="form-row">
            <label htmlFor="correction">Коррекция:</label>
            <textarea
              id="correction"
              value={formData.correction}
              onChange={handleChange}
              required
            ></textarea>
            <div className="hint">Опишите предпринятые меры для исправления или предотвращения повторения события.</div>
          </div>
          <div className="form-row">
            <label htmlFor="classifier">Классификатор:</label>
            <input
              type="text"
              id="classifier"
              value={formData.classifier}
              onChange={handleChange}
              required
            />
            <div className="hint">Укажите классификацию события (например, по степени тяжести и т.д.).</div>
          </div>
          <div className="form-row-inline">
            <div className="form-row">
              <label htmlFor="probability">Вероятность:</label>
              <input
                type="text"
                id="probability"
                value={formData.probability}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите вероятность того, что событие приведет к последствиям.</div>
            </div>
            <div className="form-row">
              <label htmlFor="consequences">Последствия:</label>
              <input
                type="text"
                id="consequences"
                value={formData.consequences}
                onChange={handleChange}
                required
              />
              <div className="hint">Укажите последствия события.</div>
            </div>
            <div className="form-row">
              <label htmlFor="riskDegree">Степень риска:</label>
              <input
                type="text"
                id="riskDegree"
                value={formData.riskDegree}
                onChange={handleChange}
                required
              />
              <div className="hint">Оцените степень риска, связанного с данным событием.</div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" id="save-button">Сохранить</button>
            <button type="button" id="close-button" onClick={() => navigate(SHOP_ROUTE)}>Закрыть</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DevicePage;
