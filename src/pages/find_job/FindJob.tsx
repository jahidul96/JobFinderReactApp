import { Box, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import RowResponsiveComp from "../../components/RowResponsiveComp";
import CommonRightBigSidebar from "../../components/CommonRightBigSidebar";
import { SelectTimingComp } from "./FindJobSimpleComp";
import JobCard from "../../components/JobCard";
import Sidebar from "../../components/Sidebar";
import { FindJobSidebarContent } from "./FindJobSidebarContent";
import { findJobPageBanner } from "../../utils/AppLocalAssetsImports";
import { CounterRowComp } from "../../components/Reusable";
import { jobDummyData } from "../../data/job_dummyData";
import { jobInterface } from "../../utils/AppReusableInterfaces";

const jobList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FindJob = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Find Your Dream Job"
                bannerImg={findJobPageBanner}
            />

            {/* two colum comp(sidebar and job side) */}
            <RowResponsiveComp
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
                                    <CounterRowComp
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
                                            {jobDummyData.map(
                                                (
                                                    item: jobInterface,
                                                    index: number
                                                ) => (
                                                    <JobCard
                                                        key={index}
                                                        isBgColor
                                                        lessCol
                                                        jobDetails={item}
                                                        jobCard
                                                    />
                                                )
                                            )}
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
