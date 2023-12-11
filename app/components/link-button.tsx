import {
  Box,
  Button,
  Divider as ChakraDivider,
  Icon,
  Link,
} from "@chakra-ui/react";
import { CSSProperties } from "react";
import { IconType } from "react-icons";

interface linkButtonProps {
  text: string;
  icon: IconType;
  colorScheme?: string;
  href: string;
  isExternal?: boolean;
  style?: CSSProperties;
}

const LinkButton: React.FC<linkButtonProps> = ({
  text,
  icon,
  colorScheme = "gray",
  href,
  isExternal = true,
  style,
}) => {
  return (
    <Link href={href} rounded="md" isExternal={isExternal}>
      <Button
        leftIcon={<Icon as={icon} />}
        colorScheme={colorScheme}
        w="100%"
        tabIndex={-1}
        style={style}
      >
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
