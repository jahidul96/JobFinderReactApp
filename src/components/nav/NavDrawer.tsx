import {
    Box,
    Drawer,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
} from "@chakra-ui/react";

import { LinkText } from "../Reusable";

interface navDrawerInterface {
    isOpen: any;
    onClose: any;
    ref: any;
}
const NavDrawer = ({ isOpen, onClose, ref }: navDrawerInterface) => {
    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={ref}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />

                <Box mt="50px" px="20px">
                    <LinkText
                        text="Find Job"
                        to="/findjob"
                        fontSize={15}
                        height="35px"
                        onClick={onClose}
                    />
                    <LinkText
                        text="Company"
                        to="/companypage"
                        fontSize={15}
                        height="35px"
                        onClick={onClose}
                    />
                    <LinkText
                        text="Candidate"
                        to="/candidatepage"
                        fontSize={15}
                        height="35px"
                        onClick={onClose}
                    />
                    <LinkText
                        text="Blogs"
                        to="/blogpage"
                        fontSize={15}
                        height="35px"
                        onClick={onClose}
                    />
                    <LinkText
                        text="Contact Us"
                        to="/contactpage"
                        fontSize={15}
                        height="35px"
                        onClick={onClose}
                    />
                    <LinkText
                        text="Signup"
                        to="/auth"
                        fontSize={15}
                        height="35px"
                        onClick={onClose}
                    />
                </Box>
            </DrawerContent>
        </Drawer>
    );
};

export default NavDrawer;
