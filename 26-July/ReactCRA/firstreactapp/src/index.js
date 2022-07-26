import React from 'react';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

// const flag = true;
// const val = 'React JS'
root.render(

  // flag&&<div>
  //   <h1>Hello {val}</h1>
  // </div>

  <div class='container'>
    <div class='row'>
      <div class='card col-md-3'>
        <img src="https://images.bewakoof.com/t640/denim-blue-plain-small-backpack-229500-1655748328-1.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
      <div className='card col-md-3'>
        <img src="https://images.bewakoof.com/t1080/last-benchers-printed-small-backpack-black-237470-1655746808-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
      <div className='card col-md-3'>
        <img src="https://images.bewakoof.com/t1080/balloon-happier-printed-small-backpack-229520-1655748566-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
      <div className='card col-md-3'>
        <img src="https://images.bewakoof.com/t1080/zipped-it-printed-small-backpack-229513-1655746814-1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button type="button" class="btn btn-secondary">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
