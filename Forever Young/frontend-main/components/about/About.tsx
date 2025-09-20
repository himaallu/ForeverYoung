import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box id="about">
      <Center>
        <Heading
          fontSize={{
            base: "3rem",
            md: "4rem",
          }}
          mt={{
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
          About Us
        </Heading>
      </Center>
      <Flex
        m={{
          base: "1rem",
          md: "2rem",
        }}
      >
        <Flex
          justify="center"
          align="center"
          flexBasis="50%"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <img
            src="/images/logo-white.svg"
            color="white"
            alt="The opprtunities Portal Logo"
            width="60%"
          />
        </Flex>
        <Box
          flexBasis={{
            base: "100%",
            md: "50%",
          }}
        >
          <Text
            m={{
              base: "2rem",
              md: "4rem",
            }}
            textAlign="center"
            fontSize={{
              base: "1rem",
              md: "1.2rem",
            }}
            fontWeight="bold"
            color="white"
          >
            Welcome to the Opportunities Portal, where talented individuals and
            startups connect for mutual success. Our platform connects skilled
            and motivated job seekers with companies looking for top talent,
            creating a win-win for everyone. For all our users we have a
            separate platform to help them find what they are looking for after
            completing their profiling and navigating through the demand and
            supply of the industry around them.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default AboutUs;
