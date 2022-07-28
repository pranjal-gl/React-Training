import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {data} = this.props
        return(
            <div>
                {
                    data.map((item)=>(
                        <div>
                            <h1>{item.fname}</h1>
                            <h2>{item.email}</h2>
                            <h3>{item.phone}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ClassComponent