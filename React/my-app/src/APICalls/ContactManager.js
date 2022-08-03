import axios from "axios";
import React from "react";
import './ContactManager.css'
class ContactManager extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contactList: [],
            ipUser: '',
            ipPhone: '',
            ipEmail: '',
            updateFlag: false,
            updateID: -1,
            statusText: ''
        }
    }

    componentDidMount=()=>{
        axios.get('http://localhost:3001/empDetails').then((res)=>{
            this.setState({contactList: res.data})
            console.log(res.data);
        }).catch((err)=>console.log(err));
    }

    //utility func
    clearForm = () => {
        this.setState({id: -1});
        this.setState({ipUser: ''});
        this.setState({ipPhone: ''});
        this.setState({ipEmail: ''});
    }
    toggleFlag = () => {
        this.setState({updateFlag:!this.state.updateFlag});
    }

    // Add new contact
    handleChange = (event, key)=>{
        if(key === 'name') this.setState({ipUser: event.target.value})
        if(key === 'phone') this.setState({ipPhone: event.target.value})
        if(key === 'email') this.setState({ipEmail: event.target.value})
    }
    handleAdd = (event) => {
        event.preventDefault();
        const newObj = {
            id: Date.now(),
            fname: this.state.ipUser,
            phone: this.state.ipPhone,
            email: this.state.ipEmail,
        }
        this.setState({contactList: [...this.state.contactList, newObj]});
        this.clearForm();
        axios.post('http://localhost:3001/empDetails', newObj).then((res)=>{
            console.log(res.data);
            this.setState({statusText:"Added"})
        }).catch((err)=>console.log(err));
    }

    // update existing contact
    enableUpdateBtn = (event, item) => {
        event.preventDefault();
        this.toggleFlag();
        this.setState({updateID: item.id});
        this.setState({ipUser: item.fname});
        this.setState({ipPhone: item.phone});
        this.setState({ipEmail: item.email});
    }
    handleUpdate = (event) => {
        event.preventDefault();
        let temp = [...this.state.contactList]
        let newObj = temp.find((item)=>item.id === this.state.updateID)
        newObj.fname = this.state.ipUser
        newObj.phone = this.state.ipPhone
        newObj.email = this.state.ipEmail
        this.setState({contactList: temp})
        axios.patch(`http://localhost:3001/empDetails/${this.state.updateID}`,{
            fname: this.state.ipUser,
            email: this.state.email,
            phone: this.state.ipPhone,
        }).then((res)=>this.setState({statusText:"Updated"})).catch((err)=>console.log(err))

        // after update is done, resetting the values for future
        this.clearForm();
        this.toggleFlag();
    }

    //delete contact
    handleDelete = (event, id) => {
        const result=this.state.contactList.filter((item)=>item.id!==id)
        this.setState({contactList:result})
        axios.delete(`http://localhost:3001/empDetails/${id}`).then((res)=>{
            this.setState({statusText:"Deleted"});
        }).catch((err)=>console.log(err))
    }

    render() {
        return(
            <div>
                <nav className="nav">
                    <a className="navbar-brand" href="#">
                        <img src="https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple-thumbnail.png" alt="" width="30" height="24"/>
                    </a>
                    <a className="nav-link active" href="#">Home</a>
                    <a className="nav-link" href="#">Search</a>
                    <a className="nav-link" href="#">About</a>
                </nav>
                {
                    this.state.updateFlag ? <h2>Update existing contact</h2> : <h2>Add new contact</h2>
                }

                <form>
                    <input text='text' placeholder="Username" onChange={(e)=>this.handleChange(e, 'name')} value={this.state.ipUser}></input>
                    <input text='text' placeholder="Phone" onChange={(e)=>this.handleChange(e, 'phone')} value={this.state.ipPhone}></input>
                    <input text='text' placeholder="Email" onChange={(e)=>this.handleChange(e, 'email')} value={this.state.ipEmail}></input>
                    {
                        this.state.updateFlag ? <button onClick={(e)=>this.handleUpdate(e)}>Update contact</button> : <button onClick={(e)=>this.handleAdd(e)}>Add contact</button>
                    }
                </form>
                
                <div className="container">
                <h1 className="container-h1">All contacts</h1>
                <p>{this.state.statusText}</p>
                    <div className="row">
                        {
                            this.state.contactList.map((item)=>(
                                <div className="card card-body col-3">
                                    <h3>{item.fname}</h3>
                                    <h5>{item.phone}</h5>
                                    <h5>{item.email}</h5>
                                    <button onClick={(e)=>this.handleDelete(e, item.id)}>Delete</button>
                                    <button onClick={(e)=>this.enableUpdateBtn(e, item)}>Update</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactManager 