import { useState } from "react";

const HooksDemo = (props) => {
    const [counter, setCounter] = useState(0);

    const increase = (e) => {
        e.preventDefault();
        setCounter(counter+1);
    }
    const decrease = (e) => {
        e.preventDefault();
        setCounter(counter-1)
    }

    return(
        <div>
            <button onClick={(e) => increase(e)}>+</button>
            <p>{counter}</p>
            <button onClick={(e) => decrease(e)}>-</button>
        </div>
    )
}
export default HooksDemo