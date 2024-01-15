import { Box, Text } from "@chakra-ui/react";
import { fontFamily } from "../../../utils/Font";
import {
    CiCalendarDate,
    CiClock2,
    CiBoxes,
    CiLocationOn,
} from "react-icons/ci";
import { RiHourglass2Fill } from "react-icons/ri";
import { FiDollarSign } from "react-icons/fi";
import { OverViewIconComp } from "../../../components/Reusable";

const SingleJobRightSidebar = () => {
    return (
        <Box w="100%" px="15px">
            <Text
                fontFamily={fontFamily}
                fontWeight="bold"
                fontSize="20px"
                mb="15px"
            >
                Job Overview
            </Text>

            <OverViewIconComp
                infoText="Job Posted"
                contentText="20th jan 2023"
                icon={<CiCalendarDate size={28} />}
            />
            <OverViewIconComp
                infoText="Job Types"
                contentText="Full-Time"
                icon={<CiClock2 size={28} />}
            />
            <OverViewIconComp
                infoText="Job Posted"
                contentText="20th jan 2023"
                icon={<CiBoxes size={28} />}
            />
            <OverViewIconComp
                infoText="Hourly-Rate"
                contentText="6-10 dollar/ hour"
                icon={<RiHourglass2Fill size={28} />}
            />
            <OverViewIconComp
                infoText="Salary"
                contentText="20k-30k Tk/ Per Month"
                icon={<FiDollarSign size={28} />}
            />
            <OverViewIconComp
                infoText="Job Location"
                contentText="Chittagong, Bangladesh."
                icon={<CiLocationOn size={28} />}
            />
        </Box>
    );
};

export default SingleJobRightSidebar;
