import React from "react";

class LCUpdating extends React.Component {
    constructor(props) { //-- 1
        super(props)

        this.state = {
            name: "Jack Sparrow"
        }
    }

    static getDerivedStateFromProps(props, state) { //-- 2
        console.log("get derived state");
        return null;
    }

    shouldComponentUpdate(newProps, newState) { //-- 3
        return true;
    }

    changeName=()=>{
        this.setState({name:"Jack"})
    }
    

    render() { //-- 4
        console.log("render");
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change</button>
            </div>
        )
    }

    componentDidUpdate() { //-- 5
        console.log("updated");
    }
}

export default LCUpdating