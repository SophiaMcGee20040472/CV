import { Text,Box } from "@chakra-ui/react";
import GradientHeading from "../components/ui-components/GradientHeading";
import PageLayout from "../components/pageComponents/PageLayout";
import Card from "../components/ui-components/Card";
import SectionHeading from "../components/pageComponents/SectionHeading";
import ListRenderer from "../components/ui-components/ListRenderer";
import DividerWithSpacing from "../components/pageComponents/DividerWithSpacing";

const ExperiencePage = ({ experienceData }) => {
  return (
    <PageLayout>
      <Box mt={{ base: "-20px", md: "-50px" }}>
        <GradientHeading>IT/Technology Experience</GradientHeading>
      </Box>
      <Card mb={8}>
        {experienceData.mainRoles.map((role, idx) => (
          <div key={idx}>
            <SectionHeading>
              {role.title} – {role.company}
            </SectionHeading>
            <Text ml="-24px" fontSize="md" color="gray.500" mb={4}>
              {role.period}
            </Text>
            <ListRenderer items={role.responsibilities} />
            {idx < experienceData.mainRoles.length - 1 && (
              <DividerWithSpacing my={8} />
            )}
          </div>
        ))}
      </Card>
    </PageLayout>
  );
};

export default ExperiencePage;
