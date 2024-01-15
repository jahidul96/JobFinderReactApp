import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";
import { blogInterface } from "../utils/AppReusableInterfaces";
import { useNavigate } from "react-router-dom";

interface pageInterface {
    blogDetails: blogInterface;
}
const BlogCard = ({ blogDetails }: pageInterface) => {
    const navigate = useNavigate();
    return (
        <Card
            w={{ base: "90%", sm: "90%", md: "45%", lg: "30%" }}
            _hover={{
                borderWidth: "1px",
                borderColor: AppColors.primary,
            }}
        >
            <CardBody>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Image
                        src={blogDetails.imageUrl}
                        alt="blogImg"
                        borderRadius="lg"
                        h={{
                            base: "100px",
                            sm: "100px",
                            md: "100px",
                            lg: "200px",
                        }}
                        fit="cover"
                    />
                </Box>
                <Stack mt="6">
                    <Text
                        color={AppColors.black}
                        fontSize={{
                            base: "12px",
                            sm: "12px",
                            md: "14px",
                            lg: "14px",
                        }}
                    >
                        {blogDetails.postedDate}
                    </Text>
                    <Text
                        fontSize={{
                            base: "15px",
                            sm: "15px",
                            md: "15px",
                            lg: "18px",
                        }}
                        fontWeight="bold"
                        fontFamily={fontFamily}
                    >
                        {blogDetails.title}
                    </Text>
                    <Text
                        fontFamily={fontFamily}
                        fontSize={{
                            base: "13px",
                            sm: "13px",
                            md: "15px",
                            lg: "15px",
                        }}
                        lineHeight="25px"
                    >
                        {blogDetails.postDetailsText}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button
                    _hover={{
                        color: AppColors.white,
                        bg: AppColors.primary,
                    }}
                    mt={-5}
                    onClick={() => navigate("/blogdetailpage")}
                >
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
