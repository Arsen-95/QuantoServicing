import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { CooperationSceme } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import { Input } from "./Input";
import { postRequest } from "query/queries";
import { contactUs } from "query/path";
import { ServiceMenu } from "./Service-menu";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string[];
};

export const Cooperation = () => {
  const { control, formState, reset, handleSubmit } = useForm<FormDataType>({
    resolver: yupResolver(CooperationSceme()),
  });

  const { t } = useTranslation();
  const { locale } = useRouter();
  const toast = useToast();

  const onSubmit = (data: FormDataType) => {
    postRequest(locale, contactUs, data)
      .then(() => {
        toast({
          title:
            "Thanks for submitting your application. Our team will get back to you soon.",
          status: "success",
        });
        reset({
          phone: "",
          email: "",
          message: "",
          name: "",
          service: [],
        });
      })
      .catch(() => {
        toast({
          title: "Something went wrong",
          status: "info",
        });
      });
  };

  return (
    <Box
      pt={["50px", "70px", "70px", "70px", "80px"]}
      pb={["0", "0", "70px", "70px", "80px"]}
      background="#393A47"
      backgroundPosition="100%"
      bgSize="50% 100%"
      pos="relative"
      as="section"
    >
      <Box
        id="contacts"
        position="relative"
        top={["-100px", "-100px", "-120px", "-140px"]}
      ></Box>
      <Container>
        <Flex flexDir={["column", "column", "row"]}>
          <Box flex="1 1 auto" mb={["50px", "50px", "0"]}>
            <Text
              as="h5"
              textTransform="uppercase"
              fontWeight="900"
              fontSize={["34px", "50px", "54px", "64px", "76px"]}
              lineHeight="62px"
              letterSpacing="-2.50267px"
              maxW="626px"
              whiteSpace="pre-wrap"
              mb={["30px", "30px", "20px", "68px"]}
            >
              {t("headers:cooperation")}
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb="20px">
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={t("common:fullName")}
                      name="name"
                      formState={formState}
                    />
                  )}
                />
                {formState?.errors?.name?.message && (
                  <Text
                    mx={["auto", "auto", "0"]}
                    width={["90%", "80%", "300px", "400px"]}
                    mt="20px"
                    fontSize="14px"
                    textAlign="center"
                    color="red.500"
                    fontWeight="bold"
                  >
                    {formState.errors.name?.message}
                  </Text>
                )}
              </Box>
              <Box mb="20px">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <Input
                      placeholder="??????????????"
                      onChange={field.onChange}
                      value={field.value}
                      name="phone"
                      formState={formState}
                      type="tel"
                    />
                  )}
                />
                {formState?.errors?.phone?.message && (
                  <Text
                    mx={["auto", "auto", "0"]}
                    width={["90%", "80%", "300px", "400px"]}
                    mt="20px"
                    fontSize="14px"
                    textAlign="center"
                    color="red.500"
                    fontWeight="bold"
                  >
                    {formState.errors.phone?.message}
                  </Text>
                )}
              </Box>
              <Box mb="20px">
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <Input
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Email"
                      name="email"
                      formState={formState}
                    />
                  )}
                />
                {formState?.errors?.email?.message && (
                  <Text
                    mx={["auto", "auto", "0"]}
                    width={["90%", "80%", "300px", "400px"]}
                    mt="20px"
                    fontSize="14px"
                    textAlign="center"
                    color="red.500"
                    fontWeight="bold"
                  >
                    {formState.errors.email?.message}
                  </Text>
                )}
              </Box>
              <Controller
                control={control}
                name="service"
                render={({ field }) => (
                  <ServiceMenu value={field.value} onChange={field.onChange} />
                )}
              />

              <Box mb="14px">
                <Controller
                  control={control}
                  name="message"
                  render={({ field }) => (
                    <Textarea
                      borderRadius={0}
                      minH="90px"
                      value={field.value}
                      onChange={field.onChange}
                      placeholder={t("common:message")}
                      name="message"
                      width={["90%", "80%", "300px", "400px"]}
                      border={
                        formState?.errors?.message?.message
                          ? "1.45682px solid red"
                          : "1.45682px solid #494949"
                      }
                      borderColor={
                        formState?.errors?.message?.message ? "red" : "#494949"
                      }
                      background="#23242B"
                      _placeholder={{
                        color: "#8C949D",
                      }}
                    />
                  )}
                />
                {formState?.errors?.message?.message && (
                  <Text
                    mx={["auto", "auto", "0"]}
                    width={["90%", "80%", "300px", "400px"]}
                    mt="20px"
                    fontSize="14px"
                    textAlign="center"
                    color="red.500"
                    fontWeight="bold"
                  >
                    {formState.errors.message?.message}
                  </Text>
                )}
              </Box>
              <Text
                mb="15px"
                opacity="0.9"
                color="#5E626D"
                letterSpacing="-0.00240557px"
                fontFamily="Arial"
                fontStyle="italic"
                fontSize="12px"
                lineHeight="134.5%"
              >
                ?? ?????? ???????????????? ????{" "}
                <Link color="#848B94" href="#" textDecoration="underline">
                  ?????????????????? ???????????????????????? ????????????
                </Link>
              </Text>
              <Button
                _hover={{
                  bg: "#000000",
                  color: "#FFF",
                }}
                transition="all 0.3s"
                variant="outline"
                fontSize="20px"
                borderRadius="0"
                color="#8C949D"
                w="164px"
                h="54px"
                loadingText="????????????????"
                type="submit"
                fontWeight="400"
                border="1px solid #8C949D"
              >
                {t("common:connect")}
              </Button>
            </form>
          </Box>
          <Box
            display={["none", "none", "block"]}
            w={["100%", "100%", "50%"]}
            pos={["static", "static", "absolute"]}
            right="0"
            top="0"
            bottom="0"
            height={["500px", "500px", "auto"]}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6694401386562!2d69.28075444830512!3d41.29429820655181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acc18cf03c9%3A0xdec3924705b6facd!2zMjkg0J3Rg9C60YPRgdGB0LrQsNGPINGD0LvQuNGG0LAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1647407001204!5m2!1sru!2s"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </Box>
        </Flex>
      </Container>
      <Box
        display={["block", "block", "none"]}
        w={["100%", "100%", "50%"]}
        pos={["static", "static", "absolute"]}
        right="0"
        top="0"
        bottom="0"
        height={["500px", "500px", "auto"]}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.6694401386562!2d69.28075444830512!3d41.29429820655181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acc18cf03c9%3A0xdec3924705b6facd!2zMjkg0J3Rg9C60YPRgdGB0LrQsNGPINGD0LvQuNGG0LAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1647407001204!5m2!1sru!2s"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </Box>
    </Box>
  );
};
