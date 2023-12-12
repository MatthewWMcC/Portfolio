import {
  Box,
  Button,
  Divider as ChakraDivider,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface linkButtonProps {
  text: string;
  icon: IconType;
  colorScheme?: string;
  href: string;
  isExternal?: boolean;
  borderColor?: string;
}

const LinkButton: React.FC<linkButtonProps> = ({
  text,
  icon,
  colorScheme = "gray",
  href,
  isExternal = true,
  borderColor,
}) => {
  return (
    <Link href={href} rounded="md" isExternal={isExternal}>
      <Button
        leftIcon={<Icon as={icon} />}
        colorScheme={colorScheme}
        w="100%"
        tabIndex={-1}
        border={borderColor ? "1px solid" : "none"}
        borderColor={borderColor}
      >
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
