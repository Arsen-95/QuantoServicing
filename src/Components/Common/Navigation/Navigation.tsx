import { Box } from "@chakra-ui/react";
import React from "react";
import NavItem from "./NavItem";

export const Navigation = () => {
  return (
    <Box as="nav" display="flex">
      <NavItem href="#" text="О компании" />
      <NavItem href="#" text="Услуги" />
      <NavItem href="#" text="Партнеры" />
      <NavItem href="#" text="Контакты" />
      <NavItem href="#" text="Новости" />
      <NavItem href="#" text="Материалы" />
    </Box>
  );
};
