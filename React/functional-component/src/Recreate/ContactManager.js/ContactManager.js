import { useState, useEffect } from 'react'
import axios from 'axios'
import './ContactManagerComps.css'
const ContactManager = (props) => {

    const [contacts, setContact] = useState([]);
    const [id, setID] = useState('-1');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [flag, setFlag] = useState(false);
    const [toggleUpdate, setToggleUpdate] = useState(false);

    useEffect(()=>{
        console.log('use effect called');
        axios.get('http://localhost:3001/empDetails').then((res)=>{
            setContact(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    },[flag])

    const handleChange = (e, key) => {
        if(key === 'name') {
            setName(e.target.value);
        }
        if(key === 'phone') {
            setPhone(e.target.value);
        }
        if(key === 'email') {
            setEmail(e.target.value);
        }
    }
    const handleAdd = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            fname: name,
            phone: phone,
            email: email,
        }

        axios.post('http://localhost:3001/empDetails', obj).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        setFlag(!flag);
        clearForm();
    }

    //utility func
    const clearForm = () => {
        setName('');
        setPhone('');
        setEmail('');
    }

    const toggleUpdateBtn = (e, item) => {
        e.preventDefault();
        setToggleUpdate(!toggleUpdate);
        
        setID(item.id);
        setName(item.fname);
        setPhone(item.phone);
        setEmail(item.email);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        let temp = [...contacts];
        let newObj = temp.find((item)=>item.id === id);
        newObj.fname = name;
        newObj.phone = phone;
        newObj.email = email;

        // console.log(newObj.id);

        axios.patch(`http://localhost:3001/empDetails/${id}`, {
            fname: name,
            email: email,
            phone: phone
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })

        setFlag(!flag)

        // setContact(temp)

        // after update is done, resetting the values for future
        clearForm();
        setToggleUpdate(false);
    }

    return (
        <div>
            <form>
                <input text='text' placeholder="Username" onChange={(e) => handleChange(e, 'name')} value = {name}></input>
                <input text='text' placeholder="Phone" onChange={(e) => handleChange(e, 'phone')} value = {phone}></input>
                <input text='text' placeholder="Email" onChange={(e) => handleChange(e, 'email')} value = {email}></input>
                {toggleUpdate ? <button onClick={(e)=>handleUpdate(e)}>Update</button> : <button onClick={(e)=>handleAdd(e)}>Add new </button>}
            </form>
            
            <div className="container">
                <h1 className="container-h1">All contacts</h1>
                <div className="row">
                    {    
                        contacts.map((item) => (
                            <div className="card card-body col-3">
                                <h3>{item.fname}</h3>
                                <h5>{item.phone}</h5>
                                <h5>{item.email}</h5>
                                {/* <button>Delete</button> */}
                                <button onClick={(e)=>toggleUpdateBtn(e, item)}>Update</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default ContactManager