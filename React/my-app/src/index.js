import React from 'react';
import ReactDOM from 'react-dom/client';
// import LCMounting from './LifeCycle/LCMounting';
import LCUpdating from './LifeCycle/LCUpdating'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <ParentComponent></ParentComponent> */}
        {/* <CounterComponent></CounterComponent> */}
        {/* <LCMounting></LCMounting> */}

        <LCUpdating></LCUpdating>
    </>

);
