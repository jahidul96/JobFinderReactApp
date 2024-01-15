import {
    Box,
    Button,
    Card,
    Flex,
    Image,
    Input,
    Link,
    Spacer,
    Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { fontFamily } from "../utils/Font";
import { AppColors } from "../utils/AppColors";

interface linkTextInterface {
    to: string;
    fontSize: number;
    text: string;
    mr?: any;
    mx?: any;
    fontWeight?: string;
    height?: string;
    onClick?: any;
}
export const LinkText = ({
    fontSize,
    text,
    to,
    fontWeight = "normal",
    mx,
    mr,
    height,
    onClick,
}: linkTextInterface) => {
    return (
        <Link
            to={to}
            as={RouterLink}
            cursor="pointer"
            _hover={{
                textDecoration: "none",
            }}
            onClick={onClick ? onClick : () => {}}
        >
            <Text
                fontSize={fontSize}
                fontWeight={fontWeight}
                mx={mx}
                mr={mr}
                fontFamily={fontFamily}
                height={height}
            >
                {text}
            </Text>
        </Link>
    );
};

interface iconInputInterface {
    icon: any;
    placeholderText: string;
    setValue: any;
}
export const IconInput = ({
    icon,
    placeholderText,
    setValue,
}: iconInputInterface) => {
    return (
        <Box display="flex" alignItems="center" w="100%" h="50px" px="10px">
            {icon}
            <Input
                placeholder={placeholderText}
                onChange={(e) => setValue(e.target.value)}
                ml="10px"
                variant="unstyled"
            />
        </Box>
    );
};

interface pageInterface {
    infoText: string;
    children: any;
}

export const CounterRowComp = ({ children, infoText }: pageInterface) => {
    return (
        <Flex
            bg={AppColors.white}
            px="15px"
            borderRadius="5px"
            py="10px"
            justifyContent="space-between"
            alignItems="center"
        >
            <Text fontFamily={fontFamily} fontWeight="bold" fontSize="14px">
                {infoText}
            </Text>
            <Spacer />

            {children}
        </Flex>
    );
};

interface sikllBoxInterface {
    skillText: string;
}
export const SkillBox = ({ skillText }: sikllBoxInterface) => (
    <Box
        px="8px"
        py="2px"
        borderColor={AppColors.lightGrey}
        borderWidth="1px"
        mb="6px"
        mr="7px"
    >
        <Text fontFamily={fontFamily} color={AppColors.black} fontSize="11px">
            {skillText}
        </Text>
    </Box>
);

interface CnLInterface {
    logo: string;
    name: string;
    bioText: string;
    isJobCard?: boolean;
}
export const CompanyNameAndLogoComp = ({
    bioText,
    logo,
    name,
    isJobCard = true,
}: CnLInterface) => {
    return (
        <Card w="100%" py="30px" px="20px">
            <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center">
                    <Image src={logo} w="80px" h="80px" alt="image" mr="20px" />

                    <Box>
                        <Text
                            fontFamily={fontFamily}
                            fontWeight="bold"
                            fontSize="18px"
                        >
                            {name}
                        </Text>
                        <Text
                            fontFamily={fontFamily}
                            fontSize="14px"
                            color={AppColors.black}
                        >
                            {bioText}
                        </Text>
                    </Box>
                </Flex>

                {isJobCard ? (
                    <Button
                        bg={AppColors.primary}
                        color={AppColors.white}
                        _hover={{ bg: AppColors.black, color: AppColors.white }}
                        // onClick={() => navigate("/findjob")}
                    >
                        Apply Now
                    </Button>
                ) : null}
            </Flex>
        </Card>
    );
};

interface overviewIconCompInterface {
    icon: any;
    infoText: string;
    contentText: string;
}

export const OverViewIconComp = ({
    contentText,
    icon,
    infoText,
}: overviewIconCompInterface) => {
    return (
        <Flex alignItems="center" mb="15px" py="5px">
            <SocialIconBox icon={icon} />
            <Box ml="15px">
                <Text
                    fontFamily={fontFamily}
                    fontSize="15px"
                    mb="3px"
                    fontWeight="400"
                >
                    {infoText}
                </Text>
                <Text
                    fontFamily={fontFamily}
                    fontSize="11px"
                    color={AppColors.black}
                >
                    {contentText}
                </Text>
            </Box>
        </Flex>
    );
};

interface socialBoxInterface {
    icon: any;
    mx?: string;
}

export const SocialIconBox = ({ icon, mx }: socialBoxInterface) => (
    <Box
        w="50px"
        h="50px"
        mx={mx}
        borderRadius="5px"
        bg={AppColors.primaryLayerColor}
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
    >
        {icon}
    </Box>
);
