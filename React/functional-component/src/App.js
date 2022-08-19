// import ContactManager from "./Recreate/ContactManager.js/ContactManager"
// import Parent from "./Recreate/ToggleUser/Parent"

// import FormHook from "./CustomHooks/FormHook"
// import Counter from "./CustomHooks/Counter"
// import AuthProvider from "./Task1/AuthProvider"
// import ContextProvider from "./Task2/ContextProvider"
// import GetUserConnector from './Redux Thunk/Component/GetUserConnector';

// import CounterConnector from './Counter using Core Redux/CounterConnector';

// import ThemeProvider from './ThemeChangeApp/ThemeProvider';

import ViewUser from './Redux Toolkit/ViewUser'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import AddUser from './Redux Toolkit/AddUser'
import UpdateUser from './Redux Toolkit/UpdateUser'
import './App.css';

function App() {
    return(
        // <HooksDemo></HooksDemo>
        // <ObjStateDemo></ObjStateDemo>
        // <Parent></Parent>
        // <ContactManager></ContactManager>
        // <FormHook></FormHook>
        // <Counter></Counter>

        // <ContextProvider></ContextProvider>
        // <AuthProvider></AuthProvider>
        
        // Context-API
        // <ThemeProvider></ThemeProvider>
        
        // Core-Redux
        // <CounterConnector></CounterConnector>
        // <GetUserConnector></GetUserConnector>

        // Reduxjs toolkit

        
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

        )
    }
export default App