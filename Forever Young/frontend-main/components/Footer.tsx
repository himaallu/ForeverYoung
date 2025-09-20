import {
  Box,
  Heading,
  HStack,
  Link as ChakraLink,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import NextImage from "next/image";

export const Footer = () => {
  return (
    <SimpleGrid
      p={12}
      minH={{ base: "75vh", md: "60vh" }}
      columns={{ base: 1, md: 2 }}
      spacingY={{ base: 10, lg: 4 }}
      bg={"#1E1E1E"}
      color={"white"}
      overflow="hidden"
      justifyItems={"center"}
    >
      <Box w={400} pl={8}>
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          ForeverYoung
        </Heading>
        <Text maxW={{ base: 320, md: 400 }} fontSize={{ base: "xs", sm: "sm" }}>
          Helping the elderly find the timeless spirit of their youth
        </Text>
      </Box>
      <Box
        w={400}
        justifySelf={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 8 }}
        pl={{ base: 8, md: 0 }}
      >
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          OTHER LINKS
        </Heading>
        <HStack fontSize={{ base: "xs", sm: "sm" }} spacing={6} w={"100%"}>
          <Text>Community</Text>
          <ChakraLink as={Link} href="#">
            <Text>Join our team</Text>
          </ChakraLink>
        </HStack>
      </Box>
      <Box w={400} pl={8}>
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          COMPANY
        </Heading>
        <HStack fontSize={{ base: "xs", sm: "sm" }} spacing={6}>
          <ChakraLink as={Link} href="/about">
            <Text>About</Text>
          </ChakraLink>
          <ChakraLink as={Link} href={"/PrivacyPolicy.pdf"} target="_blank">
            <Text>Privacy Policy</Text>
          </ChakraLink>
          <ChakraLink
            as={Link}
            href={"/TermsAndConditions.pdf"}
            target="_blank"
          >
            <Text>Terms & Conditions</Text>
          </ChakraLink>
        </HStack>
      </Box>
      <Box
        w={400}
        justifySelf={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 8 }}
        pl={{ base: 8, md: 0 }}
      >
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          SOCIAL
        </Heading>
        <HStack justify={"space-between"} w={{ base: "200px", md: "200px" }}>
          <SocialIcon
            url="https://twitter.com/"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com/"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/"
            fgColor="white"
            bgColor="#3C3C3C"
            style={{ height: 35, width: 35 }}
          />
        </HStack>
      </Box>
      <Box w={400} pl={8}>
        <Heading mb={{ base: 1, lg: 2 }} fontSize={{ base: "lg", md: "2xl" }}>
          Contact us
        </Heading>
        <Text fontSize={{ base: "xs", sm: "sm" }}>
          <ChakraLink href="mailto: contact@foreveryoung.com">
            contact@foreveryoung.com
          </ChakraLink>
        </Text>
      </Box>
      <VStack
        w={400}
        justifySelf={{ base: "center", md: "end" }}
        pr={{ base: 0, md: 8 }}
        pl={{ base: 8, md: 0 }}
        align={"start"}
        justify={"start"}
        spacing={4}
      >
        <Box w="151px" h="42px" position="relative">
          <NextImage
            src="/images/logo-white.svg"
            alt="logo"
            fill
            sizes="151px"
            priority
          />
        </Box>
        <Text fontSize={{ base: "xs", sm: "sm" }}>
          © 2022, CB.pvt. All Rights Reserved.
        </Text>
      </VStack>
    </SimpleGrid>
  );
};
