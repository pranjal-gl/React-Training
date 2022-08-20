import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { removeUser, deleteUser, fetchUser } from "./useSlice";
import './ViewUser.css'
const ViewUser = () => {

    const dispatch = useDispatch();
    const {usersData}=useSelector((state)=>state.sliceName.value)
    const handleDelete = (id) => {
        dispatch(removeUser({id: id}));
        dispatch(deleteUser(id));
    }

    useEffect(()=>{
        dispatch(fetchUser());
    }, [dispatch]) 

    return(
        <div className='container'>
            <h1 className="heading">List of users</h1>
            <div className='row'>
            {
                usersData.map((item)=> (
                    <div className='card card-body col-3'>
                        <h1>{item.fname}</h1>
                        <p>{item.email}</p>
                        <p>{item.id}</p>
                        <button className="btn" onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                ))
            }
            </div>  
        </div>
    ) 
}

export default ViewUser