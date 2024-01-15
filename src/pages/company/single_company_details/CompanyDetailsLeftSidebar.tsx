import { Box, Card, Text } from "@chakra-ui/react";
import { CompanyNameAndLogoComp } from "../../../components/Reusable";
import { statiCompanyLogo } from "../../../utils/AppLocalAssetsImports";
import { fontFamily } from "../../../utils/Font";
import { AppColors } from "../../../utils/AppColors";

const CompanyDetailsLeftSidebar = () => {
    return (
        <Box w="100%" mb="30px">
            <CompanyNameAndLogoComp
                logo={statiCompanyLogo}
                bioText="We do best and deliver quality work!"
                name="Dev Info Tech"
                isJobCard={false}
            />

            {/* company details */}
            <Card w="100%" py="30px" px="20px" mt="30px">
                <Text
                    fontFamily={fontFamily}
                    fontWeight="bold"
                    fontSize="18px"
                    mb="10px"
                >
                    Job Description
                </Text>
                <Text
                    fontFamily={fontFamily}
                    fontSize="15px"
                    color={AppColors.black}
                >
                    As a warehouse operative you’ll receive great benefits and
                    incentives! You can be active around a warehouse or if you
                    would you rather use your organisational skills at a
                    workstation? Either way we have the job for you! You can be
                    a part of a busy and friendly team, working for a highly
                    regarded online retail company with the real opportunity for
                    permanent work.
                </Text>
            </Card>
        </Box>
    );
};

export default CompanyDetailsLeftSidebar;
