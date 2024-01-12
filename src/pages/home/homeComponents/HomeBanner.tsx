import { Box, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";

import { useState } from "react";
import HomeBannerInputComp from "./HomeBannerInputComp";

const HomeBanner = () => {
    const [title, setTitle] = useState("");
    return (
        <Box className="bgHomeBanner">
            <Box
                w="100%"
                px={{ base: "20px", sm: "20px", md: "35px", lg: "80px" }}
            >
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
                    px={{ base: "0px", sm: "30px", md: "60px", lg: "160px" }}
                    fontWeight="bold"
                >
                    Find Your Dream Job With Brand Name
                </Text>

                <Text
                    color={AppColors.white}
                    fontFamily={fontFamily}
                    textAlign="center"
                    mt="6px"
                    fontSize={{
                        base: "14px",
                        sm: "16px",
                        md: "20px",
                        lg: "23px",
                    }}
                    px={{ base: "0px", md: "80px", lg: "250px" }}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis quas.
                </Text>

                {/* inputComp  */}
                <HomeBannerInputComp setValue={setTitle} onClick={() => {}} />
            </Box>
        </Box>
    );
};

export default HomeBanner;
