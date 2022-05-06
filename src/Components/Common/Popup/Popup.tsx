import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";

type Props = {
  isOpen: boolean;
  onClose: any;
};

export const Popup: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody bg="#393A47" p="0">
          <Flex height="680px" w="1000px">
            <Box
              bg={`url(${IMAGES_PATH}/popup.png) no-repeat`}
              flexBasis="45%"
              minH="100%"
            ></Box>
            <Box flexBasis="55%" p="150px 90px 0 50px" bg="#393A47">
              <Text
                as="h5"
                fontWeight="900"
                fontSize="30px"
                lineHeight="48px"
                mb="56px"
              >
                Отправьте данные для получения документа
              </Text>
              <MyInput placeholder="Ф.И.О." />
              <MyInput placeholder="Компания" />
              <MyInput placeholder="Email" />
              <Box
                as="button"
                border="1px solid #B7B7B7"
                p="14.5px 189px"
                color="#B7B7B7"
                _hover={{
                  bg: "#23242B",
                  border: "1px solid #23242B",
                  color: "#FFF",
                }}
                transition="all 0.3s"
              >
                Отправить
              </Box>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const MyInput = ({ placeholder }: any) => {
  return (
    <Input
      border="none"
      borderRadius="0"
      bg="#23242B"
      placeholder={placeholder}
      _placeholder={{
        color: "#8C949D",
      }}
      mb="20px"
    />
  );
};
