import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { candidateDetailInterface } from "../../../utils/AppReusableInterfaces";
import { fontFamily } from "../../../utils/Font";
import { AppColors } from "../../../utils/AppColors";
import { OverViewIconComp, SkillBox } from "../../../components/Reusable";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
const candidatProfile: candidateDetailInterface = {
    id: "1",
    location: "Chittagong",
    name: "Akash Rahman",
    profilePic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVsMByfxq2r5vxcDd1PPdyTNe5fRnfuaLwA&usqp=CAU",
    skills: ["Html", "Css", "Javascript"],
};
const CandidateDetailsLeftSidebar = () => {
    return (
        <Box w="100%" px="15px" py="20px">
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    alignSelf="center"
                    src={candidatProfile.profilePic}
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
                    {candidatProfile.name}
                </Text>
            </Box>

            <Box mb="30px">
                <Flex
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                    mt="15px"
                >
                    {candidatProfile.skills.map(
                        (skill: string, index: number) => (
                            <SkillBox key={index} skillText={skill} />
                        )
                    )}
                </Flex>
            </Box>
            <Divider />

            <Box mt="15px">
                <OverViewIconComp
                    infoText="Region"
                    contentText="Europe"
                    icon={<CiCalendarDate size={28} />}
                />

                <OverViewIconComp
                    infoText="Location"
                    contentText="Chittagong, Bangladesh."
                    icon={<CiLocationOn size={28} />}
                />
                <OverViewIconComp
                    infoText="Working Rate"
                    contentText="10/ Per Day"
                    icon={<FiDollarSign size={28} />}
                />
            </Box>

            <Button
                bg={AppColors.primary}
                color={AppColors.white}
                w="100%"
                mt="15px"
                _hover={{ bg: AppColors.black, color: AppColors.white }}
                onClick={() => {}}
            >
                Invite For Interview!
            </Button>
        </Box>
    );
};

export default CandidateDetailsLeftSidebar;
