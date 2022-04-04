import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";
import NavItem from "./NavItem";
import { ChevronDownIcon } from "@chakra-ui/icons";

type NavProps = {
  lang: boolean;
  flexDir: any;
  color?: any;
};

export const Navigation: FC<NavProps> = ({ lang, flexDir, color }) => {
  const [selectedLang, setSelectedLang]: any = useState("РУС");

  const localStorageLang = (value: string) => {
    localStorage.setItem("lang", value);
    setSelectedLang(value);
  };

  useEffect(() => {
    localStorage.getItem("lang") &&
      setSelectedLang(localStorage.getItem("lang"));
  }, [selectedLang]);

  return (
    <Box as="nav" display="flex" flexDir={flexDir} alignItems="center">
      <Box display={["none", "none", "none", "block"]}>
        <NavItem href="/about" text="О КОМПАНИИ" color={color} />
        <NavItem href="/services" text="УСЛУГИ" color={color} />
        <NavItem href="/#partners" text="ПАРТНЕРЫ" color={color} />
        <NavItem href="/#contacts" text="КОНТАКТЫ" color={color} />
        <NavItem href="/news" text="НОВОСТИ" color={color} />
        <NavItem href="/documents" text="ДОКУМЕНТАЦИЯ" color={color} />
      </Box>
      {lang && (
        <Menu>
          <MenuButton
            as={Button}
            w="75px"
            rightIcon={<ChevronDownIcon />}
            color={color}
            background="transparent"
            fontSize={14}
            _active={{ background: "none" }}
            _hover={{ background: "none" }}
            fontFamily="Museo Sans Cyrl"
            fontWeight="600"
            letterSpacing="-0.00185615px"
          >
            {selectedLang}
          </MenuButton>
          <MenuList minW="100px">
            <MenuItem color="#000" onClick={() => localStorageLang("РУС")}>
              Рус
            </MenuItem>
            <MenuItem color="#000" onClick={() => localStorageLang("УЗ")}>
              УЗ
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
};
