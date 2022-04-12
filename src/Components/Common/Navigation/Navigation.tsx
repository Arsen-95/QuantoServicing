import { Box } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import NavItem from "./NavItem";
import LocalePicker from "./LocalePicker";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

type NavProps = {
  lang: boolean;
  flexDir: any;
  color?: any;
};

export const Navigation: FC<NavProps> = ({ lang, flexDir, color }) => {
  const { t } = useTranslation();
  const router = useRouter();

  // let locale: any;
  // useEffect(() => {
  //   const locale = localStorage.getItem("lang");
  // }, []);

  return (
    <Box as="nav" display="flex" flexDir={flexDir} alignItems="center">
      <Box display={["none", "none", "none", "block"]}>
        <NavItem href="/about" text={t("navigation:about")} color={color} />
        <NavItem
          href="/services"
          text={t("navigation:services")}
          color={color}
        />
        <NavItem
          href="/#partners"
          text={t("navigation:partners")}
          color={color}
        />
        <NavItem
          href="/#contacts"
          text={t("navigation:contacts")}
          color={color}
        />
        <NavItem href="/news" text={t("navigation:news")} color={color} />
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
