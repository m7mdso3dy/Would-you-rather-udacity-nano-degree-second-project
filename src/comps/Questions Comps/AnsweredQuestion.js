import { Fragment } from "react";
import { ProgressBar } from "react-bootstrap";
const AnsweredQuestion = props => {
    console.log(props.userChoise === props.optionOne);
    const optionOneprecentage = ((props.optionOneVotes / props.totalVotes) * 100).toFixed(0);
    const optionTwoprecentage = ((props.optionTwoVotes/props.totalVotes)*100).toFixed(0);
    return (
        
        <Fragment>
            <h2 className="py-5">Would You Rather</h2>
        <div className="row">
            <div className="col-lg-7 my-4">
                <p>{props.optionOne}
                {(props.userChoise === props.optionOne) &&
                    <i className="bg-success text-white bi bi-check"></i>

                    }
                </p>
               <ProgressBar className="my-2" now={optionOneprecentage} label={`${optionOneprecentage}%`} />

                <p>{props.optionOneVotes} of {props.totalVotes}  <span className="mx-5">{optionOneprecentage}%</span> </p>

            </div>
            <div className="col-lg-7 my-4">
                <p>{props.optionTwo}
                {(props.userChoise === props.optionTwo) &&
                    <i className="bg-success mx-4 text-white bi bi-check"></i>

                    }
                    </p>
                <ProgressBar className="my-2" now={optionTwoprecentage} label={`${optionTwoprecentage}%`} />
                <p>{props.optionTwoVotes} of {props.totalVotes}   <span className="mx-5"> {optionTwoprecentage}%</span></p>
                <p>{}</p>

                </div>
        </div>
        </Fragment>
    )
}

export default AnsweredQuestion;