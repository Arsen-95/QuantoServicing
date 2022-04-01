import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  keyframes,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { FC } from "react";

type TitleProps = {
  pt: any;
  pb: string | {};
  background: string;
  title: string;
  text?: string;
  breadCrumb?: any;
};

export const Title: FC<TitleProps> = ({
  pt,
  pb,
  background,
  title,
  text,
  breadCrumb,
  children,
}) => {
  const pulsate = keyframes`
        0% {transform: scale(0.1, 0.1); opacity: 0.0;}
        50% {opacity: 1.0;}
        100% {transform: scale(1.2, 1.2); opacity: 0.0;}
    `;

  return (
    <Box
      as="section"
      pt={pt}
      background={background}
      bgPos="bottom"
      backgroundSize="cover"
      pb={pb}
      position="relative"
      h="567px"
    >
      <Container>
        <Box
          backgroundColor="#E40000"
          h="14px"
          w="14px"
          animation={`${pulsate} infinite 1s linear`}
          ml="-16px"
        ></Box>
        <Box
          as="h4"
          textTransform="uppercase"
          fontFamily="Blender Pro"
          fontSize="75px"
          lineHeight="62px"
          maxW="923px"
          letterSpacing="-2.50267px"
          fontWeight="900"
          color="#FFF"
          mb={text ? "22px" : "0px"}
        >
          {title}
        </Box>
        <Box
          letterSpacing="-0.00185615px"
          fontSize="18"
          lineHeight="22px"
          color="#FFF"
          fontWeight="300"
          fontFamily="Museo Sans Cyrl"
          mb={children ? "90px" : "0"}
          maxW="500px"
        >
          {text}
        </Box>
        {breadCrumb && (
          <Breadcrumb position="absolute" bottom="15px">
            {breadCrumb.map(([page, href]: any) => (
              <BreadcrumbItem
                color="rgba(255, 255, 255, 0.6)"
                _last={{
                  color: "#FFF",
                }}
                key="page"
              >
                <NextLink href={href} passHref>
                  <BreadcrumbLink
                    fontFamily="Museo Sans Cyrl"
                    fontStyle="normal"
                    fontWeight="400"
                    fontSize="14px"
                    lineHeight="134.5%"
                    letterSpacing="-0.00240557px"
                  >
                    {page}
                  </BreadcrumbLink>
                </NextLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        )}
        {children && children}
      </Container>
    </Box>
  );
};
