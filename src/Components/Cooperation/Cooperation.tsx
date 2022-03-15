import {
  Box,
  Button,
  Container,
  Input,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useRef, useState } from "react";

const Cooperation = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });

  const handleChange = useCallback((field: keyof typeof formData) => {
    return (event: React.ChangeEvent<HTMLInputElement>) =>
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  }, []);

  return (
    <Box py="74px">
      <Container>
        <Box>
          <Text
            textTransform="uppercase"
            fontFamily="Blender Pro"
            fontStyle="normal"
            fontWeight="900"
            fontSize="75px"
            lineHeight="62px"
            letterSpacing="-2.50267px"
            color="#494949"
            maxW="626px"
            whiteSpace="pre-wrap"
            mb="68px"
          >
            {`будем \nрады сотрудничеству`}
          </Text>
          <Box as="form">
            <Box mb="28px">
              <Input
                borderRadius="0"
                onChange={handleChange("name")}
                name="name"
                width="431px"
                border="1.45682px solid #494949"
                background="#FAFAFA"
                placeholder="Ф.И.О."
                value={formData.name}
                isRequired={true}
              />
            </Box>
            <Box mb="28px">
              <Input
                borderRadius="0"
                name="tel"
                onChange={handleChange("tel")}
                type="tel"
                width="431px"
                border="1.45682px solid #494949"
                background="#FAFAFA"
                placeholder="Телефон"
                value={formData.tel}
                isRequired={true}
              />
            </Box>
            <Box mb="28px">
              <Input
                borderRadius="0"
                name="email"
                type="email"
                width="431px"
                border="1.45682px solid #494949"
                background="#FAFAFA"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange("email")}
                isRequired={true}
              />
            </Box>
            <Box mb="30px">
              <Input
                borderRadius="0"
                value={formData.message}
                name="message"
                type="text"
                width="431px"
                border="1.45682px solid #494949"
                background="#FAFAFA"
                placeholder="Сообщение"
                onChange={handleChange("message")}
                isRequired={true}
              />
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
              onClick={() => {
                toast({
                  title: "Account created.",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
                console.log(formData);
              }}
            >
              Связаться
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cooperation;
