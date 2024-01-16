import { Box, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { jsLogo } from "../utils/AppLocalAssetsImports";
import { fontFamily } from "../utils/Font";

const SmallBlogPreviewCard = () => {
    return (
        <Box
            w="100%"
            display="flex"
            alignItems="center"
            bg={AppColors.white}
            py="10px"
            mb="15px"
        >
            <Image
                src={jsLogo}
                w={{
                    base: "60px",
                    sm: "60px",
                    md: "90px",
                    lg: "90px",
                }}
                h={{
                    base: "60px",
                    sm: "60px",
                    md: "80px",
                    lg: "80px",
                }}
                fit="cover"
                borderRadius="10px"
                alt="blog444"
            />

            <Box ml="10px">
                <Text
                    fontSize={{
                        base: "12px",
                        sm: "12px",
                        md: "14px",
                        lg: "14px",
                    }}
                    fontWeight="bold"
                    fontFamily={fontFamily}
                >
                    Deep learning With Js! We Will try to understand
                </Text>
                <Text
                    mt="5px"
                    fontSize={{
                        base: "10px",
                        sm: "10px",
                        md: "12px",
                        lg: "12px",
                    }}
                    fontFamily={fontFamily}
                >
                    20th jan 23
                </Text>
            </Box>
        </Box>
    );
};

export default SmallBlogPreviewCard;
