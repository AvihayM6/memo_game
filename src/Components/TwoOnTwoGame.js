import { useState } from 'react';


const cardImages = [{ "src": "/img/helmet-1.png" },{ "src": "/img/potion-1.png" },];


  const TwoOnTwoGame = () => {

    const shuffleCards = () => {
        const tempShuffledCards = [...cardImages, ...cardImages]
          .sort(() => Math.random() - 0.5)
          .map(card => ({ ...card, id: Math.random() }))
          
        setCards(tempShuffledCards)
        setTurns(0)
      }
    
      const [cards, setCards] = useState([]);
      const [turns, setTurns] = useState(0);

    return ( 
        <div>
            <p>Two on two game</p>
        </div>
     );
}
 
export default TwoOnTwoGame;