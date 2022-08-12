import { useContext } from "react";
import CounterContext from "./CounterContext";

const DecBtn = () => {
    let {decCount} = useContext(CounterContext);
    return(
        <div>
            <button onClick={decCount}>-</button>
        </div>
    )
}
export default DecBtn