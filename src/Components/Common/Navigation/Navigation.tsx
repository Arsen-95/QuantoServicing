import { Box } from "@chakra-ui/react";
import LocalePicker from "./LocalePicker";
import { useTranslation } from "next-i18next";

import NavItem from "./NavItem";

type NavProps = {
  lang: boolean;
  flexDir: any;
};

export const Navigation: React.FC<NavProps> = ({ lang, flexDir }) => {
  const { t } = useTranslation();
  return (
    <Box as="nav" display="flex" flexDir={flexDir} alignItems="center">
      <Box display={["none", "none", "none", "block"]}>
        <NavItem
          href="/about"
          text={t("navigation:about")}
          textTransform="uppercase"
        />
        <NavItem
          href="/services"
          text={t("navigation:services")}
          textTransform="uppercase"
        />
        <NavItem
          href="/#partners"
          text={t("navigation:partners")}
          textTransform="uppercase"
        />
        <NavItem
          href="/#contacts"
          text={t("navigation:contacts")}
          textTransform="uppercase"
        />
        <NavItem
          href="/news"
          text={t("navigation:news")}
          textTransform="uppercase"
        />
      </Box>
      {lang && <LocalePicker />}
    </Box>
  );
};
