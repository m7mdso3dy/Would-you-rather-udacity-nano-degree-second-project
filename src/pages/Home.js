import { Fragment } from "react";
import {  Tab, Tabs } from "react-bootstrap";
import Answered from "../comps/Questions Comps/Answred";
import UnAnswered from "../comps/Questions Comps/UnAnswered";

const Home = (props) => {
    return (
        <Fragment>
            <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example" className="mb-3">
                <Tab  eventKey="unanswered" title="Unanswered Questions">
                    <UnAnswered></UnAnswered>
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    <Answered></Answered>
                </Tab>
            
        </Tabs>
        </Fragment>
    )
}

export default Home;