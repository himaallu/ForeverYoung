import React from "react";
import Frame from "../components/Frame";
import {
  Box,
  Heading,
  Table,
  TableContainer,
  Td,
  Tr,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0/client";

function CompanionFinder() {
  const [matchedUsers, setMatchedUsers] = React.useState<string[]>([]);
  const { user, isLoading, error } = useUser();

  React.useEffect(() => {
    const fetchMatchedUsers = async () => {
      console.log(user?.email);

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/matches`,
        {
          email: user?.email,
        }
      );

      setMatchedUsers(res.data.map((user: any) => user.email));
    };
    fetchMatchedUsers();
  }, []);

  return (
    <Frame>
      {/* <VStack mt={8}>
        {matchedUsers.map((mUser, i) => (
          <Box key={i}>{mUser}</Box>
        ))}
      </VStack> */}

      <TableContainer p={4}>
        <Heading textAlign={"center"}>Matched Users</Heading>
        <TableContainer>
          <Table variant={"striped"} colorScheme="purple" color={"black"}>
            {matchedUsers.map((mUser, i) => (
              <Tr key={i}>
                <Td>{mUser}</Td>
              </Tr>
            ))}
          </Table>
        </TableContainer>
      </TableContainer>
    </Frame>
  );
}

export default CompanionFinder;
