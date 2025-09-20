import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import { Box, Flex, VStack } from "@chakra-ui/react";

import { Opportunities } from "../components/index/Products";
import { Network } from "../components/index/Network";
import { Users } from "../components/index/Users";
import { Hero } from "../components/index/Hero";
import { Footer } from "../components/Footer";
import { WithWithout } from "../components/index/WithWithout";
import { JoinTeam } from "../components/index/JoinTeam";
import AboutUs from "../components/about/AboutPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <VStack
        // h="fit-content"
        minH={"100vh"}
        // bg="linear-gradient(135deg, #1736A7, #12D45D);"
        bgImage={"url(/images/old-ppl.gif)"}
        // filter={"grayscale(70%)"}
        bgSize={"cover"}
        direction={"column"}
      >
        <Navbar
          page="index"
          NAV_ITEMS={[
            {
              label: "Join the team",
              href: "/auth",
            },
          ]}
        />
        <Hero />
      </VStack>

      <Box
        position={"absolute"}
        w="50vw"
        h={{ base: 16, lg: 24 }}
        borderRight={"1px solid rgba(236, 155, 131, 1)"}
      />

      <Opportunities />

      <Box
        position={"absolute"}
        w="50vw"
        h={{ base: 12, md: 16 }}
        borderRight={"2px solid rgba(120, 73, 137, 1)"}
        zIndex={11}
      />

      <WithWithout />

      <Footer />
    </>
  );
}
