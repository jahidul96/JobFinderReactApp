import { Box } from "@chakra-ui/react";

interface twoRowStyleCompInterface {
    children: any;
}

const TwoRowResponsiveComp = ({ children }: twoRowStyleCompInterface) => {
    return (
        <Box
            w="100%"
            px="10px"
            display="flex"
            flexDirection={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
            }}
            py="60px"
        >
            {children}
        </Box>
    );
};

export default TwoRowResponsiveComp;
