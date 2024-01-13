import { AppColors } from "../../utils/AppColors";
import { Box, Divider, Input, Select, Text } from "@chakra-ui/react";
import { fontFamily } from "../../utils/Font";
import { JobTypeCheckbox } from "./FindJobSimpleComp";

export const FindJobSidebarContent = () => {
    const handleCheckboxChange = (val: string) => {};

    return (
        <Box>
            <Box mt="30px" px="10px">
                <Input placeholder="Title" />
                <Input placeholder="Location" my="15px" />
                <Select
                    placeholder="Select Categories"
                    // variant="unstyled"
                    bg={AppColors.lightGrey}
                    size="lg"
                    fontFamily={fontFamily}
                    fontSize="15px"
                    mb="30px"
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>

                <Divider />
            </Box>

            {/* job type content */}
            <Box mt="30px" px="15px">
                <Text
                    fontFamily={fontFamily}
                    fontWeight="bold"
                    mb="15px"
                    fontSize="15px"
                >
                    Job Type
                </Text>

                {/* checkbox */}
                <JobTypeCheckbox
                    value={"Full-Time"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("fulltime")
                    }
                />
                <JobTypeCheckbox
                    value={"Part-Time"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("parttime")
                    }
                />
                <JobTypeCheckbox
                    value={"Contract-base"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("contract")
                    }
                />
                <JobTypeCheckbox
                    value={"Remote"}
                    handleCheckboxChange={() => handleCheckboxChange("remote")}
                />
                <JobTypeCheckbox
                    value={"Internship"}
                    handleCheckboxChange={() => handleCheckboxChange("intern")}
                />
                <JobTypeCheckbox
                    value={"Freelance"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("freelance")
                    }
                />
            </Box>
        </Box>
    );
};
