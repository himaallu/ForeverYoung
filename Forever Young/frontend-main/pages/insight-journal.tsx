import React from "react";
import Frame from "../components/Frame";
import Dictaphone from "../components/Dictaphone";
import { Box, Flex, Heading } from "@chakra-ui/react";

function InsightJournal() {
  return (
    <Frame>
      <Flex justifyContent={"center"} mt={4}>
        <Heading textAlign={"center"} bg={"purple.100"} borderRadius={12} p={2}>
          Insight Journal
        </Heading>
      </Flex>
      <Dictaphone />
    </Frame>
  );
}

export default InsightJournal;
