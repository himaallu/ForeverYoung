import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import NextImage from "next/image";

export const Network = () => {
  return (
    <Flex
      minH="75vh"
      pt={{ base: "100px", md: "250px" }}
      pb={"150px"}
      color="white"
      bg="rgba(3, 0, 30, 1)"
      px={8}
      direction={"column"}
      justify={"center"}
      align={"center"}
      position="relative"
      zIndex={9}
    >
      <Flex
        w="100%"
        justifyContent={"space-around"}
        gap={8}
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <Box alignSelf={"center"}>
          <Heading
            maxW={400}
            mb={12}
            color={"rgba(9, 124, 158, 1)"}
            fontSize={{ base: "3xl", sm: "4xl" }}
          >
            The one-stop hub for talent, opportunities and success!
          </Heading>
          <Text maxW={500} fontSize={{ base: "small", sm: "medium" }}>
            The Opportunities Portal: Connects skilled students with relevant
            project opportunities and the right teams to turn ideas into
            reality. It&apos;s a quick, direct, and transparent platform for
            discovering and engaging with others, leading to potential
            collaborations, startups, job opportunities, research initiatives,
            and investments.
          </Text>
        </Box>
        <Box alignSelf={"center"}>
          <Box
            w={{ base: "200px", sm: "250px" }}
            position="relative"
            sx={{ aspectRatio: "1.2 / 1" }}
          >
            <NextImage
              src="/images/3-circles.svg"
              alt="3 overlapping circles"
              fill
              sizes="(max-width: 0px) 200px, (max-width: 500px) 250px"
            />
          </Box>
        </Box>
      </Flex>
      <Box
        position={"absolute"}
        w="50%"
        bottom={0}
        left={0}
        h={{ base: 12, md: 16 }}
        borderRight={"1px solid rgba(236, 155, 131, 1)"}
        zIndex={1}
      />
    </Flex>
  );
};
