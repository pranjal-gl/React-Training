import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, getProduct } from "./useSlice";
import { toggleUser } from "./useSlice";
import './Home.css'

const Home = () => {
    const {currUser, products} = useSelector((state)=> state.products.value)

    const dispatch = useDispatch();
    const handleToggle = () => {
        //log-out logic
        dispatch(toggleUser({user: 'dummy', password: "admin"}));
    }
    useEffect(()=>{
        dispatch(getProduct());
    }, [dispatch]);

    const addItemToCart = (e, item) => {
        e.preventDefault();
        const newData = {
            user: currUser,
            prod: item
        }
        dispatch(addToCart(newData));
    }

    return(
        <div>
            <h1>Welcome, {currUser} !</h1>
            <button onClick={handleToggle}>Log-out</button>

            <div className="container">
                <div className="row">
                    {
                        products.map((item)=>(
                            <div className="card card-body col-3">
                                <img className="img-style" src={item.images[0]} alt='Product'></img>
                                <h5>{item.title}</h5>
                                <p>{item.description.slice(0, 50)}...Read more</p>
                                <button onClick={(e)=>addItemToCart(e, item)}>Add to cart</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;