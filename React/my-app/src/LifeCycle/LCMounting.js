import React from "react";

class LCMounting extends React.Component {
    constructor(props) { //-- 1
        super(props)

        this.state = {
            name: "Jack Sparrow"
        }
    }

    static getDerivedStateFromProps(props, state) { //-- 2
        console.log("get derived state");
        return({name: 'Mark'})
    }

    

    render() { //-- 3
        console.log("render");
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }

    componentDidMount() { //-- 4
        console.log("mounted");
    }
}

export default LCMounting