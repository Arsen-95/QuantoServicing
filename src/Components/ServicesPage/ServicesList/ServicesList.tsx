import {
  Box,
  Button,
  Container,
  Grid,
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
import ServiceItem from "./ServiceItem";

export const ServicesList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box py="100px">
      <Container>
        <Grid
          justifyItems="center"
          rowGap="40px"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          <ServiceItem
            href="/gti"
            name="геолого-технологические исследования"
            picture="gtiIcon.svg"
          />
          <ServiceItem
            href="/gis"
            name="геофизические исследования скважин"
            picture="gisIcon.svg"
          />
          <ServiceItem
            href="/pvr"
            name={`прострелочно-взрывные \nработы`}
            picture="pvrIcon.svg"
          />
          <ServiceItem
            name="промыслово-геофизические исследования"
            picture="pgiIcon.svg"
            onClick={onOpen}
          />
        </Grid>
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
      </Container>
    </Box>
  );
};
