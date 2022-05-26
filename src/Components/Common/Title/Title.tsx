import {
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  keyframes,
} from "@chakra-ui/react";
import NextLink from "next/link";

type TitleProps = {
  title: string;
  text?: string;
  breadCrumb?: string[][];
};

export const Title: React.FC<TitleProps & BoxProps> = ({
  title,
  text,
  breadCrumb,
  children,
  ...props
}) => {
  const pulsate = keyframes`
        0% {transform: scale(0.1, 0.1); opacity: 0.0;}
        50% {opacity: 1.0;}
        100% {transform: scale(1.2, 1.2); opacity: 0.0;}
    `;

  return (
    <Box
      as="section"
      position="relative"
      h="567px"
      {...props}
      bgPos="0 99%"
      backgroundSize="cover"
      // pt="78px"
      mt="78px"
    >
      <Container>
        <Box
          backgroundColor="#0057FF"
          h="14px"
          w="14px"
          animation={`${pulsate} infinite 1s linear`}
          ml="-16px"
        ></Box>
        <Box
          as="h4"
          textTransform="uppercase"
          fontSize={["34px", "40px", "60px", "75px"]}
          lineHeight={["42px", "56px", "62px"]}
          maxW={["300px", "500px", "700px", "923px"]}
          letterSpacing="-2.50267px"
          fontWeight="900"
          mb={text ? "22px" : "0px"}
        >
          {title}
        </Box>
        <Box
          letterSpacing="-0.00185615px"
          fontSize={["14", "14", "16", "18"]}
          lineHeight="22px"
          fontWeight="300"
          mb={children ? ["0px", "0", "90px"] : "0"}
          maxW={["80%", "50%"]}
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
