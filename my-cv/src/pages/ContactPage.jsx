import { Box, Text, Flex, VStack } from "@chakra-ui/react";
import { FaEarlybirds } from "react-icons/fa";
import { contacts, iconMap } from "../mockdata/MockData";
import GradientHeading from "../components/ui-components/GradientHeading";
import ContactRow from "../components/contactComponent/ContactRow";
import { styles } from "../styles/styles";

const ContactCard = () => {
  const accentColor = "#D53F8C";
  const hoverColor = "gray.700";

  return (
    <Flex sx={styles.FlexStyle} direction="column" align="center">
      <GradientHeading>Contact Details</GradientHeading>
      <Box sx={styles.BoxStyle}>
        <Flex justify="center" mb={4}>
          <FaEarlybirds color={accentColor} style={{ fontSize: "3.5rem" }} />
        </Flex>
        <Text sx={styles.TextStyle} color={accentColor}>
          GET IN TOUCH
        </Text>
        <Text sx={styles.subtitleStyle}>
          Feel free to connect with me directly — I’ll get back to you as soon
          as I can!
        </Text>
        <VStack spacing={6} align="stretch" w="100%">
          {contacts.map((item) => (
            <ContactRow
              key={item.label}
              icon={iconMap[item.icon]}
              label={item.label}
              value={item.value}
              href={item.href}
              accentColor={accentColor}
              hoverColor={hoverColor}
            />
          ))}
        </VStack>
      </Box>
    </Flex>
  );
};

export default ContactCard;
