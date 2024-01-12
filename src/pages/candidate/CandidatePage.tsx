import { Box, Button, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import TwoRowResponsiveComp from "../../components/TwoRowResponsiveComp";
import Sidebar from "../../components/Sidebar";
import CommonRightBigSidebar from "../../components/CommonRightBigSidebar";
import { FoundJobCounterAndSortComp } from "../find_job/FindJobSimpleComp";
import ReviewCard from "../../components/ReviewCard";
import { CandidateSidebarFilterComp } from "./CandidateSimpleComp";

const companyList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CandidatePage = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner title="Find Your Role Fit Candidate" />

            {/* two colum comp(sidebar and company side) */}
            <TwoRowResponsiveComp
                children={
                    <>
                        {/* sidebar */}
                        <Sidebar
                            height="300px"
                            children={<CandidateSidebarFilterComp />}
                        />
                        {/* job side comp */}
                        <CommonRightBigSidebar
                            children={
                                <>
                                    {/* count info comp */}
                                    <FoundJobCounterAndSortComp
                                        infoText="We have found 100 Candidate here!"
                                        children={
                                            <Button>Add Your resume</Button>
                                        }
                                    />
                                    {/* company list */}
                                    <Box mt="30px" w="100%">
                                        <Flex
                                            gap="15px"
                                            flexWrap="wrap"
                                            alignItems="center"
                                            justifyContent="center"
                                        >
                                            {companyList.map((item: number) => (
                                                <ReviewCard key={item} />
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

export default CandidatePage;
