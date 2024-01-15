import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { fontFamily } from "../utils/Font";
import { AppColors } from "../utils/AppColors";
import { CiLocationOn } from "react-icons/ci";
import { candidateDetailInterface } from "../utils/AppReusableInterfaces";
import { SkillBox } from "./Reusable";

interface pageInterface {
    profileDetails: candidateDetailInterface;
}
const CandidateProfileCard = ({ profileDetails }: pageInterface) => {
    return (
        <Card
            w={{ base: "100%", sm: "100%", md: "45%", lg: "30%" }}
            py="30px"
            px="20px"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    alignSelf="center"
                    src={profileDetails.profilePic}
                    alt="image"
                    w="80px"
                    h="80px"
                    borderRadius="50%"
                    mb="10px"
                    fit="cover"
                />
                <Text
                    fontFamily={fontFamily}
                    color={AppColors.black}
                    mb="2px"
                    fontSize="14px"
                    textAlign="center"
                >
                    {profileDetails.name}
                </Text>
                <Flex alignItems="center" justifyContent="center">
                    <CiLocationOn />
                    <Text
                        fontFamily={fontFamily}
                        color={AppColors.black}
                        ml="5px"
                        fontSize="13px"
                    >
                        {profileDetails.location}
                    </Text>
                </Flex>
            </Box>

            <Flex
                flexWrap="wrap"
                alignItems="center"
                justifyContent="center"
                mt="15px"
            >
                {profileDetails.skills.map((skill: string, index: number) => (
                    <SkillBox key={index} skillText={skill} />
                ))}
            </Flex>
        </Card>
    );
};

export default CandidateProfileCard;
