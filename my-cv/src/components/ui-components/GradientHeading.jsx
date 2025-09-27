import { Heading } from "@chakra-ui/react";
import { styles } from "../../styles/styles";

const GradientHeading = ({ children }) => (
  <Heading sx={styles.gradientHeading} as="h1" size="2xl">
    {children}
  </Heading>
);

export default GradientHeading;
