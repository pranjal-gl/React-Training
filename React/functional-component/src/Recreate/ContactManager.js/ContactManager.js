import { useState } from 'react'
import contactDetails from './contactDetails'
import './ContactManagerComps.css'
const ContactManager = (props) => {

    const [contacts, setContact] = useState(contactDetails);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

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
        if(key === 'address') { 
            setAddress(e.target.value);
        }
    }
    const handleAdd = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            fname: name,
            phone: phone,
            email: email,
            address: address
        }
        setContact([...contacts, obj])
    }

    return (
        <div>
            <form>
                <input text='text' placeholder="Username" onChange={(e) => handleChange(e, 'name')} value = {name}></input>
                <input text='text' placeholder="Phone" onChange={(e) => handleChange(e, 'phone')} value = {phone}></input>
                <input text='text' placeholder="Email" onChange={(e) => handleChange(e, 'email')} value = {email}></input>
                <input text='text' placeholder="Address" onChange={(e) => handleChange(e, 'address')} value = {address}></input>
                <button onClick={(e)=>handleAdd(e)}>Add new </button>
            </form>
            
            <div className="container">
                <h1 className="container-h1">All contacts</h1>
                <div className="row">
                    {    
                        contacts.map((item) => (
                            <div className="card card-body col-3">
                                {console.log(item)}
                                <h3>{item.fname}</h3>
                                <h5>{item.phone}</h5>
                                <h5>{item.email}</h5>
                                <h5>{item.address}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}

export default ContactManager