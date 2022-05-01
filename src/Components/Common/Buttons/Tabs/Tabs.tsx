import { Box, Flex } from "@chakra-ui/react";

type Props = {
  data: any;
  eventType: any;
  setEventType: any;
};

export const Tabs: React.FC<Props> = ({ data, eventType, setEventType }) => {
  return (
    <Flex
      fontFamily="Blender Pro"
      fontWeight="900"
      fontSize="14px"
      lineHeight="132%"
      letterSpacing="-0.0017819px"
      color="#494949"
      mb={["30px", "30px", "50px"]}
      ml="-10px"
    >
      {data.map((item: any) => (
        <TabItem
          eventType={eventType}
          setEventType={setEventType}
          title={item.title}
          titleEvent={item.titleEvent}
          key={item.title}
        />
      ))}
    </Flex>
  );
};

type ItemProps = {
  title: string;
  eventType: any;
  titleEvent: string;
  setEventType: any;
};

const TabItem: React.FC<ItemProps> = ({
  title,
  eventType,
  setEventType,
  titleEvent,
}) => {
  return (
    <Box
      _hover={{
        color: "#FFF",
      }}
      cursor="pointer"
      p="10px"
      _notLast={{
        mr: ["10px", "10px", "15px", "20px"],
      }}
      transition="all 0.3s"
      fontSize={["20px", "26px", "36px", "50px"]}
      lineHeight="99.5%"
      color={eventType === titleEvent ? "#FFF" : "#6E7085"}
      onClick={() => setEventType(titleEvent)}
    >
      {title}
    </Box>
  );
};
