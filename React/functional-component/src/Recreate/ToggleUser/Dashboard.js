import { useState } from "react"
import './Dashboard.css'
const Dashboard = (props) => {
    const [username, setUsername] = useState("@peterparker")
    const [fname, setFname] = useState("Peter Parker")
    const [imgURL, setImgURL] = useState("https://imgix.bustle.com/uploads/image/2022/3/22/c146552e-4482-46f7-8216-c8307fd90a5d-peter-parker.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5173&fp-y=0.341")


    return(
        <div className="top-div">
            <h1>Dashboard</h1>
            <img src={imgURL} className='profImg'/>
            <h2>{fname}</h2>
            <p>Username: {username}</p>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <button onClick={props.toggleFun}>Log out</button> 
        </div>
    )
}

export default Dashboard