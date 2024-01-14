import { Box, Button, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import RowResponsiveComp from "../../components/RowResponsiveComp";
import Sidebar from "../../components/Sidebar";
import CommonRightBigSidebar from "../../components/CommonRightBigSidebar";
import { CandidateSidebarFilterComp } from "./CandidateSimpleComp";
import { candidatePageBanner } from "../../utils/AppLocalAssetsImports";
import { CounterRowComp } from "../../components/Reusable";
import CandidateProfileCard from "../../components/CandidateProfileCard";
import { candidateData } from "../../data/candidateData";
import { candidateDetailInterface } from "../../utils/AppReusableInterfaces";

const CandidatePage = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Find Your Role Fit Candidate"
                bannerImg={candidatePageBanner}
            />

            {/* two colum comp(sidebar and company side) */}
            <RowResponsiveComp
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
                                    <CounterRowComp
                                        infoText="We have found 100 Candidate here!"
                                        children={
                                            <Button
                                                bg={AppColors.primary}
                                                color={AppColors.white}
                                                _hover={{
                                                    bg: AppColors.black,
                                                }}
                                            >
                                                Add Your resume
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
                                            {candidateData.map(
                                                (
                                                    item: candidateDetailInterface,
                                                    index: number
                                                ) => (
                                                    <CandidateProfileCard
                                                        key={index}
                                                        profileDetails={item}
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

export default CandidatePage;
