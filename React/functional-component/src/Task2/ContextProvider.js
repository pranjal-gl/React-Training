import CounterContext from "./CounterContext";
import { useState } from "react";
import IncBtn from "./IncBtn";
import DecBtn from "./DecBtn";

function ContextProvider() {
    const [countVal, setCountVal] = useState(0);

    const incCount = () => {
        setCountVal(countVal+1)
    }
    const decCount = () => {
        setCountVal(countVal-1)
    }

    return(
        <CounterContext.Provider value={{count: countVal, incCount: incCount, decCount: decCount}}>
            <IncBtn></IncBtn>
            <h1>{countVal}</h1>
            <DecBtn></DecBtn>
        </CounterContext.Provider>
    )
}
export default ContextProvider