import { Card } from "react-bootstrap";
const UserCard = props => {
    return (
        <Card className={props.className} >
            <Card.Img variant="top" src={ props.imgUrl} />
            <Card.Body>
                <Card.Title>Total Score : {props.total} </Card.Title>
                <Card.Text>
                    Answered Questions : {props.numAnswered} <br />
                    or <br />
                    Created Questions : {props.numCreated}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard;