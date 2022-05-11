import { Box, Flex } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  post: any;
};

export const PostTitle: React.FC<Props> = ({ post }) => {
  const month = dayjs(post.date_created).format("MMM");
  const year = dayjs(post.date_created).format("YYYY");
  const day = dayjs(post.date_created).format("DD");

  const { t } = useTranslation("months");

  return (
    <Box
      maxW={["auto", "230px", "300px", "400px", "523px"]}
      mb={["30px", "50px", "150px", "150px", "150px"]}
    >
      <Box
        as="h5"
        fontWeight="900"
        fontSize={["20px", "30px", "40px", "50px", "60px"]}
        lineHeight="100%"
        letterSpacing="-0.0017819px"
        mb="15px"
      >
        {post.title}
      </Box>
      <Flex alignItems="center">
        <Box
          fontWeight="300"
          fontSize={["44px", "50px", "54px", "58px", "64px"]}
          lineHeight="80%"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
          mr="10px"
        >
          {day}
        </Box>
        <Box
          fontWeight="250"
          fontSize={["14px", "14px", "16px", "18px", "18px"]}
          lineHeight="22px"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
        >
          {t(month)} <br /> {year}
        </Box>
      </Flex>
    </Box>
  );
};
