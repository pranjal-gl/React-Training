import { useSelector } from "react-redux";

const Home = () => {
    const {currUser} = useSelector((state)=> state.products.value)
    return(
        <div>
            <h1>Welcome, {currUser}</h1>

        </div>
    )
}
export default Home;