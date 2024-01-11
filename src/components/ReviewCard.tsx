import { Avatar, Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

const ReviewCard = () => {
    return (
        <Card maxW="sm" p="30px">
            <Flex alignItems="center">
                <Avatar
                    w="60px"
                    height="60px"
                    name="userProfilePic"
                    src={"/icon.jpg"}
                    borderWidth={1}
                    borderColor={AppColors.primary}
                />
                <Box ml="10px">
                    <Text fontFamily={fontFamily}>Jahidul Islam</Text>
                    <Text fontSize="12px" fontFamily={fontFamily}>
                        Web developer
                    </Text>
                </Box>
            </Flex>

            <Text mt="15px" fontFamily={fontFamily} fontSize="15px">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt veniam asperiores ut delectus, quo dolore temporibus
                tempore officiis atque magni, assumenda
            </Text>
        </Card>
    );
};

export default ReviewCard;
