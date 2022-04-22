import {
  Box,
  Button,
  Flex,
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
import { useCallback, useLayoutEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "../../../constants/settings";
import Service from "./Service";

const Services = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSticky, setSticky] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 485) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <Flex
        visibility={isSticky ? "hidden" : "visible"}
        opacity={isSticky ? 0 : 1}
        transition="all 0.2s"
        zIndex={100}
        pos="relative"
      >
        <Service
          text={t("headers:gti")}
          picture={`${IMAGES_PATH}/service1.png`}
          href="/gti"
        />
        <Service
          text={t("headers:gis")}
          picture={`${IMAGES_PATH}/service2.png`}
          href="/gis"
        />
        <Service
          text={t("headers:pvr")}
          picture={`${IMAGES_PATH}/service3.png`}
          href="/pvr"
        />
        <Service
          text={t("headers:pgi")}
          picture={`${IMAGES_PATH}/service4.png`}
          href="#"
          onClick={onOpen}
        />
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <Box>
            <Image src={`${IMAGES_PATH}/soon.png`} alt="soon" />
          </Box>
          <ModalHeader fontSize="30px">Эта услуга скоро появится!</ModalHeader>
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
    </>
  );
};
export default Services;
