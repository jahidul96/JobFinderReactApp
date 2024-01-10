import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

interface linkTextInterface {
    to: string;
    fontSize: number;
    text: string;
    mr?: any;
    mx?: any;
    fontWeight?: string;
}
export const LinkText = ({
    fontSize,
    text,
    to,
    fontWeight = "normal",
    mx,
    mr,
}: linkTextInterface) => {
    return (
        <Link
            to={to}
            as={RouterLink}
            cursor="pointer"
            _hover={{
                textDecoration: "none",
            }}
            fontSize={fontSize}
            fontWeight={fontWeight}
            mx={mx}
            mr={mr}
        >
            {text}
        </Link>
    );
};
