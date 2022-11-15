import { Info } from '../components/Info';
import { InfoBack } from '../components/InfoBack';
import { ICard } from '../interface/ICard';

function FormTwo(props: ICard) {
  const { cards = [] } = props;
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
