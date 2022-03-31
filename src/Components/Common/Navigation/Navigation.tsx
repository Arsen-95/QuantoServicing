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
import { useRouter } from "next/router";

type NavProps = {
  lang: boolean;
  flexDir: any;
};

export const Navigation: FC<NavProps> = ({ lang, flexDir }) => {
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
        <NavItem href="/about" text="О КОМПАНИИ" />
        <NavItem href="/services" text="УСЛУГИ" />
        <NavItem href="/#partners" text="ПАРТНЕРЫ" />
        <NavItem href="/#contacts" text="КОНТАКТЫ" />
        <NavItem href="/news" text="НОВОСТИ" />
        <NavItem href="/documents" text="ДОКУМЕНТАЦИЯ" />
      </Box>
      {lang && (
        <Menu>
          <MenuButton
            as={Button}
            w="75px"
            rightIcon={<ChevronDownIcon />}
            color="#FFF"
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
            <MenuItem onClick={() => localStorageLang("РУС")}>Рус</MenuItem>
            <MenuItem onClick={() => localStorageLang("УЗ")}>УЗ</MenuItem>
          </MenuList>
        </Menu>
      )}
    </Box>
  );
};
