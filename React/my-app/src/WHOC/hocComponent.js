import React from "react";


const hocComponent = (InputComponent)=>{
    return class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                search: '',
                storeName: '',
                productDetails: [],
                result: []
            }
        }

        static getDerivedStateFromProps(props,state){
            return {productDetails:props.data,storeName:props.storeName}
        }

        handleChange=(event)=>{
            this.setState({search:event.target.value})
        }
        handleSearch=(event)=>{
            event.preventDefault()
            let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
            this.setState({result:data}) 
        }

        render() {
            return(
                <InputComponent result = {this.state.result} handleChange={this.handleChange} handleSearch={this.handleSearch} storeName={this.state.storeName}></InputComponent>
            )
        }
    }
}

export default hocComponent