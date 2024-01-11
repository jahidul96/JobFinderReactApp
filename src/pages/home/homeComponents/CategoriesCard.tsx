import { Box, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { CiBank } from "react-icons/ci";
import { fontFamily } from "../../../utils/Font";

const CategoriesCard = () => {
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
            width={{ base: "100%", sm: "42%", lg: "30%", xl: "13%" }}
            mb="15px"
            cursor="pointer"
        >
            <Box bg={AppColors.primaryLayerColor} p="12px" borderRadius={10}>
                <CiBank size={30} color={AppColors.primary} />
            </Box>
            <Text fontFamily={fontFamily} mt="10px" mb="6px">
                Bank
            </Text>
            <Text
                fontFamily={fontFamily}
                fontSize={12}
                color={AppColors.primary}
            >
                10 Job
            </Text>
        </Box>
    );
};

export default CategoriesCard;
