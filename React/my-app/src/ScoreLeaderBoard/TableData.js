import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
import './TableData.css'
class TableData extends React.Component{
    constructor(props){
        super(props) 
    }
    render(){
        console.log('render of table')
        return(
        <div className="table-div">
        <table>
            <thead>
                <tr>
                    <th>
                        <button className="btn">
                            <NavLink className='link' to='/' style={({isActive})=>(
                                {color: isActive ? 'red' : 'blue'}
                            )}>
                                Rank
                            </NavLink>
                        </button>
                    </th>
                    <th>
                        <button className="btn">
                            <NavLink className='link' to='/name' style={({isActive})=>(
                                {color: isActive ? 'red' : 'blue'}
                            )}>
                                Name
                            </NavLink>
                        </button>
                    </th>
                    <th>
                        <button className="btn">
                            <NavLink className='link' to='/age' style={({isActive})=>(
                                {color: isActive ? 'red' : 'blue'}
                            )}>
                                Age
                            </NavLink>
                        </button>
                    </th>
                    <th>
                        <button className="btn">
                            <NavLink className='link' to='/score' style={({isActive})=>(
                                {color: isActive ? 'red' : 'blue'}
                            )}>
                                Score
                            </NavLink>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.tabledata.map((item)=>(
                        <tr>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.points}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
        )
    }
}
export default TableData