import axios from "axios";

export const getUserData = () => async (dispatch) => {
    try{
        const res= 'hello'
        let data=res
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