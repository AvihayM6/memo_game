import React from 'react';



const SingleCard = ({card, handleChoice}) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return (  
        <div className="card">
            <div>
                <img className="front" src={card.src} alt="front img"/>
                <img 
                    className="back" 
                    src="/img/cover.png" 
                    onClick={handleClick} 
                    alt="cover img"
                />
            </div>
        </div>
    );
}
 
export default SingleCard;