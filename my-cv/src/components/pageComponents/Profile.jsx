import {
  Box,
  Text,
  Image,
  Flex,
  Stack,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import Me1 from "../../assets/me1.jpg";
import { softSkillsData } from "../../mockdata/MockData";
import { styles } from "../../styles/styles";

const timelineData = [
  {
    title: "About Me",
    content:
      "I’m a frontend developer and visual designer with a passion for creating performant, accessible, and visually engaging web applications. My dual background allows me to bridge the gap between technical precision and creative design, ensuring that every project I work on is both functional and beautiful. I thrive in collaborative environments and love turning complex problems into simple, intuitive solutions.",
  },
];

const Profile = () => {
  return (
    <Box sx={styles.containerBox}>
      <Flex sx={styles.heroWrapper} direction={{ base: "column", md: "row" }}>
        <Box sx={styles.sectionCard}>
          <Image src={Me1} alt="Sophia McGee" sx={styles.ImageStyle} />
        </Box>
        <Box
          maxW="700px"
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 6, md: 0 }}
        >
          <Text sx={styles.headline}>Hi, I’m Sophia!</Text>
          <Text sx={styles.subHeadline}>
            Frontend Developer • Designer • UX Enthusiast
          </Text>
          <Text sx={styles.tagline}>
            Crafting clean, accessible, and visually engaging web experiences.
          </Text>
        </Box>
      </Flex>
      <Divider my={10} borderColor="pink.200" />
      <Box px={{ base: 4, md: 12 }} mb={{ base: 16, md: 24 }}>
        <Stack spacing={6}>
          {timelineData.map((item, index) => (
            <Box key={index} sx={styles.sectionCard}>
              <Text fontSize="xl" fontWeight="bold" color="pink.600" mb={3}>
                {item.title}
              </Text>
              <Text color="gray.700" lineHeight="1.7">
                {item.content}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box px={{ base: 4, md: 12 }} mb={{ base: 16, md: 24 }}>
        <Text sx={styles.skillsTitle}>Soft Skills</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {softSkillsData.map((skill, index) => (
            <Box key={index} sx={styles.skillCard}>
              <Text fontWeight="medium" color="gray.700" fontSize="lg">
                {skill.name}
              </Text>
              <Text fontSize="sm" color="gray.500" mt={2}>
                {skill.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Profile;
