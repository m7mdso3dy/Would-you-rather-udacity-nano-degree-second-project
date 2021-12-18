import { Fragment } from "react";
import { Card, Container, FloatingLabel, Form, Button } from "react-bootstrap";
import { questionsActions } from '../../store/questions-slice';
import { usersActions } from '../../store/users-slice';
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const QuestionForm = props => {
    const navigate = useNavigate();
    const questions = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const authedUser = useSelector(state => state.authedUser.authedUser);
    const optionOneRef = useRef();
    const optionTwoRef = useRef();
    console.log(questions);
    const addQuestionHandler = () => {
        /* when add new question you update 2 states
            first state is the questions state by adding the new question
            second state is the current user in the usres state by reaching to questions at the user object and add the question id
        */
        //new question format 
            /*
            action.payload = {
            id : questionId,
            author : currently loggedin user id,
            timestamp : ,
            optionOne : {
            votes : [],
            text : optionOneRef.current.value
            }
            optionTwo : {
            votes : [],
            text : optionTwoRef.current.value
            }
            }
            */
        const newId =  (()=> {
            return (
                Math.random()
                    .toString(36)
                    .substring(2, 15) +
                Math.random()
                    .toString(36)
                    .substring(2, 15)
            );
        })();
        dispatch(questionsActions.addNewQuestion({
            id: newId,
            author: authedUser,
            timestamp: 1000,
            optionOne: {
                votes: [],
                text: optionOneRef.current.value
            },
            optionTwo: {
                votes: [],
                text: optionTwoRef.current.value
            }
        }));
        dispatch(usersActions.addNewCreatedQuestion({
            newQuestionId: newId,
            userId: authedUser
        }));
        navigate('/')
    }
    return (
        <Fragment>
            <Container className="row align-items-center justify-content-center">
                <Card className="col-lg-6 ">
                    <Card.Body className="d-flex flex-column justify-content-center">
                        <Card.Title className="text-center pt-3 pb-2">Add New Question</Card.Title>
                        <FloatingLabel controlId="floatingInput" label="Option One" className="mb-3">
                            <Form.Control ref={optionOneRef} type="text" placeholder="Option One" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Option Two">
                            <Form.Control ref={optionTwoRef} type="text" placeholder="Option Two" />
                        </FloatingLabel>
                        <Button onClick={addQuestionHandler} variant="primary" className="my-2 align-self-center">Add Question</Button>
                    </Card.Body>
                </Card>
            </Container>
        </Fragment>
    )
}
export default QuestionForm;