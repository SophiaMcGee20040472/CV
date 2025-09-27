import {
  Box,
  Text,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaEarlybirds } from "react-icons/fa";
import { navItems, iconMap } from "../../mockdata/MockData";
import { styles } from "../../styles/styles";

const Sidebar = () => {
  return (
    <Box>
      <Flex {...styles.sidebarContainer} mt={{ base: 0, md: "-50px" }}>
        <Box {...styles.titleSection}>
          <Flex {...styles.mobileTitleFlex}>
            <Box textAlign="left">
              <Text {...styles.mobileTitleText}>SMCGEE</Text>
              <Text {...styles.mobileSubtitleText}>
                DEV & DESIGN
              </Text>
            </Box>
            <FaEarlybirds {...styles.earlybirdsIconMobile} />
          </Flex>
          <Box {...styles.desktopTitleBox}>
            <Flex justify="center" mb={3}>
              <FaEarlybirds {...styles.earlybirdsIconDesktop} />
            </Flex>
            <Text {...styles.desktopTitleText}>SOPHIA MCGEE</Text>
            <Text {...styles.desktopSubtitleText}>
              SOFTWARE DEVELOPER & DESIGNER
            </Text>
          </Box>
        </Box>
        <Box {...styles.desktopNavBox}>
          {navItems.map((item) => (
            <Flex
              key={item.name}
              as={Link}
              href={item.path}
              {...styles.desktopNavLink}
            >
              {iconMap[item.icon]}
              <Text>{item.name}</Text>
            </Flex>
          ))}
        </Box>
        <Box {...styles.mobileMenuBox}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Navigation Menu"
            />
            <MenuList {...styles.menuList}>
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  as={Link}
                  href={item.path}
                  {...styles.menuItem}
                >
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <Box h={{ base: "60px", md: "0" }} w={{ base: "100%", md: "0" }} />
    </Box>
  );
};

export default Sidebar;
