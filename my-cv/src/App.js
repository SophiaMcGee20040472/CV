import { Flex, Box } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Sidebar from "./components/pageComponents/Sidebar";
import EducationPage from "./pages/EducationPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import HobbiesPage from "./pages/HobbiesPage";
import ContactPage from "./pages/ContactPage";
import Breadcrumbs from "./components/ui-components/Breadcrumb";

import {
  contacts,
  hobbies,
  experienceData,
  educationData,
  skillsData,
} from "./mockdata/MockData";
import HomePage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box flex="1" p={4} ml={{ base: 0, md: "250px", lg: "400px" }}>
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/education"
              element={<EducationPage educationData={educationData} />}
            />
            <Route
              path="/skills"
              element={<SkillsPage skillsData={skillsData} />}
            />
            <Route
              path="/experience"
              element={<ExperiencePage experienceData={experienceData} />}
            />
            <Route
              path="/hobbies"
              element={<HobbiesPage hobbies={hobbies} />}
            />
            <Route
              path="/contact"
              element={<ContactPage contact={contacts} />}
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
