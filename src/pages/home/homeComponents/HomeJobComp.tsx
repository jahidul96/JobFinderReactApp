import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import JobCard from "../../../components/JobCard";
import { jobDummyData } from "../../../data/job_dummyData";
import { jobInterface } from "../../../utils/AppReusableInterfaces";

const categoryCount = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const HomeJobComp = () => {
    return (
        <Box
            mt="50px"
            py="80px"
            w="100%"
            // px={{ base: "10px" }}
            bg={AppColors.white}
        >
            <Text
                color={AppColors.primary}
                textAlign="center"
                fontWeight="bold"
                fontFamily={fontFamily}
            >
                Recent Job
            </Text>
            <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "25px" }}
                mt="10px"
                fontFamily={fontFamily}
            >
                Popular Listed jobs
            </Text>

            {/* categories card  */}
            <Box mt="30px" w="100%">
                <Flex
                    gap="15px"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    {jobDummyData.map((item: jobInterface, index: number) => (
                        <JobCard
                            key={index}
                            isBgColor
                            lessCol
                            jobDetails={item}
                            jobCard
                        />
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
                    Browse All Job
                </Button>
            </Box>
        </Box>
    );
};

export default HomeJobComp;
