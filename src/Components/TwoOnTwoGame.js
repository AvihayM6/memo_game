import { useState } from 'react';
import SingleCard from './SingleCard';
import '../Styles/TwoOnTwoGame.css';




const cardImages = [{ "src": "/img/helmet-1.png" }, { "src": "/img/potion-1.png" }];


  const TwoOnTwoGame = () => {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    const shuffleCards = () => {
        const tempShuffledCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map(card => ({ ...card, id: Math.random() }))
          
        setCards(tempShuffledCards)
        setTurns(0)
      }

    const handleChoice = (card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    return ( 
        <div>
            <button onClick={shuffleCards}> click here</button>
            <div className="card-grid">
              {cards.map((card) => (
                <SingleCard 
                           key={card.id} 
                           card={card}
                           handleChoice={handleChoice}
                />
              ))}
            </div>
        </div>
     );
}
 
export default TwoOnTwoGame;