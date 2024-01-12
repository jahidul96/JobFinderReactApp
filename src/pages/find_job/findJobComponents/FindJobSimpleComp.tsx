import { Box, Checkbox, Flex, Select, Spacer, Text } from "@chakra-ui/react";
import "../../pageCommonStyles.css";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
export const FindJobPageBanner = () => {
    return (
        <Box className="bgFindJobBanner">
            <Text
                color={AppColors.white}
                fontFamily={fontFamily}
                textAlign="center"
                fontSize={{
                    base: "18px",
                    sm: "30px",
                    md: "45px",
                    lg: "45px",
                    xl: "60px",
                }}
                fontWeight="bold"
            >
                Find Your Dream Job
            </Text>
        </Box>
    );
};

export const FoundJobCounterAndSortComp = () => {
    return (
        <Flex
            bg={AppColors.white}
            px="15px"
            borderRadius="5px"
            py="10px"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text>We have found 10 jobs!</Text>
            <Spacer />

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
        </Flex>
    );
};

interface jobTypeCheckboxInterface {
    value: string;
    handleCheckboxChange: any;
    isChecked: boolean;
}
export const JobTypeCheckbox = ({
    value,
    handleCheckboxChange,
    isChecked,
}: jobTypeCheckboxInterface) => {
    return (
        <Box mb="10px">
            <Checkbox
                size="lg"
                isChecked={isChecked}
                value={value}
                onChange={handleCheckboxChange}
            >
                <Text fontFamily={fontFamily} fontSize="15px">
                    {value}
                </Text>
            </Checkbox>
        </Box>
    );
};
