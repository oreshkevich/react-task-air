import { Info } from '../components/Info';
import { InfoBack } from '../components/InfoBack';
import { ICard } from '../interface/ICard';

function FormTwo(props: ICard) {
  console.log(props);
  const { cards = [] } = props;
  console.log(cards);
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

export { FormTwo };
