import { CloseIcon } from "@chakra-ui/icons";
import { Box, Icon, IconButton } from "@chakra-ui/react";
import React, { FC } from "react";
import { BurgerIcon } from "../Icons/BurgerIcon";

type BurgerProps = {
  menu: boolean;
  setMenu(menu: boolean): void;
};

export const Burger: FC<BurgerProps> = ({ menu, setMenu }) => {
  return (
    <>
      {menu === true ? (
        <Box display={["block", "block", "block", "none"]}>
          <IconButton
            border="none"
            onClick={() => setMenu(!menu)}
            aria-label="Options"
            icon={<Icon as={CloseIcon} />}
            color="#FFF"
            pos="relative"
            zIndex={20}
            variant="outline"
            _hover={{
              background: "none",
            }}
          />
        </Box>
      ) : (
        <Box display={["block", "block", "block", "none"]}>
          <IconButton
            border="none"
            onClick={() => setMenu(!menu)}
            aria-label="Options"
            icon={<Icon as={BurgerIcon} />}
            color="#FFF"
            zIndex={50}
            variant="outline"
            _hover={{
              background: "none",
            }}
          />
        </Box>
      )}
    </>
  );
};
