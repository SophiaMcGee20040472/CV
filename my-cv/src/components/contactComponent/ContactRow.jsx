import { Flex, Box, Text, Link } from "@chakra-ui/react";
import { styles } from "../../styles/styles";

const ContactRow = ({ icon, label, value, href, accentColor, hoverColor }) => {
  let finalHref = href;
  let isExternal = false;

  if (label === "Email Address") {
    finalHref = `https://mail.google.com/mail/?view=cm&to=${href.replace(
      "mailto:",
      ""
    )}`;
    isExternal = true;
  } else if (label === "Phone Number") {
    finalHref = href;
    isExternal = false;
  } else {
    finalHref = href;
    isExternal = true;
  }

  return (
    <Flex
      align="flex-end"
      color={accentColor}
      _hover={{ color: hoverColor, transform: "translateX(6px)" }}
    >
      <Box mb='4px'>{icon}</Box>
      <Box textAlign="left" ml={2}>
        <Text fontSize="xs" color="gray.500">
          {label}
        </Text>
        <Link
          sx={styles.LinkStyle}
          href={finalHref}
          isExternal={isExternal}
          color={accentColor}
          _hover={{
            textDecoration: "underline",
            color: hoverColor,
            transform: "translateX(6px)",
          }}
        >
          {value}
        </Link>
      </Box>
    </Flex>
  );
};

export default ContactRow;
