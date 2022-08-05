import React from "react";
import SortComp from './SortComp'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
 
function LeaderBoard(){
    return(
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/name'element={<SortComp userkey='name' value={1}></SortComp>}></Route>
            <Route path='/age' element={<SortComp userkey='age' value={2}></SortComp>}></Route>
            <Route path='/' element={<SortComp userkey='rank' value={3}></SortComp>}></Route>
            <Route path='/score' element={<SortComp userkey='points' value={4}></SortComp>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
  export default LeaderBoard