import Banana from "../Banana/Banana";
import CategoryLists from "../CategoryLists/CategoryLists";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Banana></Banana>
            <CategoryLists></CategoryLists>
            <FeaturedJobs></FeaturedJobs>
            {/* <h2>This is a home.</h2> */}
        </div>
    );
};

export default Home;