import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { ArrowBackIcon } from "@chakra-ui/icons";

const breadcrumbNameMap = {
  home: "Home",
  education: "Education",
  skills: "Skills",
  experience: "Experience",
  hobbies: "Hobbies",
  contact: "Contact",
};

function Breadcrumbs() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      mt="60px"
      ml={{ base: 7, md: 6 }}
      mb={{ base: "-30px", md: "-5px" }}
    >
      <Breadcrumb
        spacing="12px"
        separator="›"
        fontWeight="medium"
        color="pink.600"
        fontSize={{ base: "sm", md: "md" }}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={RouterLink} to="/home">
            <Icon as={FaHome} boxSize={4} />
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <BreadcrumbItem key={to} isCurrentPage={isLast}>
              {isLast ? (
                <Box as="span" color="pink.600" fontWeight="semibold">
                  {breadcrumbNameMap[value] || value}
                </Box>
              ) : (
                <BreadcrumbLink as={RouterLink} to={to}>
                  {breadcrumbNameMap[value] || value}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
      {location.pathname !== "/home" && (
        <Button
          size="sm"
          leftIcon={<ArrowBackIcon />}
          colorScheme="pink"
          variant={{ base: "ghost", md: "ghost" }}
          onClick={() => navigate(-1)}
          mr={{ base: "0px", md: 6, lg: 6 }}
        >
          Back
        </Button>
      )}
    </Flex>
  );
}

export default Breadcrumbs;
