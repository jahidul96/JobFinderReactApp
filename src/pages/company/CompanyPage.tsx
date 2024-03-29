import { Box, Button, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import RowResponsiveComp from "../../components/RowResponsiveComp";
import Sidebar from "../../components/CommonSmallSidebar";
import CommonRightBigSidebar from "../../components/CommonBigSidebar";
import JobCard from "../../components/JobCard";
import { CompanySidebarFilterComp } from "./CompanySimpleComp";
import { companyPageBanner } from "../../utils/AppLocalAssetsImports";
import { CounterRowComp } from "../../components/Reusable";
import { companyDetailInterface } from "../../utils/AppReusableInterfaces";
import { companyDummyData } from "../../data/company_dummyData";

const CompanyPage = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Find Your Dream Company"
                bannerImg={companyPageBanner}
            />

            {/* two colum comp(sidebar and company side) */}
            <RowResponsiveComp
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
                                    <CounterRowComp
                                        infoText="We have found 20 Cmpany!"
                                        children={
                                            <Button
                                                bg={AppColors.primary}
                                                color={AppColors.white}
                                                _hover={{
                                                    bg: AppColors.black,
                                                }}
                                            >
                                                Add Your Company
                                            </Button>
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
                                            {companyDummyData.map(
                                                (
                                                    item: companyDetailInterface,
                                                    index: number
                                                ) => (
                                                    <JobCard
                                                        key={index}
                                                        isBgColor
                                                        lessCol
                                                        companyDetails={item}
                                                        jobCard={false}
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

export default CompanyPage;
