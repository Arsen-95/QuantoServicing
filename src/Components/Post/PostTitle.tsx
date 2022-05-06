import { Box, Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";

type Props = {
  post: any;
};

export const PostTitle: React.FC<Props> = ({ post }) => {
  const month = dayjs(post.date_created).format("MMM");
  const year = dayjs(post.date_created).format("YYYY");
  const day = dayjs(post.date_created).format("DD");

  return (
    <Box maxW="523px">
      <Box
        as="h5"
        fontWeight="900"
        fontSize="60px"
        lineHeight="100%"
        letterSpacing="-0.0017819px"
        mb="15px"
      >
        {post.title}
      </Box>
      <Flex alignItems="center" mb="150px">
        <Box
          fontWeight="300"
          fontSize="64px"
          lineHeight="80%"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
          mr="10px"
        >
          {day}
        </Box>
        <Box
          fontWeight="250"
          fontSize="18px"
          lineHeight="22px"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
        >
          {month} <br /> {year}
        </Box>
      </Flex>
    </Box>
  );
};
