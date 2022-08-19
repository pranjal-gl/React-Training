import {addUser, createUser} from './useSlice'
import { useDispatch } from "react-redux"
import { useState } from 'react';
import './AddUser.css';

const AddUser = () => {
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e, key) => {
        if(key === 'uname') setUname(e.target.value);
        if(key === 'email') setEmail(e.target.value);
        if(key === 'phone') setPhone(e.target.value);
    }

    const dispatch = useDispatch();
    const handleAdd = () => {
        dispatch(addUser({
            id: Date.now(),
            fname: uname,
            email: email,
            phone: phone
        }))
        dispatch(createUser({
            id: Date.now(),
            fname: uname,
            email: email,
            phone: phone
        }))
    }

    return(
        <div>
            <input type='text' className='form-control' placeholder="Username" onChange={(e)=>handleChange(e, 'uname')}></input>
            <input type='text' className='form-control' placeholder="Email" onChange={(e)=>handleChange(e, 'email')}></input>
            <input type='text' className='form-control' placeholder="Phone" onChange={(e)=>handleChange(e, 'phone')}></input>
            <button className='btn' onClick={handleAdd}>Add</button>
        </div>
    )
}
export default AddUser;