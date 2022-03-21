import { Box, Container, List, ListItem } from "@chakra-ui/react";
import React, { FC, useState } from "react";

type PickerProps = {
  start: any;
  last: any;
};

export const YearPicker: FC<PickerProps> = ({ start, last }) => {
  const startEl = start;
  const lastEl = last;
  const listArr = [];
  for (let i = startEl; i <= lastEl; i++) {
    listArr.push(i);
  }
  const [selected, setSelected] = useState(lastEl);

  const handleClick = (value: any) => {
    setSelected(value);
  };

  return (
    <Box overflow="hidden">
      <Container>
        <List>
          {listArr.map((el, index) => (
            <>
              <ListItem
                cursor="pointer"
                display="inline"
                fontFamily="Blender Pro"
                fontWeight="900"
                fontSize={
                  selected === el
                    ? ["56px", "66px", "76px", "86px", "96px"]
                    : ["26px", "30px", "34px", "36px"]
                }
                lineHeight={selected === el ? "96px" : "60px"}
                key={el}
                color={selected === el ? "#365164" : "#8C949D"}
                transition="all 0.3s"
                onClick={() => handleClick(el)}
                p="15px 15px 15px 0px"
              >
                {el}
              </ListItem>
              {index + 1 < listArr.length && (
                <>
                  <Box
                    mb="13px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box
                    mb="13px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box
                    mb="13px"
                    width="7px"
                    height="1px"
                    bgColor="#8C949D"
                  ></Box>
                  <Box width="7px" height="1px" bgColor="#8C949D"></Box>
                </>
              )}
            </>
          ))}
        </List>
      </Container>
    </Box>
  );
};
