import { Box, Divider, Input, Select } from "@chakra-ui/react";
import { AppColors } from "../../utils/AppColors";
import { fontFamily } from "../../utils/Font";

export const CompanySidebarFilterComp = () => {
    return (
        <Box mt="30px" px="10px">
            <Input placeholder="Location" mb="15px" />
            <Select
                placeholder="Select Categories"
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
