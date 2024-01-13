import {
    Box,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import ImagePickingWithPrev from "../../components/ImagePickingWithPreview";
import { AppColors } from "../../utils/AppColors";

interface signupInterFace {
    onClick: any;
}

const SignUp = ({ onClick }: signupInterFace) => {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageUrl, setImageUrl] = useState<string>("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        // const file = e.target.files[0];
        // console.log(file);
        // if (file) {
        //     setImageFile(file);
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //         setImageUrl(reader.result as string);
        //     };
        //     reader.readAsDataURL(file);
        // }
    };

    const signUpUser = (e: any) => {
        e.preventDefault();
    };

    return (
        <Box
            w={300}
            h={450}
            borderColor={"gray.50"}
            borderWidth={1}
            borderRadius={10}
            px={4}
            py={8}
            bg={AppColors.white}
        >
            {/* App logo/name */}
            <Text
                textAlign="center"
                fontSize={20}
                fontWeight="bold"
                textDecoration="underline"
                mb={5}
            >
                Register
            </Text>

            {/* inputs/email/password/name/profile pic etc */}
            <Stack spacing={5}>
                <Input
                    placeholder="Name"
                    size="md"
                    onChange={(e) => setName(e.target?.value)}
                />
                <Input
                    placeholder="Email"
                    size="md"
                    onChange={(e) => setEmail(e.target?.value)}
                />
                <Input
                    placeholder="Password"
                    size="md"
                    onChange={(e) => setPassword(e.target?.value)}
                />

                {/* profile pic take */}
                <ImagePickingWithPrev
                    imageUrl={imageUrl}
                    handleImageChange={handleImageChange}
                />
            </Stack>

            <Button
                colorScheme="teal"
                variant="solid"
                w="100%"
                my={5}
                onClick={signUpUser}
                disabled={loading}
            >
                {loading ? <Spinner /> : "SignUp"}
            </Button>

            <Flex justifyContent="center">
                <Text>Already Have an Account ? </Text>
                <Button ml={3} variant="link" onClick={onClick}>
                    Login!
                </Button>
            </Flex>
        </Box>
    );
};

export default SignUp;
