import { Box, Flex } from "@chakra-ui/react";
import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import { categoryData } from "../../data/categoryDummyData";
import { catergoryInterface } from "../../utils/AppReusableInterfaces";
import CategoriesCard from "../../components/CategoriesCard";
import { blogPageBanner } from "../../utils/AppLocalAssetsImports";

export const AllCategory = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="All Job Categories!!!."
                bannerImg={blogPageBanner}
            />
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
        </Box>
    );
};
