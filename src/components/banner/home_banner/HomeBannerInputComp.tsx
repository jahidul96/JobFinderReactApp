import { Box, Button } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { IconInput } from "../../Reusable";
import { CiSearch, CiLocationOn } from "react-icons/ci";

interface homeBannerInputCompInterface {
    setValue: any;
    onClick: any;
}

const HomeBannerInputComp = ({
    onClick,
    setValue,
}: homeBannerInputCompInterface) => {
    return (
        <Box
            w="100%"
            bg={AppColors.white}
            borderRadius="10px"
            display={"flex"}
            flexDirection={{ base: "column", md: "row" }}
            mt={"40px"}
        >
            {/* title input box */}
            <SearchBoxChildren
                children={
                    <IconInput
                        icon={<CiSearch color={AppColors.black} size={22} />}
                        placeholderText="Title"
                        setValue={setValue}
                    />
                }
            />

            {/* location input box */}

            <SearchBoxChildren
                children={
                    <IconInput
                        icon={
                            <CiLocationOn color={AppColors.black} size={22} />
                        }
                        placeholderText="Location"
                        setValue={setValue}
                    />
                }
            />

            {/* search button */}
            <Box w={{ base: "100%", md: "20%" }} onClick={onClick}>
                <Button
                    bg={AppColors.primary}
                    color={AppColors.white}
                    borderRadius={0}
                    _hover={{
                        bg: "",
                        color: "",
                    }}
                    w={"100%"}
                    height={{ base: "60px", md: "100%" }}
                >
                    Search
                </Button>
            </Box>
        </Box>
    );
};

export default HomeBannerInputComp;

interface searchBoxChildrenInterface {
    children: any;
}
const SearchBoxChildren = ({ children }: searchBoxChildrenInterface) => {
    return (
        <Box
            w={{ sm: "100%", md: "40%" }}
            py="8px"
            borderRightColor="#ddd"
            borderBottomColor="#ddd"
            borderRightWidth={{ sm: "0px", md: "2px" }}
            borderBottomWidth={{ sm: "1px", md: "0px" }}
            px="8px"
        >
            {children}
        </Box>
    );
};
