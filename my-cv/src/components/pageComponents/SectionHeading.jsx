import { Heading } from "@chakra-ui/react";

const SectionHeading = ({ children, ...props }) => (
  <Heading as="h2" mt='-24px' ml="-24px" size="md" mb="8px" color="pink.600" {...props}>
    {children}
  </Heading>
);

export default SectionHeading;
