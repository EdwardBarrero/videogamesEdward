import React from 'react'
import "./GameCard.css";

const GameCard = ({
    name,
    img,
    genres,
    id
}) => {
    return (
        <div className='gameCard' key={id}>        
            <img src={img} />
            <p> {name} </p>
            {
                genres?.map((genr)=>(
                    <span> {genr.name} |</span>
                ))
            }            
        </div>
    )
}

export default GameCard;