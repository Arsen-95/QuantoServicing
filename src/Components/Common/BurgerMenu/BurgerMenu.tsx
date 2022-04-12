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
import NavItem from "../Navigation/NavItem";

type MenuProps = {
  menu: boolean;
  setMenu(menu: boolean): void;
};

export const BurgerMenu: FC<MenuProps> = ({ menu, setMenu }) => {
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
              fontSize={["26px", "36px"]}
              color="#FFF"
              uppercase={false}
            />
          </Box>
          <Accordion allowToggle mb={5}>
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
                  >
                    Услуги
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Box>
              <AccordionPanel pb={4}>
                <Flex flexDirection="column">
                  <NavItem
                    href="/gti"
                    text="Геолого-технологические исследования"
                    fontSize={["22px", "28px"]}
                    color="#FFF"
                    uppercase={false}
                  />
                  <NavItem
                    href="/gis"
                    text="Геофизические исследования скважин"
                    fontSize={["22px", "28px"]}
                    color="#FFF"
                    uppercase={false}
                  />
                  <NavItem
                    href="/pvr"
                    text="Прострелочно-взрывные работы"
                    fontSize={["22px", "28px"]}
                    color="#FFF"
                    uppercase={false}
                  />
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <NavItem
            href="/#partners"
            text="Партнеры"
            fontSize={["26px", "36px"]}
            color="#FFF"
            onClick={() => setMenu(!menu)}
            uppercase={false}
          />
          <Divider my={5} />
          <NavItem
            onClick={() => setMenu(!menu)}
            href="/#contacts"
            text="Контакты"
            fontSize={["26px", "36px"]}
            color="#FFF"
            uppercase={false}
          />

          <Divider my={5} />
          <NavItem
            href="/news"
            text="Новости"
            fontSize={["26px", "36px"]}
            color="#FFF"
            uppercase={false}
          />
          <Divider my={5} />
          <NavItem
            href="/documents"
            text="Документация"
            fontSize={["26px", "36px"]}
            color="#FFF"
            uppercase={false}
          />
        </Box>
      )}
    </>
  );
};
