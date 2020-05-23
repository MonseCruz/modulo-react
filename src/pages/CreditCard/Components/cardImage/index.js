import React from "react";
import "./creditCard.css"
function CardImage({number,expiration,CVV}){  
  const typeCard = (number == 5252525252525252 ) ? "VISA" : "";
    return(
      <div> 
        <div className={`Card ${typeCard}`}>
          <div className="banco">Banco</div>
            <p className="showData">{number}</p>
            
            <p className="showData">{expiration}</p>
        </div>
        <div className={`Card ${typeCard}`}>
            <div className="banMagnetic"></div>
            <div className="spaceSign"></div>
            <p className="showData"> {CVV} </p>
        </div>
      </div>
    )
}

export default CardImage