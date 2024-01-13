import { Box, Checkbox, Select, Text } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import { fontFamily } from "../../utils/Font";

export const SelectTimingComp = () => {
    return (
        <Select
            w="20%"
            placeholder="Sort By"
            // variant="unstyled"
            bg={AppColors.lightGrey}
            size="md"
            borderColor={AppColors.lightGrey}
            _active={{ borderColor: AppColors.lightGrey }}
        >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </Select>
    );
};

interface jobTypeCheckboxInterface {
    value: string;
    handleCheckboxChange: any;
}
export const JobTypeCheckbox = ({
    value,
    handleCheckboxChange,
}: jobTypeCheckboxInterface) => {
    return (
        <Box mb="10px">
            <Checkbox size="lg" value={value} onChange={handleCheckboxChange}>
                <Text fontFamily={fontFamily} fontSize="15px">
                    {value}
                </Text>
            </Checkbox>
        </Box>
    );
};
