import React from 'react';
import ReactDOM from 'react-dom/client';
// import LCMounting from './LifeCycle/LCMounting';
// import LCUpdating from './LifeCycle/LCUpdating'
import Parent from './ContactManager/Parent'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <ParentComponent></ParentComponent> */}
        {/* <CounterComponent></CounterComponent> */}
        {/* <LCMounting></LCMounting> */}

        {/* <LCUpdating name="Raju"></LCUpdating> */}
        <Parent></Parent>
    </>

);
