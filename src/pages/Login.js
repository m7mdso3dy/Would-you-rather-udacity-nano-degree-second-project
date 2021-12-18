import { Fragment } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authUserActions } from "../store/auth-user-slice";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const Login = props => {
    const userRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signInHandler = () => {
        dispatch(authUserActions.authUser(userRef.current.value));
        navigate('/');

    }
    return (
        <Fragment>
            <Container  className=" row align-items-center justify-content-center">
                <div className="col-lg-6 d-flex flex-column ">
                    <Form.Select aria-label="Default select example" ref={userRef} >
                        <option disabled>chosse user Name</option>
                        <option value="1sarahedo">Sarah Edo</option>
                        <option value="tylermcginnis">Tyler McGinnis</option>
                        <option value="johndoe">John Doe</option>
                    </Form.Select>
                    <Button onClick={signInHandler} variant="primary" className="my-5 align-self-center">sign-in</Button>
                </div>
            </Container>
        </Fragment>
    )
}

export default Login