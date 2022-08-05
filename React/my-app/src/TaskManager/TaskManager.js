import React from "react"
import BinComponent from "./BinComponent"
import CompletedComponent from "./CompletedComponent"
import PendingComponent from "./PendingComponent"
import './styles.css'

class TaskManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            tasks:this.props.data,
            tempTask: '',
            tempDesc: ''
        }
    }

    getCompletedItems=()=>{
       const result= this.state.tasks.filter((item)=>item.completion===true&&item.deletion===false)
       return result
    }
    getPendingItems=()=>{
        const result= this.state.tasks.filter((item)=>item.completion===false&&item.deletion===false)
        return result
    }
    getDeletedTask=()=>{
        const result= this.state.tasks.filter((item)=>item.deletion===true)
        return result
    }

    changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.completion=!obj.completion
        this.setState({tasks:temp}) 
    }
    changeDeletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.deletion=!obj.deletion
        this.setState({tasks:temp}) 
    }

    clearForm = () => {
        console.log("clear form ");
        // this.setState({tempTask: ''});
        // this.setState({tempDesc: ''});
    }

    createTask = (e) => {
        e.preventDefault();

        const newObj = {
            id: Date.now(),
            taskname: this.state.tempTask,
            taskdesc: this.state.tempDesc,
            completion: false,
            deletion: false
        }

        console.log(newObj);
        this.setState({tasks: [...this.state.tasks, newObj]});
        this.clearForm();
        this.setState({tempTask: ''});
        this.setState({tempDesc: ''});
    }

    addTask = (e, key) => {
        if(key === 'task') {
            this.setState({tempTask: e.target.value})
        }
        if(key === 'desc') {
            this.setState({tempDesc: e.target.value})
        }
    }
    
    render(){
        // console.log("Parent comp render");
        return( 
            <div>
                <h1>Task Manager</h1>
                <div className="form-div">
                    <h4>Add new Task</h4>
                    <form>
                        <input type='text' placeholder="Task" onChange={(e)=>this.addTask(e, 'task')} value={this.state.tempTask}></input>
                        <input type='text' placeholder="Description" onChange={(e)=>this.addTask(e, 'desc')} value={this.state.tempDesc}></input>
                        <input type='submit' onClick={(e)=> this.createTask(e)}></input>
                    </form>
                </div>
                <div className="container">      
                <PendingComponent pendingTask={this.getPendingItems()} changeCompletion={this.changeCompletionStatus} changeDeletion={this.changeDeletionStatus}></PendingComponent>
                <CompletedComponent completedTask={this.getCompletedItems()} changeCompletion={this.changeCompletionStatus} changeDeletion={this.changeDeletionStatus}></CompletedComponent>
                <BinComponent deletedTask={this.getDeletedTask()} changeDeletion={this.changeDeletionStatus}></BinComponent>
                </div>
            </div>
        )
    }
}
export default TaskManager