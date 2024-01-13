import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";
import { CiLocationOn, CiClock2 } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import {
    companyDetailInterface,
    jobInterface,
} from "../utils/AppReusableInterfaces";

interface jobCardInterface {
    isBgColor?: boolean;
    lessCol?: boolean;
    jobDetails?: jobInterface;
    companyDetails?: companyDetailInterface;
    jobCard: boolean;
}
const JobCard = ({
    isBgColor,
    lessCol,
    jobDetails,
    jobCard,
    companyDetails,
}: jobCardInterface) => {
    return (
        <Box
            w={{
                base: "100%",
                sm: "43%",
                md: "30%",
                lg: lessCol ? "30%" : "23%",
            }}
            borderWidth="1px"
            borderColor={jobCard ? AppColors.primary : AppColors.black}
            px="15px"
            py="25px"
            borderRadius={5}
            bg={isBgColor ? AppColors.white : "transparent"}
        >
            {/* jobType text box */}
            {jobCard ? (
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
                    <Text fontSize="13px">{jobDetails?.jobType}</Text>
                </Box>
            ) : null}
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                py="15px"
            >
                <Image
                    src={
                        jobCard
                            ? jobDetails?.companyLogo
                            : companyDetails?.companyLogo
                    }
                    w="80px"
                    h="80px"
                    borderRadius={5}
                    alt="logo"
                />
            </Box>

            <Box mb="20px" mt="12px">
                <Text
                    fontFamily={fontFamily}
                    fontSize="14px"
                    textAlign="center"
                >
                    {jobCard
                        ? jobDetails?.jobTitle
                        : companyDetails?.companyName}
                </Text>

                <Flex alignItems="center" justifyContent="center" mt="8px">
                    {jobCard ? <CiLocationOn size={17} mt="13px" /> : null}
                    <Text
                        ml="5px"
                        color={AppColors.black}
                        fontFamily={fontFamily}
                        fontSize="13px"
                    >
                        {jobCard
                            ? jobDetails?.jobLocation
                            : companyDetails?.companyQuates}
                    </Text>
                </Flex>
            </Box>

            <Flex alignItems="center">
                {jobCard ? <FaDollarSign /> : <LuUsers />}
                <Text
                    ml="10px"
                    fontFamily={fontFamily}
                    fontSize="12px"
                    color={AppColors.black}
                >
                    {jobCard
                        ? jobDetails?.salary
                        : companyDetails?.totalEmploye}
                </Text>
            </Flex>

            {jobCard ? (
                <Flex alignItems="center" mt="10px">
                    <CiClock2 />
                    <Text
                        ml="10px"
                        fontFamily={fontFamily}
                        fontSize="11px"
                        color={AppColors.black}
                    >
                        {jobDetails?.postTime} ago
                    </Text>
                </Flex>
            ) : (
                <Flex alignItems="center" mt="10px">
                    <CiLocationOn size={17} mt="13px" />
                    <Text
                        ml="10px"
                        fontFamily={fontFamily}
                        fontSize="11px"
                        color={AppColors.black}
                    >
                        {companyDetails?.location}
                    </Text>
                </Flex>
            )}

            <Button
                bg={AppColors.black}
                color={AppColors.white}
                w="100%"
                h="45px"
                mt="25px"
                _hover={{ bg: AppColors.primary, color: AppColors.white }}
            >
                {jobCard ? "Apply Now" : "See Details"}
            </Button>
        </Box>
    );
};

export default JobCard;
