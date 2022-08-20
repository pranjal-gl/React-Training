import  { useSelector } from 'react-redux';

import LogIn from './LogIn';
import Home from './Home';

const LandingPage = () => {

    const { isLoggedIn } = useSelector((state)=>state.products.value);
    console.log(isLoggedIn);
    return(
        <div>
            {
                isLoggedIn ? <Home></Home> : <LogIn></LogIn>
            }
        </div>
    )
}
export default LandingPage;