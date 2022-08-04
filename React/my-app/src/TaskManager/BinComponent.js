import React from "react";
import _isEqual from 'lodash/isEqual'
import restoreImg from './restore.png'
import './styles.css'
class BinComponent extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(newProps, newState) {
        if(_isEqual(newProps.deletedTask, this.props.deletedTask)) return false;
        else return true;
    }

    render(){
        // console.log("Bin comp render");
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#fcba03'
        }
        const {deletedTask, changeDeletion}=this.props
        return(
            <div className="comp-div">
                <h2>Deleted Tasks</h2>
                {
                    deletedTask.map((item)=>(
                        <div style={borderstyle} className="card-div">
                            <h3>{item.taskname}           <span>({item.taskdesc})</span></h3>
                            <div className="btn-div">
                            <button className='btn' onClick={()=>changeDeletion(item.id)}>
                                <img src={restoreImg} alt="" width="30" height="30"></img>
                            </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default BinComponent