import { Text, SimpleGrid, Box } from "@chakra-ui/react";
import PageLayout from "../components/pageComponents/PageLayout";
import Card from "../components/ui-components/Card";
import SectionHeading from "../components/pageComponents/SectionHeading";
import InfoRow from "../components/skillsComponent/InfoRow";
import DividerWithSpacing from "../components/pageComponents/DividerWithSpacing";
import GradientHeading from "../components/ui-components/GradientHeading";
const SkillsPage = ({ skillsData }) => {
  return (
    <PageLayout>
      <Box mt={{ base: "-20px", md: "-50px" }}>
        <GradientHeading>{skillsData.pageTitle}</GradientHeading>
      </Box>
      <Text mb={8} fontSize="lg" color="gray.600">
        {skillsData.pageDescription}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
        {skillsData.categories?.map((category, index) => (
          <Card key={index}>
            <SectionHeading>{category.title}</SectionHeading>
            {category.items?.map((item, itemIndex) => (
              <InfoRow key={itemIndex} label={item.label} value={item.value} />
            ))}
          </Card>
        ))}
      </SimpleGrid>
      <DividerWithSpacing my={2} />
      <Card mt={6}>
        <SectionHeading>Additional Skills</SectionHeading>
        {skillsData.additionalSkills?.map((skill, index) => (
          <InfoRow key={index} label={skill.label} value={skill.value} />
        ))}
      </Card>
    </PageLayout>
  );
};

export default SkillsPage;
