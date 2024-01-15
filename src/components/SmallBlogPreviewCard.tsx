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
                w="90px"
                h="80px"
                fit="cover"
                borderRadius="10px"
                alt="blog444"
            />

            <Box ml="10px">
                <Text fontSize="14px" fontWeight="bold" fontFamily={fontFamily}>
                    Deep learning With Js! We Will try to understand
                </Text>
                <Text mt="5px" fontSize="12px" fontFamily={fontFamily}>
                    20th jan 23
                </Text>
            </Box>
        </Box>
    );
};

export default SmallBlogPreviewCard;
