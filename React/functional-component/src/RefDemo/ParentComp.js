import { useRef, useState } from "react";
import ChildComp from "./ChildComp";

const ParentComp = () => {
    let usernameRef = useRef();
    let passwordRef = useRef();
    let [flag, setFlag] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(usernameRef);
        console.log(passwordRef);
        if(usernameRef.current.value === 'admin' && passwordRef.current.value === 'admin') {
            setFlag(true);
        }
    }

    return(
        <div>
            <h1>Forwarding ref</h1>
            {
                flag ? <h1>Dashboard</h1> :  <form>
                    <ChildComp ref={[usernameRef, passwordRef]}></ChildComp>
                    <button onClick={(e)=>handleClick(e)}>Login</button>
                </form>
            }
        </div>
    )
}
export default ParentComp;