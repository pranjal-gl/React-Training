import React from "react";
import './CounterComponent.css'

class CounterComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    decrement = ()=> {
        this.setState({counter: (this.state.counter)-1})
    }

    increment = ()=> {
        this.setState({counter: (this.state.counter)+1})
    }

    render() {
        return(
            <>
            <h1>Counter</h1>
            <div className="countDiv">
                <button onClick={this.decrement} className="btnCount">-</button>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment} className="btnCount">+</button>
            </div>
            </>
            
        )
    }
}

export default CounterComponent
