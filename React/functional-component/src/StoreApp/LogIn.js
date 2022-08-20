import { toggleUser } from './useSlice';
import { useDispatch } from 'react-redux';
const LogIn = () => {
    const dispatch = useDispatch();
    const handleToggle = () => {
        dispatch(toggleUser({user: "Pranjal"}))
    }
    return(
        <div>
            <h1>LogIn</h1>
            <button onClick={handleToggle}>Login</button>
        </div>
    )
}
export default LogIn;