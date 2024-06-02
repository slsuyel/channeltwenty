import MiddleAdd from "../../AddsItems/MiddleAdd";
// import NewsTrigger from "../../News/NewsTrigger";
import LiveVideo from "./LiveVideo";
// import Trigger from "./Trigger";

const Home = () => {




    return (
        <div>
            {/* <Trigger /> */}
            {/* <NewsTrigger /> */}
            <LiveVideo />

            <div className="text-center">
                <MiddleAdd />
            </div>
        </div>
    );
};

export default Home;