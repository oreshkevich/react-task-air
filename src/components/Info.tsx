import { SetStateAction, useState } from 'react';
import { IFormCard } from '../interface/IFormCard';

function Info(props: IFormCard) {
  const [buttonText, setButtonText] = useState('09:20');
  const [buttonTime, setButtonTime] = useState('11:05');
  const [Dirty, setDirty] = useState('Button1');

  const changeText = (
    text: SetStateAction<string>,
    time: SetStateAction<string>,
    button: SetStateAction<string>
  ) => {
    setButtonText(text);
    setButtonTime(time);
    setDirty(button);
  };

  const { firstName, lastCity, thereDate } = props;
  return (
    <div className="info">
      <div className="info__wrapper">
        <div className="info__irrevocable">Невозвратный</div>
        <div className="info__wrap block">
          <div className="block__img">
            <img src={require('../assets/logo.svg').default} alt="logo" />
            <h3 className="block__img_title">S7 Airlines</h3>
          </div>
          <div className="block__distance">
            <p className="block__time">{buttonText}</p>
            <p className="block__text">{firstName}</p>
            <p className="block__text block__text_data">{thereDate}</p>
          </div>
          <div className="block__way way">
            <div className="way__left">SVO</div>
            <div className="way__right">ROV</div>

            <img src={require('../assets/way.svg').default} alt="logo" />
            <p className="way__text">В пути 1 ч 55 мин</p>
          </div>
          <div className="block__distance">
            <p className="block__time">{buttonTime}</p>
            <p className="block__text">{lastCity}</p>
            <p className="block__text block__text_data">{thereDate}</p>
          </div>
          <div className="block__bag img">
            <img
              className="img__bag"
              src={require('../assets/bag.svg').default}
              alt="logo"
            />
            <img
              className="img__luggage"
              src={require('../assets/luggage.svg').default}
              alt="logo"
            />
          </div>
          <div className="block__price">4 150 ₽</div>
        </div>
        <div className="info__time time">
          <div
            className={`time__info ${
              Dirty === 'button1' ? 'time__info_active' : ''
            }`}
            onClick={() => changeText('09:20', '11:05', 'button1')}
          >
            09:20 - <span className="time__text">11:05</span>{' '}
          </div>
          <div
            className={`time__info ${
              Dirty === 'button2' ? 'time__info_active' : ''
            }`}
            onClick={() => changeText('10:20', '12:05', 'button2')}
          >
            10:20 - <span className="time__text">12:05</span>{' '}
          </div>
          <div
            className={`time__info ${
              Dirty === 'button3' ? 'time__info_active' : ''
            }`}
            onClick={() => changeText('11:20', '13:05', 'button3')}
          >
            11:20 - <span className="time__text">13:05</span>{' '}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Info };
