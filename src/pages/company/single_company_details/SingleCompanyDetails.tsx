import { Box, Flex, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import CommonStyleBanner from "../../../components/CommonStyleBanner";
import { companyPageBanner } from "../../../utils/AppLocalAssetsImports";
import RowResponsiveComp from "../../../components/RowResponsiveComp";
import CommonBigSidebar from "../../../components/CommonBigSidebar";
import CommonSmallSidebar from "../../../components/CommonSmallSidebar";
import CompanyDetailsLeftSidebar from "./CompanyDetailsLeftSidebar";
import { fontFamily } from "../../../utils/Font";
import { jobDummyData } from "../../../data/job_dummyData";
import { jobInterface } from "../../../utils/AppReusableInterfaces";
import JobCard from "../../../components/JobCard";
import CompanyDetailsRightSidebar from "./CompanyDetailsRightSidebar";

const SingleCompanyDetails = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Company Details."
                bannerImg={companyPageBanner}
            />

            {/* job details 2 row component */}
            <RowResponsiveComp
                children={
                    <>
                        {/*  left jod details sidebar */}
                        <CommonBigSidebar
                            isLeft
                            children={<CompanyDetailsLeftSidebar />}
                        />

                        {/* right job overview sidebar */}
                        <CommonSmallSidebar
                            isSearch={false}
                            height="320px"
                            children={<CompanyDetailsRightSidebar />}
                        />
                    </>
                }
            />

            {/* this company jobs */}
            <Text
                fontSize="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
                px="20px"
                pb="20px"
            >
                Open Jobs!.
            </Text>

            <Box w="100%" pb="15px">
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
                            lessCol={false}
                            jobDetails={item}
                            jobCard
                        />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default SingleCompanyDetails;
