import { useEffect, useState } from "react";

const Card = ({ count }) => {
  const emptyArrayForCards = new Array(count);
  let j = 1;
  for (let i = 0; i < emptyArrayForCards.length; i++) {
    emptyArrayForCards[i] = j;
    j++;
  }

  const [idAnimate, setIdAnimate] = useState(1);

  useEffect(() => {
    setInterval(() => {
        const element = document.getElementById(idAnimate);
        element.classList.add('active');
        if (idAnimate < emptyArrayForCards.length) {
            setIdAnimate(idAnimate + 1);
        }
        return;
    }, 500); 
  }, [emptyArrayForCards.length, idAnimate]);

  const handleClick = (id) => {
    const card = document.getElementById(id);
    card.classList.toggle('card-on-click')
  }

  return (
    <>
      {emptyArrayForCards.map((numCard) => (
        <div className="card" key={numCard} id={numCard} onClick={(e) => handleClick(e.target.id)}>
          <h1 className="title-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Curabitur gravida arcu ac tortor dignissim convallis aenean et
            tortor. Vestibulum morbi blandit cursus risus at ultrices mi tempus
            imperdiet.
          </p>
        </div>
      ))}
    </>
  );
};

export default Card;
