import React from "react"
const ChildComp = React.forwardRef((props, ref) => {
    const [usernameRef, passwordRef] = ref;
    return(
        <div>
            <input type='text' ref={usernameRef} placeholder="Username"></input>
            <input type='text' ref={passwordRef} placeholder="Password"></input>
        </div>
    )
})
export default ChildComp