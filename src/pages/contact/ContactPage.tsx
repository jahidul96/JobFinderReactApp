import {
    Box,
    Button,
    Divider,
    Flex,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
import CommonStyleBanner from "../../components/CommonStyleBanner";
import { blogPageBanner } from "../../utils/AppLocalAssetsImports";
import { fontFamily } from "../../utils/Font";
import { AppColors } from "../../utils/AppColors";

const ContactPage = () => {
    return (
        <Box w="100%">
            {/* banner */}
            <CommonStyleBanner title="Contact Us" bannerImg={blogPageBanner} />

            {/* two row contact form!! */}
            <Box
                w="100%"
                display="flex"
                flexDirection={{
                    base: "column",
                    sm: "column",
                    md: "column",
                    lg: "row",
                }}
                px="10px"
                py="50px"
            >
                {/* left side form box */}
                <Box
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    pr={{ base: "0px", sm: "0px", md: "0px", lg: "10px" }}
                >
                    <Text
                        fontFamily={fontFamily}
                        fontWeight="bold"
                        fontSize="30px"
                    >
                        Reach To Us!.
                    </Text>
                    <Text fontFamily={fontFamily} fontSize="15px">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio sint, error odit, ipsa fugit eius corrupti officia
                        ea eos unde totam ipsam sed.
                    </Text>

                    <Box mt="20px">
                        <Input placeholder="Enter Your Name" />
                        <Input placeholder="Enter Your Email" my="15px" />
                        <Input placeholder="Mobile" />
                        <Input placeholder="Subject" my="15px" />
                        <Textarea placeholder="Add Your Message" />
                        <Button
                            bg={AppColors.black}
                            color={AppColors.white}
                            mt="15px"
                            w="100%"
                            _hover={{
                                bg: AppColors.primary,
                            }}
                        >
                            Send
                        </Button>
                    </Box>
                </Box>
                <Box
                    w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
                    mt="50px"
                    pl={{ base: "0px", sm: "0px", md: "0px", lg: "20px" }}
                >
                    <AddressComp
                        title="Address"
                        infoOne="123 London, England."
                        infoTwo="256 Dhaka, Bangladesh."
                        borderColor={AppColors.primary}
                    />
                    <AddressComp
                        title="Phones"
                        infoOne="+88-018-59892596"
                        infoTwo="+88-018-81383269"
                        borderColor={"red"}
                    />
                    <AddressComp
                        title="Emails"
                        infoOne="jahidul59895@gmail.com"
                        infoTwo="jahidul59895@gmail.com"
                        borderColor={AppColors.black}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default ContactPage;

interface addresCompInterface {
    title: string;
    infoOne: string;
    infoTwo: string;
    borderColor: string;
}
const AddressComp = ({
    title,
    infoOne,
    infoTwo,
    borderColor,
}: addresCompInterface) => {
    return (
        <Box
            mb="20px"
            borderLeftWidth="4px"
            borderLeftColor={borderColor}
            pl="20px"
        >
            <Text
                fontFamily={fontFamily}
                fontSize="22px"
                fontWeight="bold"
                mb="5px"
            >
                {title}
            </Text>
            <Text mb="5px" fontSize="15px">
                {infoOne}
            </Text>
            <Text mb="15px" fontSize="15px">
                {infoTwo}
            </Text>

            <Divider color={AppColors.black} />
        </Box>
    );
};
