import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "./useSlice";
import './Home.css'

const Home = () => {
    const {products} = useSelector((state)=> state.products.value)
    console.log(products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProduct());
    }, [dispatch]);

    return(
        <div>
            <h3>Products page</h3>
            <div className="container">
                <div className="row">
                    {
                        products.map((item)=>(
                            <div className="card card-body col-3">
                                <img className="img-style" src={item.images[0]} alt='Product'></img>
                                <h5>{item.title.slice(0, 20)}</h5>
                                <p>{item.description.slice(0, 45)}...Read more</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;