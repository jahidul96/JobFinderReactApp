import { Box, Flex } from "@chakra-ui/react";
import { FoundJobCounterAndSortComp } from "./FindJobSimpleComp";
import JobCard from "../../../components/JobCard";

const jobList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const FoundJobComp = () => {
    return (
        <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "80%" }}
            mt={{ base: "20px", sm: "20px", md: "20px", lg: "0px" }}
            ml={{ base: "0px", sm: "0px", md: "0px", lg: "20px" }}
        >
            {/* count info comp */}
            <FoundJobCounterAndSortComp />

            {/* job list */}
            <Box mt="30px" w="100%">
                <Flex
                    gap="15px"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    {jobList.map((item: number) => (
                        <JobCard key={item} isBgColor lessCol />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
