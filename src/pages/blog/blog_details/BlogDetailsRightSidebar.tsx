import { Box, Text } from "@chakra-ui/react";
import SmallBlogPreviewCard from "../../../components/SmallBlogPreviewCard";
import { fontFamily } from "../../../utils/Font";

const BlogDetailsRightSidebar = () => {
    return (
        <Box px="20px">
            <Text
                fontSize="23px"
                mb="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
            >
                Latest Post
            </Text>
            <SmallBlogPreviewCard />
            <SmallBlogPreviewCard />
            <SmallBlogPreviewCard />
            <SmallBlogPreviewCard />
        </Box>
    );
};

export default BlogDetailsRightSidebar;
