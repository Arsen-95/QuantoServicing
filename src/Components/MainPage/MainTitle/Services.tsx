import { Flex } from "@chakra-ui/react";
import { useCallback, useLayoutEffect, useState } from "react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "../../../constants/settings";
import Service from "./Service";

const Services = () => {
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
  });

  const { t } = useTranslation();

  return (
    <>
      <Flex
        visibility={isSticky ? "hidden" : "visible"}
        opacity={isSticky ? 0 : 1}
        transition="all 0.2s"
        // zIndex={100}
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
      </Flex>
    </>
  );
};

export default Services;
