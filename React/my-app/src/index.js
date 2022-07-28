import React from 'react';
import ReactDOM from 'react-dom/client';

// Task - 1
// import Header from './React Task1/Header';
// import Body from './React Task1/body'
// import Contacts from './React Task1/Contacts';
// import Footer from './React Task1/Footer';

// Task - 2
import Card from './React Task2/body/Card';
import Header from './React Task2/Header';
import {data} from './React Task2/data'

// Task - 3
// import {userDetails} from './React Task3/userDetails'
// import ClassComponent from './React Task3/ClassComponent';
// import SimpleComponent from './React Task3/SimpleComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* Task-1 */}
        {/* <Header></Header>
        <Body></Body>
        <Contacts></Contacts>
        <Footer></Footer> */}
        
        {/* Task-2 */}
        <Header></Header>
        <div className='container'>
            <div className='row'>
                <Card data={data}></Card>
            </div>
        </div>

        {/* Task-3 */}
        {/* {console.log(userDetails)}
        <ClassComponent data={userDetails}></ClassComponent>
        <SimpleComponent tech='React.JS'></SimpleComponent> */}
    </>

);
