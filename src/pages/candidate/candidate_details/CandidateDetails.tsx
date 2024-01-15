import { Box, Flex, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import CommonStyleBanner from "../../../components/CommonStyleBanner";
import { candidatePageBanner } from "../../../utils/AppLocalAssetsImports";
import RowResponsiveComp from "../../../components/RowResponsiveComp";
import CommonSmallSidebar from "../../../components/CommonSmallSidebar";
import CommonBigSidebar from "../../../components/CommonBigSidebar";
import CandidateDetailsLeftSidebar from "./CandidateDetailsLeftSidebar";
import CandidateDetailsRightSidebar from "./CandidateDetailsRightSidebar";
import { fontFamily } from "../../../utils/Font";
import { candidateData } from "../../../data/candidateData";
import { candidateDetailInterface } from "../../../utils/AppReusableInterfaces";
import CandidateProfileCard from "../../../components/CandidateProfileCard";

const CandidateDetails = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Candidate Details."
                bannerImg={candidatePageBanner}
            />

            {/* job details 2 row component */}
            <RowResponsiveComp
                children={
                    <>
                        {/* left about me sidebar */}
                        <CommonSmallSidebar
                            isSearch={false}
                            height="560px"
                            children={<CandidateDetailsLeftSidebar />}
                        />

                        {/*  right about me sidebar */}
                        <CommonBigSidebar
                            isLeft={false}
                            children={<CandidateDetailsRightSidebar />}
                        />
                    </>
                }
            />

            {/* similar profiles */}
            <Text
                fontSize="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
                px="20px"
                pb="20px"
            >
                Similar Experienced Profiles!.
            </Text>

            <Box w="100%" pb="15px">
                <Flex
                    gap="15px"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    {candidateData.map(
                        (item: candidateDetailInterface, index: number) => (
                            <CandidateProfileCard
                                key={index}
                                profileDetails={item}
                            />
                        )
                    )}
                </Flex>
            </Box>
        </Box>
    );
};

export default CandidateDetails;
