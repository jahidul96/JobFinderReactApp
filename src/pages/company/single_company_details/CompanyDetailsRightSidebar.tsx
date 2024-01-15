import { Box, Text } from "@chakra-ui/react";
import { fontFamily } from "../../../utils/Font";
import { CiCalendarDate, CiBoxes, CiLocationOn } from "react-icons/ci";
import { OverViewIconComp } from "../../../components/Reusable";

const CompanyDetailsRightSidebar = () => {
    return (
        <Box w="100%" px="15px">
            <Text
                fontFamily={fontFamily}
                fontWeight="bold"
                fontSize="20px"
                mb="15px"
            >
                Company Info
            </Text>

            <OverViewIconComp
                infoText="Industry"
                contentText="Software Development"
                icon={<CiCalendarDate size={28} />}
            />

            <OverViewIconComp
                infoText="Company Sizes"
                contentText="50-60"
                icon={<CiBoxes size={28} />}
            />

            <OverViewIconComp
                infoText="Job Location"
                contentText="Chittagong, Bangladesh."
                icon={<CiLocationOn size={28} />}
            />
        </Box>
    );
};

export default CompanyDetailsRightSidebar;
