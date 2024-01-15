import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { AppColors } from "../../../utils/AppColors";
import { fontFamily } from "../../../utils/Font";
import { blogPageBanner } from "../../../utils/AppLocalAssetsImports";

const profilePic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVsMByfxq2r5vxcDd1PPdyTNe5fRnfuaLwA&usqp=CAU";
const BlogDetailsLeftSidebar = () => {
    return (
        <Box
            w="100%"
            bg={AppColors.white}
            borderRadius="10px"
            px="20px"
            py="30px"
        >
            {/* writer profile name and date */}
            <Flex justifyContent="space-between" alignItems="center" mb="15px">
                <Flex alignItems="center">
                    <Box
                        w="40px"
                        h="40px"
                        borderRadius="50%"
                        borderWidth="1px"
                        borderColor={AppColors.primary}
                    >
                        <Image
                            src={profilePic}
                            alt="person image"
                            w="100%"
                            h="100%"
                            borderRadius="50%"
                            fit="cover"
                        />
                    </Box>

                    <Text ml="15px" fontFamily={fontFamily} fontWeight="bold">
                        Darek
                    </Text>
                </Flex>
                <Text
                    ml="5px"
                    fontFamily={fontFamily}
                    color={AppColors.black}
                    fontSize="14px"
                >
                    20th jan 23
                </Text>
            </Flex>

            <Divider />
            {/* blog image */}
            <Image
                src={blogPageBanner}
                alt="person image"
                w="100%"
                h="500px"
                borderRadius="10px"
                fit="cover"
                mt="30px"
            />

            <Text
                fontSize="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
                my="20px"
                lineHeight="30px"
            >
                Deep learning With Js! We Will try to understand from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin
                professor
            </Text>

            <Text fontSize="14px" fontFamily={fontFamily} lineHeight="25px">
                Where does it come from? Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32.
            </Text>

            <Text
                fontSize="20px"
                fontWeight="bold"
                fontFamily={fontFamily}
                my="20px"
            >
                Deep learning With Js! We Will.
            </Text>

            <Text fontSize="14px" fontFamily={fontFamily} lineHeight="25px">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32.
            </Text>
        </Box>
    );
};

export default BlogDetailsLeftSidebar;
