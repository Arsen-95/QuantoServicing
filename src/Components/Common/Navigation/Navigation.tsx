import { Box } from "@chakra-ui/react";
import LocalePicker from "./LocalePicker";
import { useTranslation } from "next-i18next";

import NavItem from "./NavItem";

type NavProps = {
  lang: boolean;
  flexDir: any;
  color?: any;
};

export const Navigation: React.FC<NavProps> = ({ lang, flexDir, color }) => {
  const { t } = useTranslation();
  return (
    <Box as="nav" display="flex" flexDir={flexDir} alignItems="center">
      <Box display={["none", "none", "none", "block"]}>
        <NavItem
          href="/about"
          text={t("navigation:about")}
          color={color}
          textTransform="uppercase"
        />
        <NavItem
          href="/services"
          text={t("navigation:services")}
          color={color}
          textTransform="uppercase"
        />
        <NavItem
          href="/#partners"
          text={t("navigation:partners")}
          color={color}
          textTransform="uppercase"
        />
        <NavItem
          href="/#contacts"
          text={t("navigation:contacts")}
          color={color}
          textTransform="uppercase"
        />
        <NavItem
          href="/news"
          text={t("navigation:news")}
          color={color}
          textTransform="uppercase"
        />
        {/* <NavItem
          href="/documents"
          text={t("navigation:documents")}
          color={color}
        /> */}
      </Box>
      {lang && <LocalePicker color={color} />}
    </Box>
  );
};
