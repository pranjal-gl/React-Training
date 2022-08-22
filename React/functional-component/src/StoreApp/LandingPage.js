import  { useSelector } from 'react-redux';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import LogIn from './LogIn';
import Home from './Home';
import Dashboard from './Dashboard';
import CartPage from './CartPage';
import './Home.css'

const LandingPage = () => {
    const { isLoggedIn } = useSelector((state)=>state.products.value);
    return(
        <div className='parent-container'>
            <BrowserRouter>
                <nav className='navbar navbar-dark bg-dark'>
                    <Link to='/home'>Shopify.com</Link>
                    <Link to='/home'>Home</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/cart'>View cart</Link>
                </nav>

                <Routes>
                    <Route 
                        path='/' 
                        element={<LogIn></LogIn>}>
                    </Route>
                    <Route 
                        path = '/home' 
                        element = { isLoggedIn ? <Home/> : <Navigate to='/'/> }>
                    </Route>
                    <Route
                        path='/dashboard'
                        element = { isLoggedIn ? <Dashboard/> : <Navigate to='/'/> }>
                    </Route>
                    <Route
                        path='/cart'
                        element = { isLoggedIn ? <CartPage/> : <Navigate to='/'/> }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default LandingPage;