import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { fontFamily } from "../../../utils/Font";
import { AppColors } from "../../../utils/AppColors";
import BlogCard from "../../../components/BlogCard";
import { blogDummyData } from "../../../data/blogDummyData";
import { blogInterface } from "../../../utils/AppReusableInterfaces";
import { useNavigate } from "react-router-dom";

const HomeBlogComp = () => {
    const navigate = useNavigate();
    return (
        <Box
            mt="50px"
            w="100%"
            px={{ base: "15px", sm: "20px" }}
            bg={AppColors.white}
            py="50px"
        >
            <Text
                color={AppColors.primary}
                textAlign="center"
                fontWeight="bold"
                fontFamily={fontFamily}
            >
                Blog Section
            </Text>
            <Text
                textAlign="center"
                fontWeight="bold"
                fontSize={{ base: "20px", md: "25px" }}
                mt="10px"
                fontFamily={fontFamily}
            >
                Read Our Blogs
            </Text>

            {/* job card  */}
            <Box mt="30px" w="100%">
                <Flex
                    gap="15px"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                >
                    {blogDummyData.map((item: blogInterface, index: number) => (
                        <BlogCard key={index} blogDetails={item} />
                    ))}
                </Flex>
            </Box>

            {/* browse all button */}
            <Box textAlign="center" mt="25px">
                <Button
                    bg={AppColors.black}
                    color={AppColors.white}
                    _hover={{ bg: AppColors.primary, color: AppColors.white }}
                    onClick={() => navigate("/blogpage")}
                >
                    See All Blogs
                </Button>
            </Box>
        </Box>
    );
};

export default HomeBlogComp;
