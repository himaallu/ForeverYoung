import { Flex } from "@chakra-ui/react";
import Navbar from "../Navbar";
import AboutUs from "../about/About";
import OurTeam from "../about/OurTeam";
import { Footer } from "../Footer";

const About = () => {
  return (
    <Flex direction="column" bgColor="#03001E" minH="100vh">
      <AboutUs />
      <OurTeam />
      <Footer />
    </Flex>
  );
};

export default About;
