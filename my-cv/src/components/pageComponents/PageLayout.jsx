import { Box } from "@chakra-ui/react";

const PageLayout = ({ children }) => (
  <Box p={6} maxW="1000px" mx="auto">
    {children}
  </Box>
);

export default PageLayout;
