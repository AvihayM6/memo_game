import { useState, useEffect} from 'react';
import SingleCard from './SingleCard';
import '../Styles/TwoOnTwoGame.css';




const cardImages = [{ "src": "/img/helmet-1.png", matched: false },
                    { "src": "/img/potion-1.png", matched: false }];


  const TwoOnTwoGame = () => {

    const [cards, setCards] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    //shuffled the card array
    const shuffleCards = () => {
        const tempShuffledCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map(card => ({ ...card, id: Math.random() }))
          
        setCards(tempShuffledCards)
        setTurns(0)
      }

    const handleChoice = (card) => {
      //if choiceOne is null(false) set choiceOne to  be the card
      //else set choiceTwo to be the card
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    }

    useEffect(() => {
      if(choiceOne && choiceTwo){
        if(choiceOne.src === choiceTwo.src){
          setCards( (prevCards) => {
            return prevCards.map((card) => {
              if(card.src === choiceTwo.src){
                return {...card, matched: true}
              }
              else{
                return card;
              }
            })
        });
          resetTurns();
        }
        else{
          setTimeout(() =>resetTurns(), 1000);
        }
      }
    }, [choiceOne, choiceTwo]);

    console.log(cards)

    const resetTurns = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns((prev) => prev+1)
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
                           flipped={card === choiceOne || card === choiceTwo || card.matched}
                />
              ))}
            </div>
        </div>
     );
}
 
export default TwoOnTwoGame;