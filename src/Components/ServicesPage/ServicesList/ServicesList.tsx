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
import { useTranslation } from "next-i18next";
import ServiceItem from "./ServiceItem";

export const ServicesList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

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
            name={t("titles:gti")}
            picture="gtiIcon.svg"
          />
          <ServiceItem
            href="/gis"
            name={t("titles:gis")}
            picture="gisIcon.svg"
          />
          <ServiceItem
            href="/pvr"
            name={t("titles:pvr")}
            picture="pvrIcon.svg"
          />
          <ServiceItem
            name={t("titles:pgi")}
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
