import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import CategoriesCard from "../../../components/CategoriesCard";
import { categoryData } from "../../../data/categoryDummyData";
import { catergoryInterface } from "../../../utils/AppReusableInterfaces";
import { useNavigate } from "react-router-dom";

const HomeCatergoryComp = () => {
    const navigate = useNavigate();
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
                    {categoryData.map(
                        (item: catergoryInterface, index: number) => (
                            <CategoriesCard
                                key={index}
                                categorieDetails={item}
                            />
                        )
                    )}
                </Flex>
            </Box>

            {/* browse all button */}
            <Box textAlign="center" mt="25px">
                <Button
                    bg={AppColors.black}
                    color={AppColors.white}
                    _hover={{ bg: AppColors.primary, color: AppColors.white }}
                    onClick={() => navigate("/allcategory")}
                >
                    Browse All Category
                </Button>
            </Box>
        </Box>
    );
};

export default HomeCatergoryComp;
