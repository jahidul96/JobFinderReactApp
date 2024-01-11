import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";

const JobCard = () => {
    return (
        <Box
            w={{ base: "100%", sm: "43%", md: "30%", lg: "23%" }}
            borderWidth="1px"
            borderColor={AppColors.primary}
            px="15px"
            py="25px"
            borderRadius={5}
        >
            <Box
                w="70px"
                py="4px"
                bg={AppColors.primaryLayerColor}
                mb="10px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                fontFamily={fontFamily}
            >
                <Text fontSize="13px">Part Time</Text>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                py="15px"
            >
                <Image
                    src="/icon.jpg"
                    w="80px"
                    h="80px"
                    borderRadius={5}
                    alt="logo"
                />
            </Box>

            <Box mb="10px" mt="12px">
                <Text fontFamily={fontFamily} fontSize="14px">
                    Billing Support Specialist Job
                </Text>

                <Flex alignItems="center" mt="8px">
                    <CiLocationOn size={17} mt="13px" />
                    <Text
                        ml="5px"
                        color={AppColors.primary}
                        fontFamily={fontFamily}
                        fontSize="13px"
                    >
                        Location
                    </Text>
                </Flex>
            </Box>

            <Flex alignItems="center">
                <FaDollarSign />
                <Text ml="10px" fontFamily={fontFamily} fontSize="12px">
                    20k-30k Taka / Per-Month
                </Text>
            </Flex>
            <Flex alignItems="center" mt="10px">
                <CiClock2 />
                <Text ml="10px" fontFamily={fontFamily} fontSize="11px">
                    1 Month ago
                </Text>
            </Flex>

            <Button
                bg={AppColors.black}
                color={AppColors.white}
                w="100%"
                h="45px"
                mt="25px"
                _hover={{ bg: AppColors.primary, color: AppColors.white }}
            >
                Apply Now
            </Button>
        </Box>
    );
};

export default JobCard;
