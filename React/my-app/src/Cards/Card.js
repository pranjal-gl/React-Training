import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {fname, email, phone, id} = this.props.data

        return(
            <div className="col-3" key={id}>
                <div className="card">
                    <div className="card-body">
                        <h1>{fname}</h1>
                        <h3>{email}</h3>
                        <p>{phone}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card