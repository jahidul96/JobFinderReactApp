import { Box, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import TwoRowResponsiveComp from "../../components/TwoRowResponsiveComp";
import CommonRightBigSidebar from "../../components/CommonRightBigSidebar";
import {
    FoundJobCounterAndSortComp,
    SelectTimingComp,
} from "./FindJobSimpleComp";
import JobCard from "../../components/JobCard";
import Sidebar from "../../components/Sidebar";
import { FindJobSidebarContent } from "./FindJobSidebarContent";

const jobList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FindJob = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner title="Find Your Dream Job" />

            {/* two colum comp(sidebar and job side) */}
            <TwoRowResponsiveComp
                children={
                    <>
                        {/* sidebar */}
                        <Sidebar
                            height="600px"
                            children={<FindJobSidebarContent />}
                        />
                        {/* job side comp */}
                        <CommonRightBigSidebar
                            children={
                                <>
                                    {/* count info comp */}
                                    <FoundJobCounterAndSortComp
                                        infoText="We have 10 job offer!"
                                        children={<SelectTimingComp />}
                                    />
                                    {/* job list */}
                                    <Box mt="30px" w="100%">
                                        <Flex
                                            gap="15px"
                                            flexWrap="wrap"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            {jobList.map((item: number) => (
                                                <JobCard
                                                    key={item}
                                                    isBgColor
                                                    lessCol
                                                />
                                            ))}
                                        </Flex>
                                    </Box>
                                </>
                            }
                        />
                    </>
                }
            />
        </Box>
    );
};

export default FindJob;
