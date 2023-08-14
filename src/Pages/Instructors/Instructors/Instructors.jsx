import Banner from "../Banner/Banner";
import Begineer from "../Begineer/Begineer";
import Reasons from "../Reasons/Reasons";
import Review from "../Review/Review";
import Support from "../Support/Support";
import Today from "../Today/Today";

const Instructors = () => {
    return (
        <div>
            <Banner></Banner>
            <Reasons></Reasons>
            <Begineer></Begineer>
           <Review></Review>
           <Support></Support>
           <Today></Today>
        </div>
    );
};

export default Instructors;