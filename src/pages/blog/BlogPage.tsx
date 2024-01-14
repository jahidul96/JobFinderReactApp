import { Box, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import BlogCard from "../../components/BlogCard";
import { blogPageBanner } from "../../utils/AppLocalAssetsImports";
import { blogDummyData } from "../../data/blogDummyData";
import { blogInterface } from "../../utils/AppReusableInterfaces";

const blogList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const BlogPage = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Listen From The Best!"
                bannerImg={blogPageBanner}
            />
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
        </Box>
    );
};

export default BlogPage;
