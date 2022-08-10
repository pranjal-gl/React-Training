import { useInput } from "./useInput"
const FormHook=()=>{
    const {value,err,...otherevents} = useInput() 
    return(
        <form>
            {console.log(value,err)}
            Username:<input type='text' {...otherevents}></input>
            Password:<input type='text' {...otherevents}></input>
            {
                err&&<h3>{err}</h3>  
            } 
        </form>
    )
}
export default FormHook