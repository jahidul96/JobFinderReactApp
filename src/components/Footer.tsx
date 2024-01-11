import { Box, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

const Footer = () => {
    return (
        <Box
            w="100%"
            h="70px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg={AppColors.black}
        >
            <Text color={AppColors.white} fontFamily={fontFamily}>
                © All Right Reserved By JobFinder!!..
            </Text>
        </Box>
    );
};

export default Footer;
