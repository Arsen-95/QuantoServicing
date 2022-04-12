import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Input, InputMask } from "./Input";
import { useForm, Controller } from "react-hook-form";
import { cooperationSceme } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";

type FormDataType = {
  name: string;
  tel: string;
  email: string;
  message: string;
};

export const Cooperation = () => {
  const { control, formState, handleSubmit } = useForm<FormDataType>({
    resolver: yupResolver(cooperationSceme),
  });

  const onSubmit = (data: FormDataType) => {
    const phone = data?.tel?.replace(/_|-/g, "") || "";
    const name = data?.name;
    const email = data?.email;
    const message = data?.message;
  };

  const { t } = useTranslation();

  return (
    <Box
      pt={["40px", "40px", "40px", "70px"]}
      pb={["0", "0", "40px", "100px"]}
      background="#FAFAFA"
      backgroundPosition="100%"
      bgSize="50% 100%"
      pos="relative"
    >
      <Box
        id="contacts"
        position="relative"
        top={["-100px", "-100px", "-120px", "-140px"]}
      ></Box>
      <Container>
        <Flex flexDir={["column", "column", "row"]}>
          <Box
            flex="1 1 auto"
            mb={["50px", "50px", "0"]}
            textAlign={["center", "center", "left"]}
          >
            <Text
              as="h5"
              textTransform="uppercase"
              fontStyle="normal"
              fontWeight="900"
              fontSize={["35px", "50px", "50px", "75px"]}
              lineHeight="62px"
              letterSpacing="-2.50267px"
              color="#494949"
              maxW="626px"
              whiteSpace="pre-wrap"
              mb={["30px", "30px", "20px", "68px"]}
            >
              {t("headers:cooperation")}
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mb="28px">
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
              <Box mb="28px">
                <Controller
                  control={control}
                  name="tel"
                  render={({ field }) => (
                    <InputMask
                      onChange={field.onChange}
                      value={field.value}
                      name="tel"
                      formState={formState}
                    />
                  )}
                />
                {formState?.errors?.tel?.message && (
                  <Text
                    mx={["auto", "auto", "0"]}
                    width={["90%", "80%", "300px", "400px"]}
                    mt="20px"
                    fontSize="14px"
                    textAlign="center"
                    color="red.500"
                    fontWeight="bold"
                  >
                    {formState.errors.tel?.message}
                  </Text>
                )}
              </Box>
              <Box mb="28px">
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
              <Box mb="30px">
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
                      background="#FAFAFA"
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
                color="rgba(29, 29, 29, 0.5)"
                letterSpacing="-0.00240557px"
                fontFamily="Arial"
                fontStyle="italic"
                fontWeight="400"
                fontSize="12px"
                lineHeight="134.5%"
              >
                Я даю согласие на{" "}
                <Link href="#">обработку персональных данных</Link>
              </Text>
              <Button
                fontSize="20px"
                background="#365164"
                borderRadius="0"
                color="#FFF"
                w="164px"
                h="54px"
                loadingText="Отправка"
                type="submit"
              >
                {t("common:message")}
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
