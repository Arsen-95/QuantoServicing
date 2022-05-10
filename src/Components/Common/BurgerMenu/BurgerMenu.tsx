import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import NavItem from "../Navigation/NavItem";

type MenuProps = {
  menu: boolean;
  setMenu(menu: boolean): void;
};

export const BurgerMenu: React.FC<MenuProps> = ({ menu, setMenu }) => {
  const { t } = useTranslation("navigation");

  return (
    <>
      {menu && (
        <Box
          p="107px 40px"
          pos="fixed"
          zIndex="2"
          top="0"
          left="0"
          w="100%"
          h="100vh"
          opacity={menu ? "1" : "0"}
          visibility={menu ? "visible" : "hidden"}
          bgColor="#23242B"
          transition="all 0.35s"
          transform={menu ? "translateX(0)" : "translateX(100%)"}
          overflowY="scroll"
          display="flex"
          flexDir="column"
        >
          <Box mb={5}>
            <NavItem
              href="/about"
              text={`${t("about")}`}
              fontSize={["26px", "36px"]}
              color="#FFF"
              onClick={() => setMenu(!menu)}
            />
          </Box>
          <Accordion allowToggle mb={5} borderColor="inherit">
            <AccordionItem>
              <Box color="#FFFFFF">
                <AccordionButton px="0px" py={5}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={["26px", "36px"]}
                    lineHeight="43px"
                    letterSpacing="-0.00185615px"
                    color="#FFF"
                    opacity="1"
                  >
                    {`${t("services")}`}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column">
                  <NavItem
                    href="/gti"
                    text={`${t("gtiFull")}`}
                    fontSize={["20px", "28px"]}
                    color="#FFF"
                    onClick={() => setMenu(!menu)}
                  />
                  <NavItem
                    href="/gis"
                    text={`${t("gisFull")}`}
                    fontSize={["20px", "28px"]}
                    color="#FFF"
                    onClick={() => setMenu(!menu)}
                  />
                  <NavItem
                    href="/pvr"
                    text={`${t("pvrFull")}`}
                    fontSize={["20px", "28px"]}
                    color="#FFF"
                    onClick={() => setMenu(!menu)}
                  />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <NavItem
            href="/#partners"
            text={`${t("partners")}`}
            fontSize={["26px", "36px"]}
            color="#FFF"
            onClick={() => setMenu(!menu)}
          />
          <Divider my={5} opacity="1" />
          <NavItem
            onClick={() => setMenu(!menu)}
            href="/#contacts"
            text={`${t("contacts")}`}
            fontSize={["26px", "36px"]}
            color="#FFF"
          />

          <Divider my={5} opacity="1" />
          <NavItem
            href="/news"
            text={`${t("news")}`}
            fontSize={["26px", "36px"]}
            color="#FFF"
            onClick={() => setMenu(!menu)}
          />
        </Box>
      )}
    </>
  );
};
