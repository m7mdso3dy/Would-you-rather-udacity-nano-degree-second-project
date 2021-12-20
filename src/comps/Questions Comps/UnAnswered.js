import { Fragment } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";
const UnAnswered = props => {
    const questions = useSelector(state => state.questions);
    const users = useSelector(state => state.users);
    const authedUser = useSelector(state => state.authedUser);
    const authedUsersAnsweredQuestions = users[authedUser.authedUser].answers;
    const questionsArray = Object.values(questions);
    const content = questionsArray.filter(question => !!authedUsersAnsweredQuestions[question.id] === false ).map(question => {

        const imgUrl = users[question.author].avatarURL
        return (
            <QuestionCard
                className='mx-4 col-lg-3 col-md-6 col-sm-12 py-2'
                key={question.id}
                id={question.id}
                optionOne={question.optionOne.text}
                optionTwo={question.optionTwo.text}
                imgUrl={imgUrl}
            ></QuestionCard>
        )
    });
    return (
        <Fragment>
            <Row className='g-5 justify-content-center' >
                {content}
            </Row>
        </Fragment>
    )
}
export default UnAnswered;