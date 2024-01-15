import { Box, Flex, Text } from "@chakra-ui/react";
import CommonStyleBanner from "../../../components/CommonStyleBanner";
import { blogPageBanner } from "../../../utils/AppLocalAssetsImports";
import { AppColors } from "../../../utils/AppColors";
import RowResponsiveComp from "../../../components/RowResponsiveComp";
import CommonSmallSidebar from "../../../components/CommonSmallSidebar";
import CommonBigSidebar from "../../../components/CommonBigSidebar";
import { fontFamily } from "../../../utils/Font";
import { blogDummyData } from "../../../data/blogDummyData";
import { blogInterface } from "../../../utils/AppReusableInterfaces";
import BlogCard from "../../../components/BlogCard";
import BlogDetailsLeftSidebar from "./BlogDetailsLeftSidebar";
import BlogDetailsRightSidebar from "./BlogDetailsRightSidebar";

const BlogDetails = () => {
    return (
        <Box w="100%" bg={AppColors.bgColor}>
            <CommonStyleBanner
                title="Blog Details Page"
                bannerImg={blogPageBanner}
            />

            {/* job details 2 row component */}
            <RowResponsiveComp
                children={
                    <>
                        {/* left blog details sidebar */}
                        <CommonBigSidebar
                            isLeft
                            children={<BlogDetailsLeftSidebar />}
                        />

                        {/*  right latest blog section */}

                        <CommonSmallSidebar
                            isSearch={false}
                            height="600px"
                            children={<BlogDetailsRightSidebar />}
                        />
                    </>
                }
            />

            {/* similar profiles */}
            <Text
                fontSize="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
                px="20px"
                pb="20px"
            >
                More Blog!.
            </Text>

            <Box w="100%" pb="15px">
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

export default BlogDetails;
