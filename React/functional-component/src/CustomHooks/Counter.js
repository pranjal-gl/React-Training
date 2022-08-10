import { useIncDec } from "./useIncDec"

const Counter=()=>{
    const {count, ...setCountEvent} = useIncDec(); 
    return(
        <form>
            <button {...setCountEvent}>-</button>
            <h1>{count}</h1>
            <button {...setCountEvent}>+</button>
        </form>
    )
}
export default Counter