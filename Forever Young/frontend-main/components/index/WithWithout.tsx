import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

export const WithWithout = () => {
  return (
    <VStack minH={"100vh"} bg="rgba(3, 0, 30, 1)">
      <Flex
        gap={{ base: "32px", md: "48px", lg: "64px" }}
        grow={1}
        w="100%"
        justify={"center"}
        align={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "350px", md: "450px" }}
          maxW="500px"
          position="relative"
          sx={{
            aspectRatio: "1 / 1",
          }}
        >
          <NextImage
            src="/images/without-for.svg"
            alt="without The Opportunties Portal"
            fill
            sizes="(max-width: 0px) 350px, (max-width: 900px) 600px"
          />
        </Box>
        <Box
          w={{ base: "350px", md: "450px" }}
          maxW="500px"
          position="relative"
          sx={{
            aspectRatio: "1 / 1",
          }}
        >
          <NextImage
            src="/images/with-for.svg"
            alt="with The Opportunties Portal"
            fill
            sizes="(max-width: 0px) 350px, (max-width: 900px) 600px"
          />
        </Box>
      </Flex>
    </VStack>
  );
};
