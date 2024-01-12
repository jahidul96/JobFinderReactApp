import { Box, Input, Select } from "@chakra-ui/react";
import { AppColors } from "../../utils/AppColors";
import { fontFamily } from "../../utils/Font";

export const CandidateSidebarFilterComp = () => {
    return (
        <Box mt="30px" px="10px">
            <Input placeholder="Search by Service" mb="15px" />
            <Select
                placeholder="Select Categories"
                // variant="unstyled"
                bg={AppColors.lightGrey}
                size="lg"
                fontFamily={fontFamily}
                fontSize="15px"
                mb="15px"
            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
            <Select
                placeholder="Select Skill"
                // variant="unstyled"
                bg={AppColors.lightGrey}
                size="lg"
                fontFamily={fontFamily}
                fontSize="15px"
            >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </Select>
        </Box>
    );
};
