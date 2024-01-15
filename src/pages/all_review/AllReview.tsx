import { Box, Flex } from "@chakra-ui/react";
import { blogPageBanner } from "../../utils/AppLocalAssetsImports";
import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import { reviewData } from "../../data/reviewData";
import { reviewInterface } from "../../utils/AppReusableInterfaces";
import ReviewCard from "../../components/ReviewCard";

const AllReview = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Our Users Valuable Review!."
                bannerImg={blogPageBanner}
            />
            <Box w="100%" py="30px" px="10px">
                <Flex
                    gap="15px"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    {reviewData.map((item: reviewInterface, index: number) => (
                        <ReviewCard key={index} reviewDetails={item} />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default AllReview;
