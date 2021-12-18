import { Fragment } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import UserCard from './UserCard'
const LeaderBoredUsers = props => {
    const users = Object.values(useSelector(state => state.users));
    const content = users.sort((a, b) => parseFloat(Object.keys(b.answers).length + b.questions.length) - parseFloat(Object.keys(a.answers).length + a.questions.length))
        .map(user => {
        return (
            <UserCard
                className='mx-4 col-lg-3 col-md-6 col-sm-12 py-2'
                key={user.id}
                Title={user.name}
                imgUrl={user.avatarURL}
                numAnswered={Object.keys(user.answers).length}
                numCreated={user.questions.length}
                total= {Object.keys(user.answers).length + user.questions.length}
            >

            </UserCard>
        )
    })
    console.log(content);
    return (
        <Fragment>
            <Row className='g-5 justify-content-center' >
                {content}
            </Row>
        </Fragment>
    )
}
export default LeaderBoredUsers;