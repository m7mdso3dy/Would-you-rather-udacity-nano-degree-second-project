import { Fragment } from "react";
import { Button } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { authUserActions } from "../../store/auth-user-slice";
const UserStatus = props => {
    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser.authedUser);
    const logoutHandler = () => {
        dispatch(authUserActions.logout());
    }
    return (
        <Fragment>
            <span> {authedUser} </span>
            <Button onClick={logoutHandler} className='mx-4' variant="outline-success" >Logout</Button>
        </Fragment>
    )
}
export default UserStatus;