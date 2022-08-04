import React from "react";
import './styles.css'
import _isEqual from 'lodash/isEqual'
import deleteImg from './delete.png';
import checkImg from './check.png'

class PendingComponent extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(newProps, newState) {
        if(_isEqual(newProps.pendingTask, this.props.pendingTask)) return false;
        else return true;
    }

    render(){
        // console.log("pending comp render");
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#e04c60'
        }
        const {pendingTask,changeCompletion, changeDeletion}=this.props
        return(
            <div className="comp-div">
                <h2>Pending Tasks</h2>
                {
                    pendingTask.map((item)=>(
                        <div style={borderstyle} className="card-div">
                            <h3>{item.taskname}           <span>({item.taskdesc})</span></h3>
                            <div className="btn-div">
                            <button className='btn'onClick={()=>changeDeletion(item.id)}>
                                <img src={deleteImg} alt="" width="30" height="30"></img>
                            </button>
                            <button className='btn' onClick={()=>changeCompletion(item.id)}>
                            <img src={checkImg} alt="" width="30" height="30"></img>
                            </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default PendingComponent