import React from 'react'
import response from './response'
import Header from './Header'
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
        
        // if(this.props.value == 2) {
        //     // age
        //     let userkey=this.props.userkey
        //     // console.log(userkey)
        //     const sorteddata=[...response.list].sort((a,b)=>{
        //         // console.log(a.age);
        //         // console.log(a.userkey);
        //         console.log(a.userkey);
        //         return Number(a.age)-Number(b.age)
        //     })
        //     // console.log(sorteddata);
        //     this.setState({data:sorteddata})
        // }
        // if(this.props.value == 3) {
        //     // rank
        //     let userkey=this.props.userkey
        //     // console.log(userkey)
        //     const sorteddata=[...response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
        //     this.setState({data:sorteddata})
        // }
        // if(this.props.value == 4) {
        //     // score
        //     let userkey=this.props.userkey
        //     // console.log(userkey)
        //     const sorteddata=[...response.list].sort((a,b)=>Number(a.points)-Number(b.points))
        //     this.setState({data:sorteddata})
        // }
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
            // age
            // let userkey=this.props.userkey
            // console.log(userkey)
            const sorteddata=[...response.list].sort((a,b)=>{
                // console.log(a.age);
                // console.log(a.userkey);
                // console.log(a.userkey);
                return Number(a.age)-Number(b.age)
            })
            // console.log(sorteddata);
            return ({data:sorteddata})
        }
        if(props.value == 3) {
            // rank
            // let userkey=this.props.userkey
            // console.log(userkey)
            const sorteddata=[...response.list].sort((a,b)=>Number(a.rank)-Number(b.rank))
            return ({data:sorteddata})
        }
        if(props.value == 4) {
            // score
            // let userkey=this.props.userkey
            // console.log(userkey)
            const sorteddata=[...response.list].sort((a,b)=>Number(a.points)-Number(b.points))
            return ({data:sorteddata})
        }
    }
    
    render(){
        console.log('parent render');
        return(
            <div>
                <Header value={this.props.value}></Header>
                <h2>Sorted based on {this.props.userkey} </h2>
                <TableData tabledata={this.state.data}></TableData>
            </div>
        )
    }
}
export default SortComp