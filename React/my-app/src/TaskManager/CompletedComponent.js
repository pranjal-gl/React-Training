import React from "react";
import _isEqual from 'lodash/isEqual'
import pending from './pending.png';
import deleteImg from './delete.png';
import './styles.css'
class CompletedComponent extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(newProps, newState) {
        if(_isEqual(newProps.completedTask, this.props.completedTask)) return false;
        else return true;
    }

    render(){
        // console.log("completed comp render");
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#6ecc71'
        }
        const {completedTask,changeCompletion,changeDeletion}=this.props
        return(
            <div className="comp-div">
                <h2>Completed Tasks</h2>
                {
                    completedTask.map((item)=>(
                        <div style={borderstyle} className="card-div">
                            <h3>{item.taskname}           <span>({item.taskdesc})</span></h3>
                            <div className="btn-div">
                            <button className='btn' onClick={()=>changeDeletion(item.id)}>
                                <img src={deleteImg} alt="" width="30" height="30"></img>
                            </button>
                            <button  className='btn' onClick={()=>changeCompletion(item.id)} >
                                <img src={pending} alt="" width="30" height="30"></img>
                            </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default CompletedComponent