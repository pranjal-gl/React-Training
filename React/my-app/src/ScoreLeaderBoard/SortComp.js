import React from 'react'
import response from './response'
import TableData from './TableData'

class SortComp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]  
        }
    }
    componentDidMount(){
        console.log("did mount");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("get derived");
        if(props.value == 1) {
            // name
            const sorteddata=[...response.list].sort((a,b)=>a.name.localeCompare(b.name))
            console.log(sorteddata);
            return ({data:sorteddata})
        } 

        if(props.value == 2) {
            //age
            const sorteddata=[...response.list].sort((a,b)=>{
                return Number(a.age)-Number(b.age)
            })
            return ({data:sorteddata})
        }
        if(props.value == 3) {
            // rank
            const sorteddata=[...response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
            return ({data:sorteddata})
        }
        if(props.value == 4) {
            // score
            const sorteddata=[...response.list].sort((a,b)=>Number(a.points)-Number(b.points))
            return ({data:sorteddata})
        }
    }
    
    render(){
        console.log('parent render');
        return(
            <div>
                <h2>Sorted based on {this.props.userkey} </h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )
    }
}
export default SortComp