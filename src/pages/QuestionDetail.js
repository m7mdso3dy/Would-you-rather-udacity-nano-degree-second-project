import { Fragment, useEffect } from "react"
import UnAnsweredQuestion from "../comps/Questions Comps/UnAnsweredQuestion";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AnsweredQuestion from "../comps/Questions Comps/AnsweredQuestion";

const QuestionDetail = props => {
    const [answered, setAnswered] = useState(null);
    const [userChoise, setUserChoise] = useState('');
    const questions = useSelector(state => state.questions);
    const authedUser = useSelector(state => state.authedUser.authedUser);
    const { questionId } = useParams();
    useEffect(() => {
        if (questions[questionId].optionOne.votes.includes(authedUser)) {
            setAnswered(true);
            setUserChoise(questions[questionId].optionOne.text);
        }
        if (questions[questionId].optionTwo.votes.includes(authedUser)) {
            setAnswered(true);
            setUserChoise(questions[questionId].optionTwo.text);
        }
    }, [answered, userChoise,authedUser,questionId,questions]);
    

    const changeAnswerStateHandler = () => {
        setAnswered(true);
    }
    return (
        <Fragment>
            {!answered && <UnAnsweredQuestion
                id={questionId}
                optionOne={questions[questionId].optionOne.text}
                optionTwo={questions[questionId].optionTwo.text}
                changeAnswerStateHandler={changeAnswerStateHandler}
                authedUser = {authedUser}
            ></UnAnsweredQuestion>}
            {answered && 
                <AnsweredQuestion
                    optionOne={questions[questionId].optionOne.text}
                    optionTwo={questions[questionId].optionTwo.text}
                    userChoise={userChoise}
                    optionOneVotes={questions[questionId].optionOne.votes.length}
                    optionTwoVotes={questions[questionId].optionTwo.votes.length}
                    totalVotes = {questions[questionId].optionOne.votes.length + questions[questionId].optionTwo.votes.length}
                >

                </AnsweredQuestion>
            }
        </Fragment>
    )
}
export default QuestionDetail;