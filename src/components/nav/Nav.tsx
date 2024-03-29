import { Button, Flex, Box, useDisclosure } from "@chakra-ui/react";
import { AppColors } from "../../utils/AppColors";
import { useNavigate } from "react-router-dom";
import { LinkText } from "../Reusable";
import { CiMenuFries } from "react-icons/ci";
import { useRef } from "react";
import NavDrawer from "./NavDrawer";
import { fontFamily } from "../../utils/Font";

export const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const navigate = useNavigate();
    return (
        <Flex
            w="100%"
            height={70}
            bg={AppColors.white}
            justifyContent="space-between"
            alignItems="center"
            px={5}
        >
            {/* title/logo */}
            <LinkText text="JobFinder" to="/" fontSize={20} fontWeight="bold" />

            {/* links  */}

            <Box display={{ base: "none", md: "block" }}>
                <Flex alignItems="center">
                    <LinkText text="Find Job" to="/findjob" fontSize={15} />
                    <LinkText
                        text="Company"
                        to="/companypage"
                        fontSize={15}
                        mx={8}
                    />
                    <LinkText
                        text="Candidate"
                        to="/candidatepage"
                        fontSize={15}
                    />
                    <LinkText
                        text="Blogs"
                        to="/blogpage"
                        fontSize={15}
                        mx={8}
                    />
                    <LinkText
                        text="Contact Us"
                        to="/contactpage"
                        fontSize={15}
                    />

                    <Button
                        ml={4}
                        variant="ghost"
                        _hover={{
                            bg: AppColors.black,
                            color: AppColors.white,
                        }}
                        fontFamily={fontFamily}
                        onClick={() => navigate("/auth")}
                    >
                        SignUp
                    </Button>
                </Flex>
            </Box>

            {/* in small screens menu icon */}
            <Box display={{ base: "block", md: "none" }}>
                <CiMenuFries size={20} cursor="pointer" onClick={onOpen} />
            </Box>

            {/* in small menu drawer */}
            <NavDrawer isOpen={isOpen} onClose={onClose} ref={btnRef} />
        </Flex>
    );
};
