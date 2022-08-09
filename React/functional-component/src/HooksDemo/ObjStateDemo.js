import { useState } from "react";

const ObjStateDemo = (props) => {
    const [state, setState] = useState({
        count: 0,
        username: ''
    })

    const increase = (e) => {
        e.preventDefault();
        setState({count: state.count+1});
    }

    return(
        <div>
            <button onClick={(e) => increase(e)}>+</button>
            <h1>{state.count}</h1>
        </div>
    )
}

export default ObjStateDemo