import { useEffect, useState } from 'react';
import { Info } from '../components/Info';
import { InfoBack } from '../components/InfoBack';
import { ICardData } from '../interface/ICardData';

function City() {
  const [cards, setCards] = useState<ICardData[]>([]);
  useEffect(() => {
    fetch(
      `https://test-react-7a0e5-default-rtdb.europe-west1.firebasedatabase.app/city.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const res = Object.keys(data).map((key) => {
          return {
            id: key,
            firstName: data[key].firstName as string,
            lastCity: data[key].lastCity as string,
            thereDate: data[key].thereDate as string,
            backDate: data[key].backDate as string,
          };
        });
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!cards.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <>
      <div className="wrapper">
        {cards.map((item) =>
          item.backDate ? (
            <InfoBack key={item.id} {...item} />
          ) : (
            <Info key={item.id} {...item} />
          )
        )}
      </div>
    </>
  );
}

export { City };
