import { Flex, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const JoinTeam = () => {
  return (
    <Flex
      id="jointeam"
      scrollBehavior={"smooth"}
      direction="column"
      pt={{ base: 20, lg: 40 }}
      color="white"
      bg="rgba(3, 0, 30, 1)"
    >
      <Heading
        color={"rgba(235, 154, 133, 1)"}
        fontSize={{
          base: "2xl",
          sm: "3xl",
          lg: "5xl",
        }}
        textAlign={{
          base: "center",
          sm: "center",
        }}
        pl={{ base: 8, sm: 4, md: 0 }}
        pr={{ base: 4, sm: 4, md: 0 }}
        mb={{ base: 4, lg: 10 }}
      >
        Want to get in touch with us?
      </Heading>
      <Heading
        color={"rgba(235, 154, 133, 1)"}
        fontSize={{
          base: "1xl",
          sm: "2xl",
          lg: "3xl",
        }}
        textAlign={{
          base: "center",
          sm: "center",
        }}
        pl={{ base: 8, sm: 4, md: 0 }}
        pr={{ base: 4, sm: 4, md: 0 }}
        mb={{ base: 4, lg: 10 }}
      >
        Reach out to us anytime!
      </Heading>
      <Flex
        grow={1}
        direction={"column"}
        justify={"center"}
        alignItems={"center"}
        px={8}
      >
        <Flex>
          <Link href="mailto: contact@theopportunitiesportal.com">
            <Button
              fontWeight="bold"
              fontSize={{ base: "md", lg: "lg" }}
              color="black"
              w="200px"
              h="50px"
              sx={{
                background: "rgba(255, 255, 255, 1)",
                borderRadius: "12px",
                boxShadow: "0px 0px 0px 6px rgba(76, 80, 158, 1)",
                _hover: {
                  transform: "scale(1.2)",
                },
              }}
              my={14}
            >
              Write to us! 
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
