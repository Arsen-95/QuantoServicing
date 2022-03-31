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
import React, { FC } from "react";
import { Navigation } from "../Navigation";
import NavItem from "../Navigation/NavItem";

type MenuProps = {
  menu: boolean;
  setMenu: any;
};

export const BurgerMenu: FC<MenuProps> = ({ menu, setMenu }) => {
  const closeBurgerMenu = () => {
    setMenu(false);
  };

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
          bgColor="#365164"
          transition="all 0.35s"
          transform={menu ? "translateX(0)" : "translateX(100%)"}
          overflowY="scroll"
          display="flex"
          flexDir="column"
        >
          <Box mb={5}>
            <NavItem
              href="/about"
              text="О компании"
              fontSize="36px"
              onClick={closeBurgerMenu}
            />
          </Box>
          {/* <Divider my={5} /> */}
          <Accordion allowToggle mb={5}>
            <AccordionItem>
              <Box color="#FFFFFF">
                <AccordionButton px="0px" py={5}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize="36px"
                    fontWeight="600"
                    lineHeight="43px"
                    letterSpacing="-0.00185615px"
                  >
                    Услуги
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column">
                  <Box mb={5}>
                    <NavItem
                      href="/gti"
                      text="Геолого-технологические исследования"
                      fontSize="28px"
                    />
                  </Box>
                  <Box mb={5}>
                    <NavItem
                      href="/gis"
                      text="Геофизические исследования скважин"
                      fontSize="28px"
                    />
                  </Box>
                  <Box>
                    <NavItem
                      href="/pvr"
                      text="Прострелочно-взрывные работы"
                      fontSize="28px"
                    />
                  </Box>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* <NavItem
            onClick={closeBurgerMenu}
            href="/services"
            text="Услуги"
            fontSize="36px"
          /> */}
          {/* <Divider my={5} /> */}
          <NavItem
            onClick={closeBurgerMenu}
            href="/#partners"
            text="Партнеры"
            fontSize="36px"
          />
          <Divider my={5} />
          <NavItem
            onClick={closeBurgerMenu}
            href="/#contacts"
            text="Контакты"
            fontSize="36px"
          />
          <Divider my={5} />
          <NavItem href="/news" text="Новости" fontSize="36px" />
          <Divider my={5} />
          <NavItem
            onClick={closeBurgerMenu}
            href="/documents"
            text="Документация"
            fontSize="36px"
          />
        </Box>
      )}
    </>
  );
};
