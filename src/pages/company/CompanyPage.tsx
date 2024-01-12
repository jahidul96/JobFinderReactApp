import { Box, Button, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import TwoRowResponsiveComp from "../../components/TwoRowResponsiveComp";
import Sidebar from "../../components/Sidebar";
import CommonRightBigSidebar from "../../components/CommonRightBigSidebar";
import { FoundJobCounterAndSortComp } from "../find_job/FindJobSimpleComp";
import JobCard from "../../components/JobCard";
import { CompanySidebarFilterComp } from "./CompanySimpleComp";

const companyList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const CompanyPage = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner title="Find Your Dream Company" />

            {/* two colum comp(sidebar and company side) */}
            <TwoRowResponsiveComp
                children={
                    <>
                        {/* sidebar */}
                        <Sidebar
                            height="250px"
                            children={<CompanySidebarFilterComp />}
                        />
                        {/* job side comp */}
                        <CommonRightBigSidebar
                            children={
                                <>
                                    {/* count info comp */}
                                    <FoundJobCounterAndSortComp
                                        infoText="We have found 20 Cmpany!"
                                        children={
                                            <Button>Add Your Company</Button>
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

export default CompanyPage;
