import { Box } from "@chakra-ui/react";
import { Nav } from "../../components/nav/Nav";
import HomeBanner from "../../components/banner/home_banner/HomeBanner";
import HomeCatergoryComp from "./homeComponents/HomeCatergoryComp";
import { AppColors } from "../../utils/AppColors";
import HomeJobComp from "./homeComponents/HomeJobComp";
import OurReviewComp from "./homeComponents/OurReviewComp";
import HomeBlogComp from "./homeComponents/HomeBlogComp";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            {/* topNav */}
            <Nav />

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

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Home;
