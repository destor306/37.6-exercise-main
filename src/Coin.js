import React from "react";
import head from './head.jpg'
import tail from './tail.jpg'

const Coin = ({side}) =>{
    return (
        <div className="Coin">
            <img src={side === 'head' ? head : tail} alt={side} />
        </div>
    );
}


export default Coin;