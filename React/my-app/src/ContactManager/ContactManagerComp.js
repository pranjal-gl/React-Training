import React from "react";
import './ContactManagerComps.css'
class ContactManagerComp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            contactList: this.props.data,
            ipUser: '',
            ipPhone: '',
            ipEmail: '',
            ipAddress: '',
            updateFlag: false,
            updateID: -1,
        }
    }

    //utility func
    clearForm = () => {
        this.setState({id: -1});
        this.setState({ipUser: ''});
        this.setState({ipPhone: ''});
        this.setState({ipEmail: ''});
        this.setState({ipAddress: ''});
    }

    toggleFlag = () => {
        this.setState({updateFlag:!this.state.updateFlag});
    }

    // Add new contact
    handleChange = (event, key)=>{
        if(key === 'name') this.setState({ipUser: event.target.value})
        if(key === 'phone') this.setState({ipPhone: event.target.value})
        if(key === 'email') this.setState({ipEmail: event.target.value})
        if(key === 'address') this.setState({ipAddress: event.target.value})
    }
    handleAdd = (event) => {
        event.preventDefault();
        const newObj = {
            id: Date.now(),
            fname: this.state.ipUser,
            phone: this.state.ipPhone,
            email: this.state.ipEmail,
            address: this.state.ipAddress
        }

        this.setState({contactList: [...this.state.contactList, newObj]});

        this.clearForm();
    }

    // update existing contact
    enableUpdateBtn = (event, item) => {
        event.preventDefault();
        this.toggleFlag();
        this.setState({updateID: item.id});
        this.setState({ipUser: item.fname});
        this.setState({ipPhone: item.phone});
        this.setState({ipEmail: item.email});
        this.setState({ipAddress: item.address});
    }
    handleUpdate = (event) => {
        event.preventDefault();
        let temp = [...this.state.contactList]
        let newObj = temp.find((item)=>item.id === this.state.updateID)
        newObj.fname = this.state.ipUser
        newObj.phone = this.state.ipPhone
        newObj.email = this.state.ipEmail
        newObj.address = this.state.ipAddress
        this.setState({contactList: temp})

        // after update is done, resetting the values for future
        this.clearForm();
        this.toggleFlag();
    }

    //delete contact
    handleDelete = (event, id) => {
        const result=this.state.contactList.filter((item)=>item.id!==id)
        this.setState({contactList:result})
    }

    render() {
        return(
            <div>
                {
                    this.state.updateFlag ? <h2>Update existing contact</h2> : <h2>Add new contact</h2>
                }
 
                <form>
                    <input text='text' placeholder="Username" onChange={(e)=>this.handleChange(e, 'name')} value={this.state.ipUser} autoFocus></input>
                    <input text='text' placeholder="Phone" onChange={(e)=>this.handleChange(e, 'phone')} value={this.state.ipPhone}></input>
                    <input text='text' placeholder="Email" onChange={(e)=>this.handleChange(e, 'email')} value={this.state.ipEmail}></input>
                    <input text='text' placeholder="Address" onChange={(e)=>this.handleChange(e, 'address')} value={this.state.ipAddress}></input>
                    {
                        this.state.updateFlag ? <button onClick={(e)=>this.handleUpdate(e)}>Update contact</button> : <button onClick={(e)=>this.handleAdd(e)}>Add contact</button>
                    }
                </form>

                <form>
                    <input text='text' placeholder="Search contact"></input>
                    <button>Search</button>
                </form>

                
                <div className="container">
                <h1 className="container-h1">All contacts</h1>
                    <div className="row">
                        {
                            this.state.contactList.map((item)=>(
                                <div className="card card-body col-3">
                                    <h3>{item.fname}</h3>
                                    <h5>{item.phone}</h5>
                                    <h5>{item.email}</h5>
                                    <h5>{item.address}</h5>
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

export default ContactManagerComp