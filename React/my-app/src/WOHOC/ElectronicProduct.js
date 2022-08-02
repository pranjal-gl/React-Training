import React from "react";
import './styles.css'
class ElectronicProduct extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            search: '',
            result: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {products: props.data}
    }

    handleChange = (event)=>{
        this.setState({search: event.target.value})
    }
    handleSearch = (event)=>{
        event.preventDefault()  
        let data = this.state.products.filter((item)=>(
            item.pName === this.state.search
        ))
        this.setState({result: data})
    }

    render() {
        return(
            <div>
                <form className="search-form">
                    <input type='text' placeholder="Search Product" onChange={(e)=>this.handleChange(e)}></input>
                    <button onClick={(e)=>this.handleSearch(e)}>Search</button>
                </form>
                {
                    this.state.result.map((item)=>(
                        <div className="res-div">
                            <h2>Product: {item.pName}</h2>
                            <h3>Price: {item.price}</h3>
                            <h3>Manufacturer: {item.manufacturer}</h3>
                            <h3>Expected Delivery: {item.expectedDelivery}</h3>
                            <a href={item.link}>Check-out</a>
                        </div>

                    ))
                }
            </div>
        )
    }
}

export default ElectronicProduct