import { Box, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

interface commonStyleBannerInterface {
    title: string;
    bannerImg: string;
}
export const CommonStyleBanner = ({
    title,
    bannerImg,
}: commonStyleBannerInterface) => {
    return (
        <Box
            w="100%"
            h="45vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${bannerImg})`}
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
        >
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
