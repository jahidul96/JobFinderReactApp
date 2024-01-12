import { Box } from "@chakra-ui/react";
import { FindJobPageBanner } from "./findJobComponents/FindJobSimpleComp";
import SidebarFindJob from "./findJobComponents/SidebarFindJob";
import { FoundJobComp } from "./findJobComponents/FoundJobComp";
import { AppColors } from "../../utils/AppColors";

const FindJob = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            {/* FindJobPageBanner */}
            <FindJobPageBanner />

            {/* two colum comp(sidebar and job side) */}
            <Box
                w="100%"
                px="10px"
                display="flex"
                flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                }}
                py="60px"
            >
                {/* sidebar */}
                <SidebarFindJob />

                {/* job side comp */}
                <FoundJobComp />
            </Box>
        </Box>
    );
};

export default FindJob;
