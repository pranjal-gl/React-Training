import { connect } from "react-redux";
import {getUserData} from '../Actions/userAction';
import GetUserComponent from './GetUserComponent';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        isLoading: state.loading
    }
}
// console.log({getUserData});

export default connect(mapStateToProps, {getUserData})(GetUserComponent);