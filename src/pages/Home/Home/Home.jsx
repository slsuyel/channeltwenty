import MiddleAdd from "../../AddsItems/MiddleAdd";
import LiveVideo from "./LiveVideo";
import Trigger from "./Trigger";

const Home = () => {
    return (
        <div>
            <Trigger />
            <LiveVideo />
            <div className="text-center">
                <MiddleAdd />
            </div>
        </div>
    );
};

export default Home;