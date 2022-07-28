import React from "react"
import './Dashboard.css'
class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "@peterparker",
            fname: "Peter Parker",
            imgURL: 'https://imgix.bustle.com/uploads/image/2022/3/22/c146552e-4482-46f7-8216-c8307fd90a5d-peter-parker.jpg?w=1200&h=630&fit=crop&crop=focalpoint&fm=jpg&fp-x=0.5173&fp-y=0.341'
        }
    }

    render() {
        return(
            <div>
                <img src={this.state.imgURL} className='profImg'/>
                <h2>{this.state.fname}</h2>
                <p>Username: {this.state.username}</p>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        )
    }
}

export default Dashboard