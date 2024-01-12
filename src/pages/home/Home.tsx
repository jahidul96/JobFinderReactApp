import { Box } from "@chakra-ui/react";
import HomeBanner from "./homeComponents/HomeBanner";
import HomeCatergoryComp from "./homeComponents/HomeCatergoryComp";
import { AppColors } from "../../utils/AppColors";
import HomeJobComp from "./homeComponents/HomeJobComp";
import OurReviewComp from "./homeComponents/OurReviewComp";
import HomeBlogComp from "./homeComponents/HomeBlogComp";

const Home = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            {/* banner */}
            <HomeBanner />

            {/* popular category section */}
            <HomeCatergoryComp />

            {/* HomeJobComp */}
            <HomeJobComp />

            {/* our review comp */}
            <OurReviewComp />

            {/* HomeBlogComp */}
            <HomeBlogComp />
        </Box>
    );
};

export default Home;
