import React from "react";

class EventDemo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: this.props.data,
            flag: true
        }
    }

    handleDblClick = () => {
        this.setState({flag: false})
    }
    handleBlur = (e) => {
        this.setState({flag: true})
    }

    handleUsername=(e)=>{
        this.setState({username:e.target.value})
    }

    render() {
        return(
            <div>
                {
                    this.state.flag ? 
                    <h4 onDoubleClick={this.handleDblClick}>{this.state.username}</h4> : 
                    <input type='text' value={this.state.username} onChange={(e)=>this.handleUsername(e)} onBlur={(e)=>this.handleBlur(e)}></input>
                }
                
            </div>
        )
    }
}
export default EventDemo