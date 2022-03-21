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
// import InputMask from "react-input-mask";
import { yupResolver } from "@hookform/resolvers/yup";

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

  return (
    <Box
      py="74px"
      background="#FAFAFA"
      backgroundPosition="100%"
      bgSize="50% 100%"
      pos="relative"
    >
      <Container>
        <Flex>
          <Box flex="1 1 auto">
            <Text
              textTransform="uppercase"
              fontFamily="Blender Pro"
              fontStyle="normal"
              fontWeight="900"
              fontSize={["35px", "45px", "55px", "65px", "75px"]}
              lineHeight="62px"
              letterSpacing="-2.50267px"
              color="#494949"
              maxW="626px"
              whiteSpace="pre-wrap"
              mb="68px"
            >
              будьте с нами
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
                      placeholder="Ф.И.О."
                      name="name"
                      formState={formState}
                    />
                  )}
                />
                {formState?.errors?.name?.message && (
                  <Text
                    mt="20px"
                    fontSize="14px"
                    width="431px"
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
                    mt="20px"
                    fontSize="14px"
                    width="431px"
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
                      placeholder="email"
                      name="email"
                      formState={formState}
                    />
                  )}
                />
                {formState?.errors?.email?.message && (
                  <Text
                    mt="20px"
                    fontSize="14px"
                    width="431px"
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
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Сообщение"
                      name="message"
                      width="431px"
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
                    mt="20px"
                    fontSize="14px"
                    width="431px"
                    textAlign="center"
                    color="red.500"
                    fontWeight="bold"
                  >
                    {formState.errors.message?.message}
                  </Text>
                )}
              </Box>
              <Text
                mb="10px"
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
                background="#365164"
                borderRadius="0"
                color="#FFF"
                w="164px"
                h="54px"
                loadingText="Отправка"
                type="submit"
              >
                Связаться
              </Button>
            </form>
          </Box>
          <Box flexBasis="50%">
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
    </Box>
  );
};
