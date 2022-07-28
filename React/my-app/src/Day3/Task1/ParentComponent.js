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

    render() {
        return(
            <div>
                {
                    this.state.isLoggedIn ? <>
                    <Dashboard></Dashboard>
                    </>:<>
                    <SignIn></SignIn>
                    </>
                }
            </div>
        )
    }
}

export default ParentComponent