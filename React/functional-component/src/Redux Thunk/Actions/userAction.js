import axios from "axios";

export const getUserData = () => async (dispatch) => {
    try{
        const res=await axios.get('https://jsonplaceholder.typicode.com/users')
        let data=res.data
        return dispatch(
            {
                type:'GET_USER',
                payload:data
            }
        )
    }
    catch(er){
        console.log(er)
    }
}

export const postUserData = () => async (dispatch) => {
    try{
        const data = {
            id: 98273,
            name: "Harry"
        }
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', data)
        // console.log(res);
        return dispatch(
            {
                type:'POST_USER',
                payload:data
            }
        )
    } catch (er) {
        console.log(er);
    }
}