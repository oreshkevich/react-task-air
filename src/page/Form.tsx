import { FocusEvent, useEffect, useState } from 'react';
import { IFormCard } from '../interface/IFormCard';
import { FormTwo } from '../page/FormTwo';

export const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastCity, setLastCity] = useState('');
  const [thereDate, setThereDate] = useState('');
  const [backDate, setBackDate] = useState('');
  const [cards, setCards] = useState<IFormCard[]>([]);
  const [valid, setValid] = useState(true);
  const [validCity, setValidCity] = useState(true);
  const [validDate, setValidDate] = useState(true);
  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastCityDirty, setLastCityDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [Dirty, setDirty] = useState(true);

  const validateName = (val: string) => {
    return val.length > 3;
  };
  const validateCity = (val: string) => {
    return val.length > 3;
  };

  const validateData = (val: string) => {
    return val.length > 3;
  };

  const validateChange = () => {
    const isValid = validateName(firstName);
    const isValidCity = validateCity(lastCity);
    const isValidDate = validateData(thereDate);

    if (firstNameDirty) {
      setValid(isValid);
    }
    if (lastCityDirty) {
      setValidCity(isValidCity);
    }

    if (dateDirty) {
      setValidDate(isValidDate);
    }

    if (isValid && isValidDate && isValidCity) {
      setDirty(false);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isValid = validateName(firstName);
    setValid(isValid);

    const isValidCity = validateCity(lastCity);
    setValid(isValidCity);

    const isValidDate = validateData(thereDate);
    setValidDate(isValidDate);
    if (isValid && isValidDate && isValidCity) {
      setDirty(true);
      const newCard = {
        id: new Date().getTime(),
        firstName: firstName,
        lastCity: lastCity,
        thereDate: thereDate,
        backDate: backDate,
      };
      setCards([...cards, newCard]);
      reset();
    }
  };
  const focusHandler = (e: FocusEvent<HTMLInputElement, Element>) => {
    switch (e.target.name) {
      case 'firstName':
        setFirstNameDirty(true);
        break;
      case 'lastCity':
        setLastCityDirty(true);
        break;

      case 'birthDate':
        setDateDirty(true);
        break;
    }
  };
  const reset = () => {
    setFirstName('');
    setLastCity('');
    setThereDate('');
    setBackDate('');
  };

  useEffect(() => {
    validateChange();
  });
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
            onFocus={(e) => focusHandler(e)}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <p className="small">{valid ? null : 'введите больше 3 символов'}</p>
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
            onFocus={(e) => focusHandler(e)}
            onChange={(e) => setLastCity(e.target.value)}
          />
          <p className="small">
            {validCity ? null : 'введите больше 3 символов'}
          </p>
        </div>
        <div className="form__item">
          <label className="form__control" htmlFor="thereDate">
            Туда
          </label>
          <input
            className="form__input  form__input-data-there"
            type="date"
            value={thereDate}
            onFocus={(e) => focusHandler(e)}
            name="thereDate"
            onChange={(e) => setThereDate(e.target.value)}
          />
          <p className="small">{validDate ? null : 'Необходимо заполнить'}</p>
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
          className={Dirty ? 'button__dirty' : 'button__form'}
          value="Send"
          type="submit"
          disabled={Dirty}
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
