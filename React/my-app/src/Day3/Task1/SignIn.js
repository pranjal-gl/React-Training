import React from "react";
import './SignIn.css'

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                
                <h2>Sign in</h2>
                <form>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email address"/>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password"/>
                    <button onClick={this.props.toggleFun}>signin</button>

                    
                </form>
                <p>Not registerd ? <a href="#">Click here..</a></p>
            </div>

        )
    }
    
}

export default SignIn