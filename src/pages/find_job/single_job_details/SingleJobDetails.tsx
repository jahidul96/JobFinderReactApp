import { Box, Flex, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import CommonStyleBanner from "../../../components/CommonStyleBanner";
import { blogPageBanner } from "../../../utils/AppLocalAssetsImports";
import RowResponsiveComp from "../../../components/RowResponsiveComp";
import CommonBigSidebar from "../../../components/CommonBigSidebar";
import CommonSmallSidebar from "../../../components/CommonSmallSidebar";
import SingleJobLeftSidebar from "./SingleJobLeftSidebar";
import SingleJobRightSidebar from "./SingleJobRightSidebar";
import { fontFamily } from "../../../utils/Font";
import { jobDummyData } from "../../../data/job_dummyData";
import { jobInterface } from "../../../utils/AppReusableInterfaces";
import JobCard from "../../../components/JobCard";
const SingleJobDetails = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Job Details."
                bannerImg={blogPageBanner}
            />

            {/* job details 2 row component */}
            <RowResponsiveComp
                children={
                    <>
                        {/*  left jod details sidebar */}
                        <CommonBigSidebar
                            isLeft
                            children={
                                <>
                                    <SingleJobLeftSidebar />
                                </>
                            }
                        />

                        {/* right job overview sidebar */}
                        <CommonSmallSidebar
                            isSearch={false}
                            height="530px"
                            children={
                                <>
                                    <SingleJobRightSidebar />
                                </>
                            }
                        />
                    </>
                }
            />

            {/* similar jobs */}
            <Text
                fontSize="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
                px="20px"
                pb="20px"
                mt="10px"
            >
                Similar Jobs!.
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

export default SingleJobDetails;
