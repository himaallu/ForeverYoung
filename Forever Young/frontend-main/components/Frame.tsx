import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Frame({ children }: { children: React.ReactNode }) {
  const { user, isLoading, error } = useUser();

  return (
    <Flex minH={"100vh"} bg={"#b18ee9"} direction={"column"} pb={12}>
      <Flex
        w={"100vw"}
        p={4}
        borderBottom={"2px solid rgba(0,0,0,0.1)"}
        justify={"space-between"}
        align={"center"}
        color={"white"}
      >
        <Link href={"/"}>
          <Image src="/images/logo-white.svg" w={"156px"} />
        </Link>
        {user ? (
          <Link href={"/api/auth/logout"}>Logout</Link>
        ) : (
          <Link href={"/api/auth/login"}>Login</Link>
        )}
      </Flex>
      <Box flexGrow={"1"} justifySelf={"center"}>
        {children}
      </Box>
    </Flex>
  );
}

export default Frame;
