import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./PaginationItem";

const Pagination = () => {
  return (
    <Flex columnGap="6px" justifyContent="center" alignItems="center">
      <PaginationItem name="Назад" />
      <PaginationItem name="1" />
      <PaginationItem name="2" />
      <PaginationItem name="3" />
      <PaginationItem name="Вперед" />
    </Flex>
  );
};

export default Pagination;
