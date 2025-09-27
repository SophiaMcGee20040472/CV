import { Box, useColorModeValue } from "@chakra-ui/react";

const Card = ({ children, ...props }) => {
  const cardBgColor = useColorModeValue("white", "gray.700");

  return (
    <Box bg={cardBgColor} p={6} borderRadius="lg" {...props}>
      {children}
    </Box>
  );
};

export default Card;
