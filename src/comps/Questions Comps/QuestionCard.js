import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const QuestionCard = props => {
    return (
        <Card className={props.className} >
            <Card.Img variant="top" src={ props.imgUrl} />
            <Card.Body>
                <Card.Title>Would you rather </Card.Title>
                <Card.Text>
                    {props.optionOne} <br />
                    or <br />
                    {props.optionTwo}
                </Card.Text>
                <Button variant="primary"> <Link className="text-white btn" to={`/questions/${props.id}`}>view Question</Link> </Button>
            </Card.Body>
        </Card>
    )
}

export default QuestionCard;