import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";

export const Hero = () => {
  return (
    <Box
      className="hero-panel"
      h="fit-content"
      // minH="90vh"
      flexGrow={1}
      color="white"
      position={"relative"}
      zIndex={"0"}
      justifySelf={"center"}
    >
      <Flex
        direction={"column"}
        h="100%"
        justify={"center"}
        align={"center"}
        gap={4}
        pt={8}
      >
        <motion.div
          initial={{ opacity: 0, y: "-30%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            w={{ base: "250px", sm: "300px", md: "350px" }}
            h={{ base: "250px", sm: "300px", md: "350px" }}
            mb={2}
            position="relative"
          >
            {/* <NextImage
              src={"/images/landing_page.svg"}
              alt="employees discussing"
              fill
              priority
              sizes="(max-width: 0px) 250px, (max-width: 500px) 300px, (max-width: 900px) 350px"
            /> */}
          </Box>
        </motion.div>
        <Box bg={"rgba(0,0,0,0.4)"} borderRadius={12}>
          <Flex
            direction={"column"}
            align={"center"}
            textAlign={"center"}
            gap={4}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Flex
                justify={"center"}
                alignItems={"center"}
                bg={"rgba(0,0,0,0.4)"}
              >
                <Heading
                  fontSize={{ base: "32px", sm: "48px", md: "72px" }}
                  px={8}
                  mt={-32}
                  borderRadius={8}
                  bg={"rgba(0,0,0,0.4)"}
                >
                  Bringing back your youthful spirit
                </Heading>
              </Flex>
              <Flex justify={"center"} align={"center"}>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "sm", sm: "md", md: "xl" }}
                  color={"rgba(242, 246, 249, 1)"}
                  px={8}
                  maxW={1000}
                  mt={4}
                >
                  Here at ForeverYoung, our mission is to empower the elderly to
                  live with confidence and fulfillment, and to connect them with
                  the resources and companionship they need to thrive
                </Text>
              </Flex>
              <Flex
                w={"100%"}
                mt={8}
                gap={8}
                justify={"center"}
                align={"center"}
                color={"white"}
                direction={{
                  base: "column",
                  sm: "row",
                }}
              >
                <Link href="/dashboard">
                  <Button
                    fontWeight="bold"
                    fontSize={{ base: "md", lg: "lg" }}
                    // color="black"
                    w="200px"
                    h="50px"
                    mb={8}
                    // sx={{
                    //   background: "rgba(255, 255, 255, 1)",
                    //   borderRadius: "12px",
                    //   boxShadow: "0px 0px 0px 6px rgba(76, 80, 158, 1)",
                    //   _hover: {
                    //     transform: "scale(1.2)",
                    //   },
                    // }}
                    colorScheme="orange"
                  >
                    Get started
                  </Button>
                </Link>
              </Flex>
            </motion.div>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
