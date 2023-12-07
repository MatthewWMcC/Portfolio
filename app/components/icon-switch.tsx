import { Flex, Icon, Input, visuallyHiddenStyle } from "@chakra-ui/react";
import { iconSwitchProps } from "../constants/types";
import { useState } from "react";
import { motion } from "framer-motion";

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
          layout
          transition={{ type: "spring", stiffness: 800, damping: 20 }}
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
