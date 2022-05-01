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
import { useEffect, useState } from "react";

type LocalePickerProps = {
  color: string;
};

const LocalePicker: React.FC<LocalePickerProps> = ({ color }) => {
  const [selectedLang, setSelectedLang] = useState<string | null>("РУС");
  const router = useRouter();
  const { locale } = router;
  const changeLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}`;
    router.push(router.pathname, "", { locale });
  };

  useEffect(() => {
    if (locale === "uz-cyrl") {
      setSelectedLang("УЗБ");
    } else if (locale === "uz-latn") {
      setSelectedLang("UZB");
    } else if (locale === "ru") {
      setSelectedLang("РУС");
    } else if (locale === "en") {
      setSelectedLang("ENG");
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
                value="uz-cyrl"
                color="#000"
                onClick={() => changeLanguage("uz-cyrl")}
              >
                УЗБ
              </MenuItem>
              <MenuItem
                value="uz-latn"
                color="#000"
                onClick={() => changeLanguage("uz-latn")}
              >
                UZB
              </MenuItem>
              <MenuItem
                value="en"
                color="#000"
                onClick={() => changeLanguage("en")}
              >
                ENG
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};

export default LocalePicker;
