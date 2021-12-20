import { Fragment, useEffect } from "react"
import UnAnsweredQuestion from "../comps/Questions Comps/UnAnsweredQuestion";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AnsweredQuestion from "../comps/Questions Comps/AnsweredQuestion";

const QuestionDetail = props => {
    const [answered, setAnswered] = useState(null);
    const [userChoise, setUserChoise] = useState('');
    const questions = useSelector(state => state.questions);
    const authedUser = useSelector(state => state.authedUser.authedUser);
    const { question_id } = useParams();
    
    useEffect(() => {
        if (!questions[question_id]) {
            console.log('this the shit where we are')
        return(<Navigate to='*'></Navigate>)
    }
        if (questions[question_id].optionOne.votes.includes(authedUser)) {
            setAnswered(true);
            setUserChoise(questions[question_id].optionOne.text);
        }
        if (questions[question_id].optionTwo.votes.includes(authedUser)) {
            setAnswered(true);
            setUserChoise(questions[question_id].optionTwo.text);
        }
    }, [answered, userChoise,authedUser,question_id,questions]);
    

    const changeAnswerStateHandler = () => {
        setAnswered(true);
    }
    return (
        <Fragment>

            {!answered && questions[question_id] &&
                <UnAnsweredQuestion
                    id={question_id}
                    optionOne={questions[question_id].optionOne.text}
                    optionTwo={questions[question_id].optionTwo.text}
                    changeAnswerStateHandler={changeAnswerStateHandler}
                    authedUser = {authedUser}
            ></UnAnsweredQuestion>}
            {answered && questions[question_id] &&
                <AnsweredQuestion
                    optionOne={questions[question_id].optionOne.text}
                    optionTwo={questions[question_id].optionTwo.text}
                    userChoise={userChoise}
                    optionOneVotes={questions[question_id].optionOne.votes.length}
                    optionTwoVotes={questions[question_id].optionTwo.votes.length}
                    totalVotes = {questions[question_id].optionOne.votes.length + questions[question_id].optionTwo.votes.length}
                >

                </AnsweredQuestion>}
        </Fragment>
    )
}
export default QuestionDetail;