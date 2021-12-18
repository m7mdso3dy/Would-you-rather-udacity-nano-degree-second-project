import { Card } from "react-bootstrap";
const UserCard = props => {
    return (
        <Card className={props.className} >
            <Card.Img variant="top" src={ props.imgUrl} />
            <Card.Body>
                <Card.Title> {props.Title} </Card.Title>
                <Card.Text>
                    Total Score : {props.total} <br />
                    Answered Questions : {props.numAnswered} <br />
                    Created Questions : {props.numCreated}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard;