import { Box } from "@chakra-ui/react";

interface pageInteface {
    children: any;
}
const CommonRightBigSidebar = ({ children }: pageInteface) => {
    return (
        <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
            mt={{ base: "20px", sm: "20px", md: "20px", lg: "0px" }}
            ml={{ base: "0px", sm: "0px", md: "0px", lg: "20px" }}
        >
            {children}
        </Box>
    );
};

export default CommonRightBigSidebar;
