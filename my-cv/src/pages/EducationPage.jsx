import { Heading, Text, Badge, SimpleGrid, Box } from "@chakra-ui/react";
import GradientHeading from "../components/ui-components/GradientHeading";
import PageLayout from "../components/pageComponents/PageLayout";
import Card from "../components/ui-components/Card";
import SectionHeading from "../components/pageComponents/SectionHeading";
import ListRenderer from "../components/ui-components/ListRenderer";
import DividerWithSpacing from "../components/pageComponents/DividerWithSpacing";
import { styles } from "../styles/styles";

const EducationPage = ({ educationData }) => {
  const { higherDiploma, bachelor, certifications, synergy } = educationData;

  return (
    <PageLayout>
      <Box mt= {{ base: "-20px", md: "-50px"}}>
        <GradientHeading>Education</GradientHeading>
      </Box>
      <Card>
        <Heading sx={styles.cardHeading}>{higherDiploma.title}</Heading>
        <Text sx={styles.institutionText}>{higherDiploma.institution}</Text>
        <Text sx={styles.durationText}>{higherDiploma.duration}</Text>
        <Badge sx={styles.badge}>{higherDiploma.grade}</Badge>
        <Text sx={styles.descriptionText}>{higherDiploma.description}</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box>
            <Text sx={styles.softwareHeading}>Software Development:</Text>
            <ListRenderer items={higherDiploma.coreLearning?.software} />
          </Box>
          <Box>
            <Text sx={styles.softwareHeading}>Systems & Tools:</Text>
            <ListRenderer items={higherDiploma.coreLearning?.systems} />
          </Box>
        </SimpleGrid>
        <Heading sx={styles.sectionHeading}>Notable Academic Projects</Heading>
        <ListRenderer items={higherDiploma.projects} />
      </Card>
      <DividerWithSpacing />
      <Card>
        <Heading sx={styles.cardHeading}>{bachelor.title}</Heading>
        <Text sx={styles.institutionText}>{bachelor.institution}</Text>
        <Text sx={styles.durationText}>{bachelor.duration}</Text>
        <Badge sx={styles.badge}>{bachelor.grade}</Badge>
        <Text sx={styles.descriptionText} mt="8px">
          {bachelor.description}
        </Text>
        <ListRenderer items={bachelor.skills} />
      </Card>
      <DividerWithSpacing my={10} />
      <Card mt={6}>
        <SectionHeading>Industry Certified Courses</SectionHeading>
        <ListRenderer items={certifications} />
      </Card>
      <Box sx={styles.synergyBox}>
        <Heading as="h3" size="lg" mb={4} color="pink.700">
          The Power of My Dual Background
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {synergy?.map((item, i) => (
            <Box key={i}>
              <Text fontWeight="bold" color="pink.600" mb={2}>
                {item.title}
              </Text>
              <Text>{item.text}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </PageLayout>
  );
};

export default EducationPage;
