import { Box, Divider, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

interface pageInterface {
    height: string;
    children: any;
    isSearch?: boolean;
}
const CommonSmallSidebar = ({
    height,
    children,
    isSearch = true,
}: pageInterface) => {
    return (
        <Box
            w={{
                base: "100%",
                sm: "100%",
                md: "100%",
                lg: isSearch ? "25%" : "30%",
            }}
            bg={AppColors.white}
            borderRadius="10px"
            py="20px"
            h={height}
        >
            {/* top input section */}
            {isSearch ? (
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
            ) : null}

            {children}
        </Box>
    );
};

export default CommonSmallSidebar;
