import { toggleUser } from './useSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Home.css'

const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleUser({user: username, password: password}))
    }
    const handleChange = (e, key) => {
        if(key === 'username') setUsername(e.target.value);
        if(key === 'password') setPassword(e.target.value);
    }

    return(
        <div className='login-container'>
            <div className='login-form'>
                <input type='text' placeholder='Username' onChange={(e)=>handleChange(e, 'username')} />
                <br/>
                <input type='text' placeholder='Password' onChange={(e)=>handleChange(e, 'password')} />
                <br/>
                <button className='btn btn-primary' onClick={handleToggle}>
                    <Link to='/home'>Log in</Link>
                </button>
                
            </div>
            
            <div className='login-heading'>
                <h1>Log-In</h1>
            </div>
        </div>
        
    )
}
export default LogIn;