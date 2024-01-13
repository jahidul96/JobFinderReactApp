import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
    Text,
} from "@chakra-ui/react";
import { AppColors } from "../utils/AppColors";
import { fontFamily } from "../utils/Font";

const BlogCard = () => {
    return (
        <Card
            maxW="sm"
            _hover={{
                borderWidth: "1px",
                borderColor: AppColors.primary,
            }}
        >
            <CardBody>
                <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Stack mt="6">
                    <Text color={AppColors.black}>15th jan 2023</Text>
                    <Heading size="md" fontFamily={fontFamily}>
                        Blog Title!
                    </Heading>
                    <Text fontFamily={fontFamily}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident veritatis inventore, minima autem quae
                        praesentium doloremque rerum, debitis quisquam amet
                        sapiente ex vitae aliquam voluptatibus deserunt illo
                        recusandae hic? Deleniti!
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
                >
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;
