import { Flex } from "@chakra-ui/react";
import React from "react";
import { IMAGES_PATH } from "../../constants/settings";
import Service from "./Service";

const Services = () => {
  return (
    <Flex>
      <Service
        text="Прострелочно-взрывные работы"
        picture={`${IMAGES_PATH}/Service1.png`}
        href="#"
      />
      <Service
        text="Геолого-технологические исследования"
        picture={`${IMAGES_PATH}/Service2.png`}
        href="#"
      />
      <Service
        text="Геофизические исследования скважин"
        picture={`${IMAGES_PATH}/Service3.png`}
        href="#"
      />
      <Service
        text="Промыслово-геофизические исследования"
        picture={`${IMAGES_PATH}/Service4.png`}
        href="#"
      />
      <Service
        text="Метрологические услуги"
        picture={`${IMAGES_PATH}/Service4.png`}
        href="#"
      />
    </Flex>
  );
};

export default Services;
