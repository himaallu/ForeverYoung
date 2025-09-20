import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "../../styles/Users.module.css";
import { usersImageVariant } from "./UserCard";
import { UserCard } from "./UserCard";
import {
  fundingInstitution,
  researcher,
  startup,
  student,
} from "./UserCard.data";

class User {
  type: String;
  heading: String;
  content: String;
  image: String;

  constructor(type: String, heading: String, content: String, image: String) {
    this.type = type;
    this.heading = heading;
    this.content = content;
    this.image = image;
  }
}

export type UserType = {
  type: String;
  heading: String;
  content: String;
  image: String;
};

export const Users = () => {
  const [allUsers, setAllUsers] = useState([
    student,
    startup,
    researcher,
    fundingInstitution,
  ]);

  const variants = {
    initial: {
      x: 100,
      opacity: 0.5,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -100,
      opacity: 0.5,
    },
  };

  const [firstCardReloader, setFirstCardReloader] = useState(true);

  return (
    <Flex
      id="users"
      direction="column"
      minH="100vh"
      pt={{ base: "48px", md: "60px" }}
      color="white"
      bg="rgba(3, 0, 30, 1)"
      position={"relative"}
      zIndex={10}
    >
      <Heading
        textAlign={"center"}
        fontSize={{
          base: "xl",
          md: "4xl",
        }}
        mb={{ base: 4, md: 32 }}
        sx={{
          background: "linear-gradient(180deg, #B981CF 0%, #9098CC 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        maxW={{ base: 500, md: 700 }}
        px={4}
        mx="auto"
      >
        Empowering everyone to reach their full potential - one user at a time!
      </Heading>
      <Box
        position={"absolute"}
        top={{ base: 105, md: 160 }}
        w="50vw"
        h={{ base: 12, md: 16 }}
        borderRight={"2px solid rgba(120, 73, 137, 1)"}
      />
      <Box
        position={"absolute"}
        top={{ base: 100, md: 222 }}
        ml="20vw"
        w="30vw"
        h={{ base: 12, md: 24 }}
        borderTop={{ md: "2px solid rgba(120, 73, 137, 1)" }}
        borderLeft={{ md: "2px solid rgba(120, 73, 137, 1)" }}
      />
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        justify={{ base: "start", sm: "start", md: "space-around" }}
        align={"center"}
        flexGrow={1}
      >
        <Box className="users" pt={{ base: 12 }}>
          <Heading
            color={"#784989"}
            textAlign="center"
            fontSize={{
              base: "2xl",
              md: "4xl",
            }}
          >
            Users
          </Heading>
          <Image
            key={allUsers[0].image as React.Key}
            as={motion.img}
            exit="exit"
            src={`/images/${allUsers[0].image}User.svg`}
            alt="user making plans"
            w={{ base: "300px", md: "400px" }}
            h={{ base: "300px", md: "400px" }}
            variants={usersImageVariant}
            initial="hidden"
            animate="visible"
            mx="auto"
          />
        </Box>
        <Flex>
          <Flex
            w={{ base: "100%", md: "100%" }}
            // bg={"#12102c"}
            borderRadius={32}
            direction={{ base: "column", sm: "row" }}
            mx={8}
            position="relative"
          >
            <Flex
              className={`${styles.cardWrap} ${styles.trans}`}
              mt={{ base: "0px", md: "150px" }}
              justifyContent="center"
            >
              {allUsers.map((singleUser: UserType, i: number) => (
                <UserCard
                  key={i as React.Key}
                  index={i}
                  user={singleUser}
                  image={singleUser.image}
                  cn={`${styles.card} ${singleUser.type}`}
                  allUsers={allUsers}
                  setAllUsers={setAllUsers}
                  firstCardReloader={firstCardReloader}
                  setFirstCardReloader={setFirstCardReloader}
                />
              ))}
            </Flex>
            <Flex
              className="HELLO"
              position={"absolute"}
              display={{ base: "none", md: "flex" }}
              left={0}
              bottom={0}
              w="100%"
              transform="translate(-50%, 100%)"
              direction={"column"}
              align="end"
            >
              <Box
                h={{ md: "84px", lg: "96px" }}
                w={{ md: "50%", lg: "100%" }}
                borderRight="2px solid rgba(9, 126, 160, 1)"
                borderBottom="2px solid rgba(9, 126, 160, 1)"
                zIndex={2}
              />
              <Box
                w={{ md: "50%", lg: "100%" }}
                h={{ md: "84px", lg: "96px" }}
                borderLeft="2px solid rgba(9, 126, 160, 1)"
              />
            </Flex>
            <Box
              position="absolute"
              left={{ base: "0px" }}
              bottom="0px"
              transform={"translateY(100%)"}
              display={{ base: "block", md: "none" }}
              w="50%"
              h="48px"
              borderRight="2px solid rgba(9, 126, 160, 1)"
            />
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
};
