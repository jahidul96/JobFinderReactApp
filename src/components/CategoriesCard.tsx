import { Box, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";
import { catergoryInterface } from "../utils/AppReusableInterfaces";

interface pageInterface {
    categorieDetails: catergoryInterface;
}
const CategoriesCard = ({ categorieDetails }: pageInterface) => {
    return (
        <Box
            bg={AppColors.white}
            borderRadius="10px"
            px="10px"
            py="30px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width={{ base: "100%", sm: "45%", lg: "30%", xl: "15%" }}
            mb="15px"
            cursor="pointer"
        >
            <Box bg={AppColors.primaryLayerColor} p="12px" borderRadius={10}>
                <Image
                    w="30px"
                    h="30px"
                    fit="cover"
                    src={categorieDetails.icon}
                    alt="iconData"
                />
            </Box>
            <Text fontFamily={fontFamily} fontSize="13px" mt="10px" mb="6px">
                {categorieDetails.jobTitle}
            </Text>
            <Text
                fontFamily={fontFamily}
                fontSize={12}
                color={AppColors.primary}
            >
                {categorieDetails.jobFound} Job
            </Text>
        </Box>
    );
};

export default CategoriesCard;
