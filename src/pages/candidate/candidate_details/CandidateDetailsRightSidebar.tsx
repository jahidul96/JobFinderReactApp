import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import { MdCheckCircle } from "react-icons/md";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { SocialIconBox } from "../../../components/Reusable";

const CandidateDetailsRightSidebar = () => {
    return (
        <Box
            w="100%"
            py="30px"
            px="20px"
            borderRadius="10px"
            bg={AppColors.white}
        >
            {/* about me */}
            <>
                <Text fontSize="18px" fontFamily={fontFamily} fontWeight="bold">
                    About Me
                </Text>
                <Text fontSize="15px" fontFamily={fontFamily} my="15px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam sed, ut, illo inventore natus earum fugit libero
                    dolorum maiores rem quos! Omnis facere quibusdam rem porro
                    veritatis, molestias dolorum vitae. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Veniam sed, ut, illo
                    inventore natus earum fugit libero dolorum maiores rem quos!
                    Omnis facere quibusdam rem porro veritatis, molestias
                    dolorum vitae. Lorem ipsum dolor maiores rem quos! Omnis
                    facere quibusdam rem porro veritatis, molestias dolorum
                    vitae.
                </Text>
            </>

            {/* Education details */}
            <>
                <Text fontSize="18px" fontFamily={fontFamily} fontWeight="bold">
                    Education
                </Text>

                <List spacing={3} mt="15px">
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Msc in Software Development(Finland)
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Bsc in Software Development(Uk university)
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Diploma in Software Development(Native)
                    </ListItem>
                </List>
            </>
            {/* experience */}
            <>
                <Text
                    fontSize="18px"
                    fontFamily={fontFamily}
                    fontWeight="bold"
                    mt="15px"
                >
                    Experience
                </Text>

                <List spacing={3} mt="15px">
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Working As a Project Manager (Now)
                    </ListItem>
                    <ListItem>
                        <ListIcon as={MdCheckCircle} color="green.500" />
                        Worked as an junior javascript developer in SkyDev Tech
                        for 2 Years.
                    </ListItem>
                </List>
            </>

            {/* social links */}
            <>
                <Text
                    fontSize="18px"
                    fontFamily={fontFamily}
                    fontWeight="bold"
                    mt="15px"
                >
                    Social Links
                </Text>
                <Flex mt="15px">
                    <SocialIconBox icon={<FaFacebook size={25} />} />
                    <SocialIconBox
                        icon={<FaLinkedinIn size={25} />}
                        mx="10px"
                    />
                    <SocialIconBox icon={<MdOutlineMailOutline size={25} />} />
                </Flex>
            </>
        </Box>
    );
};

export default CandidateDetailsRightSidebar;
