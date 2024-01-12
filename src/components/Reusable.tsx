import { Box, Input, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { fontFamily } from "../utils/Font";

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
