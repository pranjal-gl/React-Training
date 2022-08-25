/***/
import ViewUser from './Redux Toolkit/ViewUser'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import AddUser from './Redux Toolkit/AddUser'
import UpdateUser from './Redux Toolkit/UpdateUser'

// import ParentComp from './RefDemo/ParentComp';
// import LandingPage from './StoreApp/LandingPage';
// import './App.css';
import JoiComponent from './JoiBrowserDemo/JoiComponent';
import LandingPage from './ReactExpressApp/LandingPage';
import LoginToken from './JWT Token/LoginToken';
import DashBoardToken from './JWT Token/DashboardToken'

function App() {
    return (

        // Reduxjs toolkit
        /**
            <div>
                <BrowserRouter>
                    <nav className='nav navbar-dark bg-dark sticky-top custom-nav'>
                    <Link to='/' className='nav-link'>View Contact</Link>
                    <Link to='/add' className='nav-link'>Add</Link>
                    <Link to='/update' className='nav-link'>Update</Link>
                    </nav>

                    <Routes>
                        <Route path='/' element={<ViewUser></ViewUser>}></Route>
                        <Route path='/add' element={<AddUser></AddUser>}></Route>
                        <Route path='/update' element={<UpdateUser></UpdateUser>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        */

        //Ref Demo
        // <ParentComp></ParentComp>

        // <LandingPage></LandingPage>

        //Joi Browser
        // <JoiComponent></JoiComponent>

        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginToken></LoginToken>}></Route>
                    <Route path='/dashboard' element={<DashBoardToken></DashBoardToken>}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default App