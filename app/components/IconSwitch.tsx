import {
  Box,
  Flex,
  FormLabel,
  Icon,
  Input,
  visuallyHiddenStyle,
} from "@chakra-ui/react";
import { iconSwitchProps } from "../utils/types";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function IconSwitch(props: iconSwitchProps) {
  const { icon, onChange, checked } = props;
  const [focus, setFocus] = useState(false);

  return (
    <>
      <Input
        type="checkbox"
        style={visuallyHiddenStyle}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      ></Input>
      <Flex
        className="switch"
        onClick={onChange}
        w="50px"
        bg={checked ? "blue.500" : "gray.500"}
        display="flex"
        justifyContent={checked ? "flex-end" : "flex-start"}
        borderRadius="full"
        p="2px"
        cursor={"pointer"}
        boxShadow={focus ? "0 0 0 3px rgba(66, 153, 225, 0.6)" : ""}
      >
        <motion.div
          className="handle"
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "12px",
            backgroundColor: checked ? "white" : "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon as={icon} />
        </motion.div>
      </Flex>
    </>
  );
}
