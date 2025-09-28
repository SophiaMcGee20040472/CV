import { Box, Text } from "@chakra-ui/react";

const InfoRow = ({ label, value }) => (
  <Box as="li" mb={2} listStyleType="disc" ml="-24px">
    <Text as="span" fontWeight="bold">
      {label}:
    </Text>{" "}
    {value}
  </Box>
);

export default InfoRow;
