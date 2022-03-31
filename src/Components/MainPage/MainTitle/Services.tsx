import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";
import Service from "./Service";

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex>
        <Service
          text="Геолого-технологические исследования"
          picture={`${IMAGES_PATH}/Service2.png`}
          href="/gti"
        />
        <Service
          text="Геофизические исследования скважин"
          picture={`${IMAGES_PATH}/Service3.png`}
          href="/gis"
        />
        <Service
          text="Прострелочно-взрывные работы"
          picture={`${IMAGES_PATH}/Service1.png`}
          href="/pvr"
        />
        <Service
          text="Промыслово-геофизические исследования"
          picture={`${IMAGES_PATH}/Service4.png`}
          href="#"
          onClick={onOpen}
        />
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Промыслово-геофизические исследования</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>Этот раздел на этапе проработки</Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Services;
