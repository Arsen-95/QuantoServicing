import {
  Box,
  Container,
  Flex,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
import React, { FC } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CustomSliderItem: FC<any> = ({ title, text, imageUrl, arr }) => {
  return (
    <SwiperSlide>
      <Box pos="relative" h="720px">
        <Container h="100%">
          <Flex height="100%">
            <Flex flexBasis="40%" flexDir="column" justifyContent="center">
              <Box
                fontFamily="Museo Sans Cyrl"
                fontStyle="normal"
                fontWeight="600"
                fontSize="40px"
                lineHeight="99.5%"
                letterSpacing="-0.04em"
                color="#494949"
                mb="35px"
              >
                {title}
              </Box>
              {text && <Box mb={arr && "28px"}>{text}</Box>}

              {arr && (
                <UnorderedList>
                  {arr.map((item: any) => (
                    <ListItem
                      fontFamily="Museo Sans Cyrl"
                      fontStyle="normal"
                      fontWeight="300"
                      fontSize="18px"
                      lineHeight="22px"
                      letterSpacing="-0.00240557px"
                      color="#000000"
                      opacity="0.7"
                      key={item}
                      _notLast={{ mb: "10px" }}
                    >
                      {item}
                    </ListItem>
                  ))}
                </UnorderedList>
              )}
            </Flex>
            <Box
              position="absolute"
              right="0%"
              bottom="0"
              width="50%"
              minH="100%"
              background={`url(${IMAGES_PATH}/${imageUrl}) no-repeat`}
              backgroundSize="cover"
              backgroundPosition="center"
            ></Box>
          </Flex>
        </Container>
      </Box>
    </SwiperSlide>
  );
};

export default CustomSliderItem;
