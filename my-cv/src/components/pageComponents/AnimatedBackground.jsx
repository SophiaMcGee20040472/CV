import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { GiBee } from "react-icons/gi";
import { useEffect, useState } from "react";

const flyAcross = keyframes`
  0% {
    transform: translateX(-10%) translateY(0) rotate(0deg);
    opacity: 0;
  }
  10% { opacity: 1; }
  80% {
    transform: translateX(110%) translateY(-10px) rotate(10deg);
    opacity: 1;
  }
  100% { opacity: 0; }
`;

const AnimatedBackground = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 20000);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    visible && (
      <Box
        position="absolute"
        top="0"
        left="0"
        fontSize="100px"
        color="#D53F8C"
        animation={`${flyAcross} 5s linear forwards`}
      >
        <GiBee />
      </Box>
    )
  );
};

export default AnimatedBackground;
