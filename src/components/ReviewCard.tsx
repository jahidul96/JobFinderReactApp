import { Avatar, Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";
import { reviewInterface } from "../utils/AppReusableInterfaces";

interface reviewCardInterface {
    reviewDetails: reviewInterface;
}
const ReviewCard = ({ reviewDetails }: reviewCardInterface) => {
    return (
        <Card maxW="sm" p="30px">
            <Flex alignItems="center">
                <Avatar
                    w="60px"
                    height="60px"
                    name="userProfilePic"
                    src={reviewDetails.profilePic}
                    borderWidth={1}
                    borderColor={AppColors.primary}
                />
                <Box ml="10px">
                    <Text fontFamily={fontFamily}>{reviewDetails.name}</Text>
                    <Text fontSize="12px" fontFamily={fontFamily}>
                        {reviewDetails.position}
                    </Text>
                </Box>
            </Flex>

            <Text mt="15px" fontFamily={fontFamily} fontSize="15px">
                {reviewDetails.reviewText}
            </Text>
        </Card>
    );
};

export default ReviewCard;
