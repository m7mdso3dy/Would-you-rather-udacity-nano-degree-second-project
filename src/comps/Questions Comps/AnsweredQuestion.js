import { Fragment } from "react";

const AnsweredQuestion = props => {
    console.log(props.userChoise === props.optionOne)
    return (
        
        <Fragment>
            <h2 className="py-5">Would You Rather</h2>
            <div>
                <p>{props.optionOne}
                {(props.userChoise === props.optionOne) &&
                    <i className="bg-success text-white bi bi-check"></i>

                    }
                </p>
                <p>{props.optionOneVotes} of {props.totalVotes} </p>

            </div>
            <div>
                <p>{props.optionTwo}
                {(props.userChoise === props.optionTwo) &&
                    <i className="bg-success text-white bi bi-check"></i>

                    }
                </p>
                <p>{props.optionTwoVotes} of {props.totalVotes} </p>

            </div>
        </Fragment>
    )
}

export default AnsweredQuestion;