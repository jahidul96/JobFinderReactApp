import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import CategoriesCard from "./CategoriesCard";

const categoryCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HomeCatergoryComp = () => {
    return (
        <Box mt="50px" w="100%" px={{ base: "15px", sm: "20px" }}>
            <Text
                color={AppColors.primary}
                textAlign="center"
                fontWeight="bold"
                fontFamily={fontFamily}
            >
                Popular Categories
            </Text>
            <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "25px" }}
                mt="10px"
                fontFamily={fontFamily}
            >
                Browse Top Categories
            </Text>

            {/* categories card  */}
            <Box mt="30px" w="100%">
                <Flex
                    gap="15px"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    {categoryCount.map((item: number) => (
                        <CategoriesCard key={item} />
                    ))}
                </Flex>
            </Box>

            {/* browse all button */}
            <Box textAlign="center" mt="25px">
                <Button
                    bg={AppColors.black}
                    color={AppColors.white}
                    _hover={{ bg: AppColors.primary, color: AppColors.white }}
                >
                    Browse All Category
                </Button>
            </Box>
        </Box>
    );
};

export default HomeCatergoryComp;
