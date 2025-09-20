import { Box, Center , Text} from "@chakra-ui/react";

const TeamMember = ({
  name,
  image,
  bio,
}: {
  name: string;
  image: string;
  bio: string;
}) => {
  return (
    <Box
      background={
        "linear-gradient(225deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), #03001E"
      }
      flexBasis={{
        base: "100%",
        md: "20%",
      }}
      mx={{
        base: "4rem",
        md: "2rem",
      }}
      my={{
        base: "2rem",
      }}
      p="1rem"
    >
      <Center>
        <img src={image} alt={name} style={{"height":"200px"}} />
      </Center>
      <Box
        m="2rem"
        textAlign="center"
        textColor="white"
      >
        <Center fontSize={24} fontWeight={"bold"} >{name}</Center>
        <br />
        <Text fontSize={18} >{bio}</Text> 
      </Box>
    </Box>
  );
};

export default TeamMember;
