import React from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { questionsActions } from "../../store/questions-slice";
import { usersActions } from "../../store/users-slice";
const UnAnsweredQuestion = props => {
    const dispatch = useDispatch();
    const optionOneRef = useRef();
    const optionTwoRef = useRef();
    const updateAnswerHandler = () => {
        if (optionOneRef.current.checked) {
            dispatch(questionsActions.updateQuestionVoter(
                {
                    questionId: props.id,
                    userId: props.authedUser,
                    voteOption: 'optionOne'
                }
                
            ));
            dispatch(usersActions.updateUserAnsweredQuestion({
                questionId: props.id,
                userId: props.authedUser,
                voteOption: 'optionOne'
            }));
            props.changeAnswerStateHandler();
        }
        else if (optionTwoRef.current.checked) {
            dispatch(questionsActions.updateQuestionVoter(
                {
                    questionId: props.id,
                    userId: props.authedUser,
                    voteOption: 'optionTwo'
                }
                
            ));
            dispatch(usersActions.updateUserAnsweredQuestion({
                questionId: props.id,
                userId: props.authedUser,
                voteOption: 'optionTwo'
            }));
            props.changeAnswerStateHandler();
        }
        else {
            alert('chosse answer before submit');
        }
    }
    return (
        <div className="container">
            <h2>Would You Rather </h2>
            <Form.Check
                ref={optionOneRef}
                className="mt-4 mb-2"
                type='radio'
                id={`${props.optionOne}-radio`}
                label={props.optionOne}
                name={props.id}
                value='optionOne'
                
            />
            <Form.Check
                ref={optionTwoRef}
                className="my-2"
                type='radio'
                id={`${props.optionTwo}-radio`}
                label={props.optionTwo}
                name={props.id}
                value='optionTwo'
            />
            <Button onClick={updateAnswerHandler} variant="primary" className="my-5 align-self-center">Submit Your Answer</Button>
        </div>
    )
}

export default UnAnsweredQuestion;