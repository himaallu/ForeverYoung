import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import TeamMember from "./TeamMember";

const TeamData = [
  {
    name: "John Team",
    image: "/images/john.png",
    bio: "Plays the orchestra",
  },
  {
    name: "Abhinav Dubey",
    image: "/images/abhinav.png",
    bio: "Quantifying qualities",
  },
  {
    name: "Sahil Kaling",
    image: "/images/sahil.png",
    bio: "Master of the 'it's not a bug, it's a feature' excuse",
  },
  // {
  //   name: "Tanmay Vyas",
  //   image: "/images/tanmay.png",
  //   bio: "Still overthinking this line",
  // },
  // {
  //   name: "John Tony",
  //   image: "/images/john.png",
  //   bio: "Loves when stuff just works",
  // },
  // {
  //   name: "Rupam Mal",
  //   image: "/images/rupam.png",
  //   bio: "An unsolvable paradox with a dry sense of humour ",
  // },

  // {
  //   name: "Bhavesh Sathiyamurthy",
  //   image: "/images/bhavesh.png",
  //   bio: "Can learn most of the things when experienced hands on",
  // },
  // {
  //   name: "Abeer Mathur",
  //   image: "/images/abeer.png",
  //   bio: "Designing a life worth living, one adventure at a time",
  // },
  // {
  //   name: "Amogh Ansh",
  //   image: "/images/amogh.png",
  //   bio: "Writing keeps me Running",
  // },
];

const OurTeam = () => {
  return (
    <Box>
      <Center>
        <Heading
          fontSize={{
            base: "3rem",
            md: "4rem",
          }}
          m={{
            base: "1rem",
            md: "2rem",
          }}
          sx={{
            background: "linear-gradient(180deg, #B981CF, #9098CC)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          Our Team
        </Heading>
      </Center>
      <Flex
        justify="center"
        align="center"
        flexWrap="wrap"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        gap="12"
      >
        {TeamData.map((member) => (
          <TeamMember
            name={member.name}
            image={member.image as string}
            bio={member.bio}
            key={member.name}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default OurTeam;
