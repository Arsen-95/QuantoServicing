import { Box } from "@chakra-ui/react";
import { Title } from "Components/Common/Title";
import React from "react";
import { IMAGES_PATH } from "../../../constants/settings";
import Services from "./Services";
import { useTranslation } from "next-i18next";

export const MainTitle = () => {
  const [t] = useTranslation();

  return (
    <Title
      title={t("titles:main")}
      background={`url(${IMAGES_PATH}/mainTitle.png) no-repeat`}
      text={t("titles:mainText")}
      pt="158px"
      pb={["0px", "140px", "140px", "30px"]}
    >
      <Box display={["none", "none", "none", "block"]}>
        <Services />
      </Box>
    </Title>
  );
};
