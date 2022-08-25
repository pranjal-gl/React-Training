import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function DashBoardToken(){
    const navigate=useNavigate()
    const updateMethod=()=>{
        axios.post('http://localhost:3001/update',{},{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('accesstoken')
            }
        }).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }
    const logoutMethod=()=>{
       localStorage.removeItem('accesstoken')
       navigate('/')
    }
    const deleteMethod = () => {
        axios.post('http://localhost:3001/delete',{},{
            headers:{
                Authorization:'Bearer '+localStorage.getItem('accesstoken')
            }
        }).then((Res)=>console.log(Res)).catch((e)=>console.log(e))
    }
    return(
        <div>
            <button onClick={updateMethod}>update</button>
            <button onClick={deleteMethod}>delete</button>
            <button onClick={logoutMethod}>logout</button>
        </div>

    )
}
export default DashBoardToken