import { Box, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

interface commonStyleBannerInterface {
    title: string;
}
export const CommonStyleBanner = ({ title }: commonStyleBannerInterface) => {
    return (
        <Box className="bgFindJobBanner">
            <Text
                color={AppColors.white}
                fontFamily={fontFamily}
                textAlign="center"
                fontSize={{
                    base: "18px",
                    sm: "30px",
                    md: "45px",
                    lg: "45px",
                    xl: "60px",
                }}
                fontWeight="bold"
            >
                {title}
            </Text>
        </Box>
    );
};

export default CommonStyleBanner;
