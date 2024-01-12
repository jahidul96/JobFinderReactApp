import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { fontFamily } from "../../../utils/Font";
import { AppColors } from "../../../utils/AppColors";
import BlogCard from "../../../components/BlogCard";

const categoryCount = [0, 1, 2, 3, 4, 5];
const HomeBlogComp = () => {
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
                    {categoryCount.map((item: number) => (
                        <BlogCard key={item} />
                    ))}
                </Flex>
            </Box>

            {/* browse all button */}
            <Box textAlign="center" mt="25px">
                <Button
                    bg={AppColors.black}
                    color={AppColors.white}
                    _hover={{ bg: AppColors.primary, color: AppColors.white }}
                >
                    See All Blogs
                </Button>
            </Box>
        </Box>
    );
};

export default HomeBlogComp;
