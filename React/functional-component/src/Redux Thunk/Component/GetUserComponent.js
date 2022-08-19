import { useEffect } from "react";

const GetUserComponent = (props) => {
    useEffect(()=>{
        props.getUserData()
        props.postUserData()
    }, [])
    return(
        <div>
            {console.log(props)}
            <h1>User details</h1>
        </div>
    )
}
export default GetUserComponent;