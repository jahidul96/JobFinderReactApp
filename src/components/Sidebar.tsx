import { Box, Divider, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

interface pageInterface {
    height: string;
    children: any;
}
const Sidebar = ({ height, children }: pageInterface) => {
    return (
        <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "25%" }}
            bg={AppColors.white}
            borderRadius="10px"
            py="20px"
            h={height}
        >
            {/* top input section */}
            <Box>
                <Text
                    fontFamily={fontFamily}
                    fontWeight="bold"
                    px="15px"
                    mb="15px"
                    fontSize="15px"
                >
                    Search Filter
                </Text>
                <Divider />
            </Box>

            {children}
        </Box>
    );
};

export default Sidebar;
