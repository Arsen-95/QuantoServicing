import { Box } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { IMAGES_PATH } from "../../../constants/settings";
import { Title } from "Components/Common/Title";
import Services from "./Services";

export const MainTitle = () => {
  const [t] = useTranslation();

  return (
    <Title
      title={t("titles:main")}
      background={`url(${IMAGES_PATH}/mainTitle.png) no-repeat`}
      text={t("titles:mainText")}
      pt={["150px", "200px", "200px", "158px"]}
    >
      <Box display={["none", "none", "none", "block"]}>
        <Services />
      </Box>
    </Title>
  );
};
