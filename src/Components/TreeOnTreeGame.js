import { useState, useEffect} from 'react';
import SingleCard from './SingleCard';
import '../Styles/TwoOnTwoGame.css';




const cardImages = [{ "src": "/img/helmet-1.png", matched: false },
                    { "src": "/img/potion-1.png", matched: false },
                    { "src": "/img/ring-1.png", matched: false }];


  const TreeOnTreeGame = () => {

    const [cards, setCards] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    //shuffled the card array
    const shuffleCards = () => {
        const tempShuffledCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map(card => ({ ...card, id: Math.random() }))
        setChoiceOne(null);  
        setChoiceTwo(null);  
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
        setDisabled(true);
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


    useEffect(() => {
      shuffleCards();
    }, [])


    const resetTurns = () => {
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns((prev) => prev+1)
      setDisabled(false);
    }

    return ( 
        <div>
            <button onClick={shuffleCards}> New game / Reset</button>
            <div className="board">
                <div className="card-grid">
                  {cards.map((card) => (
                    <SingleCard 
                              key={card.id} 
                              card={card}
                              handleChoice={handleChoice}
                              flipped={card === choiceOne || card === choiceTwo || card.matched}
                               disabled={disabled}
                    />
                  ))}
                </div>
            </div>
            <p className="turns">Turns: {turns}</p>
        </div>
     );
}
 
export default TreeOnTreeGame;