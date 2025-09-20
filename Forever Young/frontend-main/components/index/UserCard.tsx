import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import NextImage from "next/image";

import { UserType } from "./Users";
import styles from "../../styles/UserCard.module.css";

export const usersImageVariant = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const UserCard = ({
  user,
  image,
  cn,
  index,
  allUsers,
  setAllUsers,
  firstCardReloader,
  setFirstCardReloader,
}: {
  user: UserType;
  image: String;
  cn: string;
  index: number;
  allUsers: Array<UserType>;
  setAllUsers: React.Dispatch<React.SetStateAction<Array<UserType>>>;
  firstCardReloader: Boolean;
  setFirstCardReloader: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const userImageVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const userHeadingVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: index == 0 ? 1 : 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const [clickedCardReloader, setClickedCardReloader] = useState(false);

  return (
    <Flex
      w={{ base: "75%", md: "100%" }}
      h={{ base: "325px", lg: "400px" }}
      key={clickedCardReloader as unknown as React.Key}
      justify="center"
      align={index == 0 ? "center" : "start"}
      className={`${cn} ${index == 0 && styles.transformPrev} ${
        index !== 0 && styles.transformThis
      }`}
      borderRadius={32}
      zIndex={allUsers.length - index}
    >
      <Box
        id={`cardNumber${index}`}
        maxW="440px"
        p={8}
        position="relative"
        as={"button"}
        onClick={function () {
          setClickedCardReloader((oldValue) => !oldValue);
          document &&
            (document.querySelector("#cardNumber0")! as HTMLElement).click();

          setAllUsers((oldAllUsers) =>
            oldAllUsers.map((oldUser) => {
              if (oldUser == oldAllUsers[0]) {
                return user;
              } else if (oldUser === user) {
                return oldAllUsers[0];
              } else {
                return oldUser;
              }
            })
          );
        }}
      >
        <Flex mb={4}>
          <Box
            h={{ base: index == 0 ? "48px" : "0", md: "64px", lg: "64px" }}
            mr={4}
            position="relative"
            sx={{ aspectRatio: "1 / 1" }}
          >
            <NextImage
              key={image as React.Key}
              src={`/images/${image}.svg`}
              alt="ellipse"
              fill
              sizes="(max-width: 0px) 48px, (max-width: 900px) 64px, (max-width: 1150px) 64px"
            />
          </Box>
          <Box>
            <Heading
              as={motion.h2}
              key={user.type as React.Key}
              fontSize={{
                base: "xl",
                md: "2xl",
                lg: "3xl",
              }}
              textAlign="start"
              sx={{
                background: "linear-gradient(180deg, #FD8CA2 0%, #DA9A79 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textFillColor: "transparent",
              }}
              variants={userImageVariant}
              initial="hidden"
              animate="visible"
            >
              {user.type}
            </Heading>
            <Heading
              as={motion.h1}
              key={user.heading as React.Key}
              fontSize={{
                base: "lg",
                md: "xl",
                lg: "2xl",
              }}
              textAlign="start"
              color="#784989"
              mb={4}
              variants={userHeadingVariant}
              initial="hidden"
              animate="visible"
            >
              {user.heading}
            </Heading>
          </Box>
        </Flex>
        <Text
          as={motion.p}
          key={user.content as React.Key}
          fontSize={{
            base: "xs",
            md: "sm",
            lg: "md",
          }}
          variants={userImageVariant}
          initial="hidden"
          animate="visible"
          textAlign={"start"}
        >
          {user.content}
        </Text>
      </Box>
    </Flex>
  );
};
