import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import ReviewCard from "../../../components/ReviewCard";
import { reviewData } from "../../../data/reviewData";
import { reviewInterface } from "../../../utils/AppReusableInterfaces";

const categoryCount = [0, 1, 2];
const OurReviewComp = () => {
    return (
        <Box mt="50px" w="100%" px={{ base: "15px", sm: "20px" }}>
            <Text
                color={AppColors.primary}
                textAlign="center"
                fontWeight="bold"
                fontFamily={fontFamily}
            >
                Review Section
            </Text>
            <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "25px" }}
                mt="10px"
                fontFamily={fontFamily}
            >
                Customer Valuable Reviews
            </Text>

            {/* categories card  */}
            <Box mt="30px" w="100%">
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

            {/* browse all button */}
            <Box textAlign="center" mt="25px">
                <Button
                    bg={AppColors.black}
                    color={AppColors.white}
                    _hover={{ bg: AppColors.primary, color: AppColors.white }}
                >
                    See All Reviews
                </Button>
            </Box>
        </Box>
    );
};

export default OurReviewComp;
