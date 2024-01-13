import {
    Box,
    Container,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Spinner,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AppColors } from "../../utils/AppColors";

interface loginInterFace {
    onClick: any;
}
function Login({ onClick }: loginInterFace) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const loginUser = (e: any) => {
        e.preventDefault();
    };

    return (
        <Box
            w={300}
            h={350}
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
                LogIn
            </Text>

            {/* inputs/email/password/name/profile pic etc */}
            <Stack spacing={5}>
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
            </Stack>

            <Button
                colorScheme="teal"
                variant="solid"
                w="100%"
                my={5}
                disabled={loading}
                onClick={loginUser}
            >
                {loading ? <Spinner /> : "Login"}
            </Button>

            <Flex justifyContent="center">
                <Text>Don't Have an Account ? </Text>
                <Button ml={3} variant="link" onClick={onClick}>
                    SignUp!
                </Button>
            </Flex>
        </Box>
    );
}

export default Login;
