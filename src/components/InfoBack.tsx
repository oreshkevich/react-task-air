import { IFormCard } from '../interface/IFormCard';

function InfoBack(props: IFormCard) {
  const { firstName, lastCity, thereDate, backDate } = props;
  return (
    <div className="info">
      <div className="info__wrapper">
        <div className="info__irrevocable">Невозвратный</div>
        <div className="info__wrap info__wrap_back block ">
          <div className="block__img">
            <img src={require('../assets/logo.svg').default} alt="logo" />
            <h3 className="block__img_title">S7 Airlines</h3>
          </div>
          <div className="block__distance">
            <p className="block__time">09:20</p>
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
            <p className="block__time">11:05</p>
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
          <div className="block__price block__price_back">9 300 ₽</div>
        </div>
      </div>
      <div className="info__wrapper">
        <div className="info__irrevocable">Невозвратный</div>
        <div className="info__wrap info__wrap_back  block">
          <div className="block__img">
            <img src={require('../assets/logo.svg').default} alt="logo" />
            <h3 className="block__img_title">S7 Airlines</h3>
          </div>
          <div className="block__distance">
            <p className="block__time">09:20</p>
            <p className="block__text">{lastCity}</p>
            <p className="block__text block__text_data">{backDate}</p>
          </div>
          <div className="block__way way">
            <div className="way__left">SVO</div>
            <div className="way__right">ROV</div>

            <img src={require('../assets/way.svg').default} alt="logo" />
            <p className="way__text">В пути 1 ч 55 мин</p>
          </div>
          <div className="block__distance">
            <p className="block__time">11:05</p>
            <p className="block__text">{firstName}</p>
            <p className="block__text block__text_data">{backDate}</p>
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
          <div className="block__price"></div>
        </div>
      </div>
    </div>
  );
}

export { InfoBack };
