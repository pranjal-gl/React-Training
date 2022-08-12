import { useContext } from "react";
import CounterContext from "./CounterContext";

const IncBtn = () => {
    let {incCount} = useContext(CounterContext);
    return(
        <div>
            <button onClick={incCount}>+</button>
        </div>
    )
}
export default IncBtn