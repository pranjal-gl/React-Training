import React from 'react'
import Dashboard from './Dashboard'
import SignIn from './SignIn'

class ParentComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
        }
    }

    toggleUser = ()=> {
        console.log("toggle");
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }

    render() {
        return(
            <div>
                {
                    this.state.isLoggedIn ?
                    <Dashboard toggleFun={this.toggleUser}>4</Dashboard> :
                    <SignIn toggleFun = {this.toggleUser}></SignIn>
                }
            </div>
        )
    }
}

export default ParentComponent