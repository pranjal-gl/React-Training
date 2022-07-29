import React from "react";
import Card from './Card'
class Parent extends React.Component {
    constructor(props) {
        super(props)

        this.state={
            users:[
                {
                    fname:"john",
                    email:"john@gmail.com",
                    phone:2938293892,
                    id: 0
                },
                {
                    fname:"peter",
                    email:"peter@gmail.com",
                    phone:2938293892,
                    id: 1
                },
                {
                    fname:"harry",
                    email:"harry@gmail.com",
                    phone:2938293892,
                    id: 2
                },

            ]
        }
    }

    render(){
        return(
        <div className="container">
        <div className="row">
        {
            this.state.users.map((item)=>(
                <Card data={item}></Card>
            ))
        }
        </div>
          </div>
        )
      
    }
}

export default Parent