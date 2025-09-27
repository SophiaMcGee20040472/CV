import { useState, useRef, useEffect } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import GradientHeading from "../components/ui-components/GradientHeading";
import { styles } from "../styles/styles";

export default function HobbiesGrid({ hobbies }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const cardBgColor = useColorModeValue("white", "gray.700");

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <Box p={6} maxW="1000px" mx="auto" ref={containerRef}>
      <Box mt={{ base: "-20px", md: "-50px" }}>
        <GradientHeading>Hobbies</GradientHeading>
      </Box>
      <Text textAlign="left" mb={8} color="gray.600">
        Click the cards to reveal more insight into my hobbies (These are but a
        few!)
      </Text>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={6}>
        {hobbies.map((hobby, index) => (
          <Box
            key={index}
            bg={cardBgColor}
            sx={styles.CardContainer}
            onClick={() => handleClick(index)}
          >
            {activeIndex === index ? (
              <Box>
                <Text fontWeight="bold" mb={3} color="pink.500">
                  {hobby.title}
                </Text>
                <UnorderedList sx={styles.ListStyle}>
                  {hobby.list
                    .slice()
                    .sort((a, b) => a.length - b.length)
                    .map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                </UnorderedList>
              </Box>
            ) : (
              <Box>
                <Image
                  src={hobby.img}
                  alt={hobby.title}
                  sx={styles.HobbieImageStyle}
                />
                <Text fontWeight="semibold" fontSize="md">
                  {hobby.title}
                </Text>
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
