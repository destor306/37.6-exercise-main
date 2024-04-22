import React, {useState} from "react";
import Coin from "./Coin";

const Counter = () =>{
    const [headCount, setHeadCount] = useState(0);
    const [tailCount, setTailCount] = useState(0);
    const [side, setSide] = useState('head');

    const flipCoin = () =>{
        let newSide = Math.random() < 0.5 ? 'head' : 'tail'
        setSide(newSide);
        if (newSide === 'head'){setHeadCount(headCount+1)}
        else{
            setTailCount(tailCount+1);
        }
    }
    return (
        <div className="Counter">
            <h1>Let's flip a coin!</h1>
        <Coin side ={side}/>
      <div>
        <span>Heads: {headCount}</span>
        <span>Tails: {tailCount}</span>
      </div>
      <button onClick={flipCoin}>Flip Coin</button>

    </div>
    )
}

export default Counter;