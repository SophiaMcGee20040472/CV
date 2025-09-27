import AnimatedBackground from "../components/pageComponents/AnimatedBackground";
import { Box, Divider } from "@chakra-ui/react";
import Profile from "../components/pageComponents/Profile";
import { styles } from "../styles/styles";
const HomePage = () => {
  return (
    <Box sx={styles.container}>
      <AnimatedBackground />
      <Profile />
      <Divider my={8} />
    </Box>
  );
};
export default HomePage;
