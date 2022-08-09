import React from "react";
import {Link, NavLink} from 'react-router-dom'
import './Header.css'
class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <button className="btn">
                    <NavLink className='link' to='/' style={({isActive})=>(
                        {color: isActive ? 'red' : 'blue'}
                    )}>
                        Rank
                    </NavLink>
                </button>

                <button className="btn">
                    <NavLink className='link' to='/name' style={({isActive})=>(
                        {color: isActive ? 'red' : 'blue'}
                    )}>
                        Name
                    </NavLink>
                </button>

                <button className="btn">
                    <NavLink className='link' to='/age' style={({isActive})=>(
                        {color: isActive ? 'red' : 'blue'}
                    )}>
                        Age
                    </NavLink>
                </button>

                <button className="btn">
                    <NavLink className='link' to='/score' style={({isActive})=>(
                        {color: isActive ? 'red' : 'blue'}
                    )}>
                        Score
                    </NavLink>
                </button>
            </div>
        )
    }
}
export default Header