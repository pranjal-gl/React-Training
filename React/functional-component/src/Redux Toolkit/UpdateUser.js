import {modifyUser, updateUser} from './useSlice'
import { useDispatch } from "react-redux"
import { useState } from 'react';
import './AddUser.css'
const UpdateUser = () => {
    const [id, setID] = useState('');
    const [uname, setUname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleChange = (e, key) => {
        if(key === 'id') setID(e.target.value);
        if(key === 'uname') setUname(e.target.value);
        if(key === 'email') setEmail(e.target.value);
        if(key === 'phone') setPhone(e.target.value);
    }

    const dispatch = useDispatch();
    const handleUpdate = () => {
        const data = {
            id: id,
            fname: uname,
            email: email,
            phone: phone
        }
        dispatch(updateUser(data))
        dispatch(modifyUser(data))
    }

    return(
        <div>
            <input type='text' className='form-control' placeholder="Enter contact ID" onChange={(e)=>handleChange(e, 'id')}></input>
            <input type='text' className='form-control' placeholder="Username" onChange={(e)=>handleChange(e, 'uname')}></input>
            <input type='text' className='form-control' placeholder="Email" onChange={(e)=>handleChange(e, 'email')}></input>
            <input type='text' className='form-control' placeholder="Phone" onChange={(e)=>handleChange(e, 'phone')}></input>
            <button className='btn' onClick={handleUpdate}>Update</button>
        </div>
    )
}
export default UpdateUser;