import { Box } from "@chakra-ui/react";
import { Nav } from "../../components/nav/Nav";
import HomeBanner from "../../components/banner/home_banner/HomeBanner";

const Home = () => {
    return (
        <Box w="100%">
            {/* topNav */}
            <Nav />

            {/* banner */}
            <HomeBanner />
        </Box>
    );
};

export default Home;
