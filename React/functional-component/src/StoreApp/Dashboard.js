import { useDispatch } from "react-redux";
import { toggleUser } from "./useSlice";

const Dashboard = () => {
    const dispatch = useDispatch();
    const handleToggle = () => {
        //log-out logic
        dispatch(toggleUser({user: 'dummy', password: "admin"}));
    }
    return(
        <div>
            <h1>Dashboard</h1>
            <button className="btn btn-primary" onClick={handleToggle}>Log-out</button>
        </div>
    )
}
export default Dashboard;