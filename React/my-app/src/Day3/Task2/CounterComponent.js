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
            <div>
                <button onClick={this.decrement}>-</button>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default CounterComponent
