import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

import { IMAGES_PATH } from "constants/settings";
import { PostTitle } from "./PostTitle";
import { OtherPosts } from "./OtherPosts";

type Props = {
  post: any;
  eventType: any;
  posts: any;
};

export const PostContent: React.FC<Props> = ({ post, eventType, posts }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    ref.current!.innerHTML = post.description;
  });

  return (
    <Box>
      <Box display={["block", "flex", "flex"]} justifyContent="space-between">
        <Box mb="50px" order="2" maxW={["auto", "auto", "50%"]}>
          <Image
            src={`${IMAGES_PATH}/pipeline.png`}
            alt="news photo"
            objectFit="cover"
          />
        </Box>
        <PostTitle post={post} />
      </Box>
      <Flex
        flexDir={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Text
          order={[0, 0, 1]}
          maxW={["auto", "auto", "50%"]}
          fontSize={["14px", "16px", "16px", "18px", "18px"]}
          lineHeight="150%"
          letterSpacing="-0.00267285px"
          color="#B7B7B7"
          opacity="0.76"
          ref={ref}
          mb={["50px", "50px", "0px"]}
        ></Text>
        <OtherPosts eventType={eventType} posts={posts} />
      </Flex>
    </Box>
  );
};
