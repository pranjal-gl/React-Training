import React from "react";

class LCUpdating extends React.Component {
    constructor(props) { //-- 1
        // super()
        // console.log(this.props);
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
        this.setState({name: this.props.name})
    }
    

    render() { //-- 4
        console.log("render");
        // console.log(this.props);
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change</button>
            </div>
        )
    }

    getSnapshotBeforeUpdate(prevProp, prevState) { //-- 5
        console.log(prevState);
        return null;
    }

    componentDidUpdate() { //-- 6
        console.log("updated");
    }
}

export default LCUpdating