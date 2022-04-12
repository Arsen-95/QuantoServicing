import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

type LocalePickerProps = {
  color: string;
};

const LocalePicker: FC<LocalePickerProps> = ({ color }) => {
  const [selectedLang, setSelectedLang] = useState<string | null>("РУС");
  const router = useRouter();
  const { locale } = router;
  const changeLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}`;
    router.push(router.pathname, "", { locale });
  };

  useEffect(() => {
    if (locale === "uz") {
      setSelectedLang("УЗБ");
    } else {
      setSelectedLang("РУС");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box ml="10px">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              w="75px"
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              color={color}
              background="transparent"
              fontSize={14}
              lineHeight="1"
              _active={{ background: "none" }}
              _hover={{ background: "none" }}
              fontFamily="Museo Sans Cyrl"
              fontWeight="500"
              letterSpacing="-0.00185615px"
            >
              {selectedLang}
            </MenuButton>
            <MenuList minW="100px">
              <MenuItem
                value="ru"
                color="#000"
                onClick={() => changeLanguage("ru")}
              >
                РУС
              </MenuItem>
              <MenuItem
                value="uz"
                color="#000"
                onClick={() => changeLanguage("uz")}
              >
                УЗБ
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default LocalePicker;
