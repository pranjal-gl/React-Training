import React from "react";
import hocComponent from "./hocComponent";
import './styles.css'
class FilterProduct extends React.Component {
    render() {
        const {result,handleChange,handleSearch,storeName}=this.props
        console.log(this.props);
        return(
            <div>
                <form className="search-form">
                    <h4>{storeName}</h4><input type='text' placeholder="Search product" onChange={(e)=>handleChange(e)}></input>
                    <button onClick={(e)=> handleSearch(e)}>Search</button>
                </form>
                
                <div className="divider">
                {
                    result.map((item)=>(
                        <div className="res-div">
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                            <p>Expected Delivery: {item.expectedDelivery}</p>
                            <a href={item.link}>Check-out</a>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default hocComponent(FilterProduct)