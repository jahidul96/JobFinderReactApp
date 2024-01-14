import { Box, Flex } from "@chakra-ui/react";

import { AppColors } from "../../utils/AppColors";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import BlogCard from "../../components/BlogCard";
import { blogPageBanner } from "../../utils/AppLocalAssetsImports";
import { blogDummyData } from "../../data/blogDummyData";
import { blogInterface } from "../../utils/AppReusableInterfaces";

const BlogPage = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Listen From The Best!"
                bannerImg={blogPageBanner}
            />
            <Box w="100%" py="30px">
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
