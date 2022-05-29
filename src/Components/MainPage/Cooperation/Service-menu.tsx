import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  Button,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const ServiceMenu = ({ value, onChange }: any) => {
  const { t } = useTranslation("navigation");

  return (
    <Box width={["90%", "80%", "300px", "400px"]} mb="20px" height="46px">
      <Menu closeOnSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              _hover={{ bg: "#23242B" }}
              _active={{ bg: "#23242B" }}
              w="100%"
              h="100%"
              bg="#23242B"
              color={value?.length > 0 ? "#FFF" : "#8C949D"}
              borderRadius="0"
              textAlign="left"
              fontWeight="300"
            >
              {value?.length
                ? value.map(
                    (v: string, index: number) =>
                      `${t(v.toLowerCase())}${
                        index === value.length - 1 ? `` : ","
                      } `
                  )
                : `Что вас заинтересовало`}
            </MenuButton>
            <MenuList bg="#23242B" w={["250px", "350px", "300px", "400px"]}>
              <MenuOptionGroup
                type="checkbox"
                onChange={(value) => onChange(value)}
              >
                <MenuItemOption
                  value="GTI"
                  textTransform="uppercase"
                  _hover={{ bg: "#393A47" }}
                  _focus={{ bg: "#393A47" }}
                  fontSize="12px"
                >
                  геолого-технологические исследования (гти)
                </MenuItemOption>
                <MenuItemOption
                  value="PVR"
                  textTransform="uppercase"
                  _hover={{ bg: "#393A47" }}
                  _focus={{ bg: "#393A47" }}
                  fontSize="12px"
                >
                  прострелочно - взрывные работы (пвр)
                </MenuItemOption>
                <MenuItemOption
                  value="GIS"
                  textTransform="uppercase"
                  _hover={{ bg: "#393A47" }}
                  _focus={{ bg: "#393A47" }}
                  fontSize="12px"
                >
                  геофизические исследования скважин (гис)
                </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  );
};
