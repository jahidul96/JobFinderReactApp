import { Box } from "@chakra-ui/react";

interface pageInteface {
    children: any;
    isLeft?: boolean;
}
const CommonBigSidebar = ({ children, isLeft = false }: pageInteface) => {
    return (
        <Box
            w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: isLeft ? "70%" : "75%",
            }}
            mt={{ base: "20px", sm: "20px", md: "20px", lg: "0px" }}
            ml={{
                base: "0px",
                sm: "0px",
                md: "0px",
                lg: isLeft ? "0px" : "20px",
            }}
            mr={{
                base: "0px",
                sm: "0px",
                md: "0px",
                lg: isLeft ? "20px" : "0px",
            }}
        >
            {children}
        </Box>
    );
};

export default CommonBigSidebar;
