import React from "react";

class SimpleComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {tech} = this.props

        return(
            <div>
                <h1>Tech name: {tech}</h1>
                <p>{tech}: Declarative library in JS</p>
            </div>
        )
    }
}

export default SimpleComponent