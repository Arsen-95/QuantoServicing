import {
  Box,
  Button,
  Container,
  Grid,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { IMAGES_PATH } from "constants/settings";
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
        <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"}>
          <ModalOverlay />
          <ModalContent>
            <Box>
              <Image src={`${IMAGES_PATH}/soon.png`} alt="soon" />
            </Box>
            <ModalHeader fontSize="30px">
              Эта услуга скоро появится!
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box mb="20px" fontSize="25px">
                Свяжитесь с нами
              </Box>
              <Link href="tel:+99878-140-55-00" fontSize="20px">
                +99878-140-55-00
              </Link>
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
