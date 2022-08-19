import { connect } from "react-redux";
import {getUserData, postUserData} from '../Actions/userAction';
import GetUserComponent from './GetUserComponent';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        isLoading: state.loading
    }
}

export default connect(mapStateToProps, {getUserData, postUserData})(GetUserComponent);