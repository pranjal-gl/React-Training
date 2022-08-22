import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { fetchCart } from './useSlice';

const CartPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCart())
    }, [dispatch])

    const { cartProd, currUser } = useSelector((state)=>state.products.value);
    const data = cartProd.filter((item)=> item.user === currUser);
    // console.log(data);

    let currPrice = 0;
    data.forEach((item)=>{
        currPrice += item.prod.price
    })
    // console.log(currPrice);

    return(
        <div>
            <h1>Cart Page</h1>
            <div className="container">
                <div className="row">
                    {
                        data.map((item)=>(
                            // console.log(item.prod)
                            <div className="card card-body col-3">
                                <img className="img-style" src={item.prod.images[0]} alt='Product'></img>
                                <h5>{item.prod.title}</h5>
                                <p>{item.prod.description.slice(0, 50)}...Read more</p>
                                <button >Remove</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='check-out'>
                <h4>Total Amount: ₹ {currPrice}</h4>
                <button>Place Order</button>
            </div>
        </div>
    )
}
export default CartPage;