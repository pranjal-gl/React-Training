import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './Home.css'

const LandingPage = () => {
    return(
        <div className='parent-container'>
            <BrowserRouter>
                <nav className='navbar navbar-dark bg-dark'>
                    <Link to='/'>Home</Link>
                </nav>

                <Routes>
                    <Route 
                        path = '/' 
                        element = {  <Home/> }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default LandingPage;