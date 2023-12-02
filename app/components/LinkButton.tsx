import {
  Box,
  Button,
  Divider as ChakraDivider,
  Icon,
  Link,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface linkButtonProps {
  text: string;
  icon: IconType;
  colorScheme?: string;
  href: string;
}

export default function LinkButton(props: linkButtonProps) {
  const { text, icon, colorScheme = "gray", href } = props;
  return (
    <Link href={href} rounded="md" isExternal>
      <Button
        leftIcon={<Icon as={icon} />}
        colorScheme={colorScheme}
        w="100%"
        tabIndex={-1}
      >
        {text}
      </Button>
    </Link>
  );
}
