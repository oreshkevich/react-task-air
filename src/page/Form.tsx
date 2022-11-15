import { useState, useEffect, FocusEvent } from 'react';
import { IFormCard } from '../interface/IFormCard';
import { IFormData } from '../interface/IFormData';
import { FormTwo } from '../page/FormTwo';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastCity, setLastCity] = useState('');
  const [thereDate, setThereDate] = useState('');
  const [backDate, setBackDate] = useState('');
  const [cards, setCards] = useState<IFormCard[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newCard = {
      id: new Date().getTime(),
      firstName: firstName,
      lastCity: lastCity,
      thereDate: thereDate,
      backDate: backDate,
    };
    setCards([...cards, newCard]);
    reset();
  };

  const reset = () => {
    setFirstName('');
    setLastCity('');
    setThereDate('');
    setBackDate('');
  };

  return (
    <form className="form" method="post" noValidate onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <div className="form__item">
          <label className="form__control" htmlFor="firstName">
            Откуда
          </label>
          <input
            className="form__input transform"
            type="text"
            name="firstName"
            placeholder="Город вылета"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form__item">
          <label className="form__control" htmlFor="lastCity">
            Куда
          </label>
          <input
            className="form__input transform"
            type="text"
            name="lastCity"
            placeholder="Город прилёта"
            value={lastCity}
            onChange={(e) => setLastCity(e.target.value)}
          />
        </div>
        <div className="form__item">
          <label className="form__control" htmlFor="thereDate">
            Туда
          </label>
          <input
            className="form__input  form__input-data-there"
            type="date"
            value={thereDate}
            name="thereDate"
            onChange={(e) => setThereDate(e.target.value)}
          />
        </div>
        <div className="form__item">
          <label className="form__control" htmlFor="backDate">
            Оратно
          </label>
          <input
            className="form__input  form__input-data-back"
            type="date"
            value={backDate}
            name="backDate"
            onChange={(e) => setBackDate(e.target.value)}
          />
        </div>
      </div>
      <div className="form__button button">
        <button
          className="button__form"
          value="Send"
          type="submit"
          name="disable_button"
          id="disable_button"
        >
          Найти билеты
        </button>
      </div>
      <div className="card-container">
        <FormTwo cards={cards} />
      </div>
    </form>
  );
};
