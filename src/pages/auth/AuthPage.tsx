import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./Register";
import { AppColors } from "../../utils/AppColors";
const AuthPage = () => {
    const [login, setLogin] = useState(true);
    return (
        <Box
            w="100%"
            h="100vh"
            // bgImage={`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${homeBanner})`}
            // bgPosition="center"
            // bgRepeat="no-repeat"
            bg={AppColors.primary}
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            {login ? (
                <Login onClick={() => setLogin(!login)} />
            ) : (
                <SignUp onClick={() => setLogin(!login)} />
            )}
        </Box>
    );
};

export default AuthPage;
