import { Box, Divider, Input, Select, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import { JobTypeCheckbox } from "./FindJobSimpleComp";
import { useState } from "react";

const SidebarFindJob = () => {
    const [checkedValue, setCheckedValue] = useState("");

    const [isCheckedFullTime, setIsCheckedFullTime] = useState(false);
    const [isCheckedPartTime, setIsCheckedPartTime] = useState(false);
    const [isCheckedFreelance, setIsCheckedFreelance] = useState(false);
    const [isCheckedRemote, setIsCheckedRemote] = useState(false);
    const [isCheckedContractbase, setIsCheckedContractbase] = useState(false);
    const [isCheckedInternship, setIsCheckedInternship] = useState(false);

    const handleCheckboxChange = (val: string) => {
        if (val == "fulltime") {
            setIsCheckedFullTime(!isCheckedFullTime);
            if (!isCheckedFullTime) {
                console.log("Checkbox is checked");
                // Do something when the checkbox is checked
            } else {
                console.log("Checkbox is unchecked");
                // Do something when the checkbox is unchecked
            }
        } else {
        }
    };

    return (
        <Box
            w={{ base: "100%", sm: "100%", md: "100%", lg: "25%" }}
            bg={AppColors.white}
            borderRadius="10px"
            py="20px"
            h="600px"
        >
            {/* top input section */}
            <Box>
                <Text
                    fontFamily={fontFamily}
                    fontWeight="bold"
                    px="15px"
                    mb="15px"
                    fontSize="15px"
                >
                    Search Filter
                </Text>
                <Divider />

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
                    isChecked={isCheckedFullTime}
                />
                <JobTypeCheckbox
                    value={"Part-Time"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("parttime")
                    }
                    isChecked={isCheckedPartTime}
                />
                <JobTypeCheckbox
                    value={"Contract-base"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("contract")
                    }
                    isChecked={isCheckedContractbase}
                />
                <JobTypeCheckbox
                    value={"Remote"}
                    handleCheckboxChange={() => handleCheckboxChange("remote")}
                    isChecked={isCheckedRemote}
                />
                <JobTypeCheckbox
                    value={"Internship"}
                    handleCheckboxChange={() => handleCheckboxChange("intern")}
                    isChecked={isCheckedInternship}
                />
                <JobTypeCheckbox
                    value={"Freelance"}
                    handleCheckboxChange={() =>
                        handleCheckboxChange("freelance")
                    }
                    isChecked={isCheckedFreelance}
                />
            </Box>
        </Box>
    );
};

export default SidebarFindJob;
