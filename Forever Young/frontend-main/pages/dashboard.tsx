import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Frame from "../components/Frame";
import { Flex, HStack, Heading, SimpleGrid } from "@chakra-ui/react";
import ServiceCard from "../components/ServiceCard";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Dashboard() {
  const router = useRouter();
  const { user, isLoading, error } = useUser();

  console.log(user);

  // useEffect(() => {
  //   console.log(error || (!isLoading && user === undefined));
  //   if (error || (!isLoading && user === undefined)) {
  //     router.push("/api/auth/login");
  //   } else {
  //     console.log(user);
  //   }
  // }, [user]);

  return (
    <Frame>
      <Heading
        textAlign={"center"}
        mt={8}
        size={"3xl"}
        textDecoration={"underline"}
        color={"white"}
      >
        Our services
      </Heading>
      <SimpleGrid
        gap={12}
        minChildWidth={"400px"}
        justifyItems={"center"}
        mt={12}
        px={24}
      >
        <ServiceCard
          heading="Insight journal"
          description="The journaling tool is a safe and private space for seniors to express their feelings, thoughts, and experiences. Our NLP technology analyses each journal entry and allows seniors to stay informed and engaged with topics that interest them, while also providing insights into their own emotional well-being"
          buttonLink="/insight-journal"
          image="/images/insight-journal.svg"
        />
        <ServiceCard
          heading="Companion Finder"
          description="A tool that connects elders with compatible companions who share their interests and hobbies. It uses a unique algorithm to match users based on their interests, location, and other factors to help seniors find meaningful relationships that can combat loneliness and isolation."
          buttonLink="/companion-finder"
          image="/images/companion-finder.svg"
        />
        <ServiceCard
          heading="Symptoms Aid"
          description="Don't let health concerns go unnoticed. Our Symptom Aid helps you identify potential health issues and take preventative measures."
          buttonLink="/symptoms-aid"
          image="/images/symptoms-aid.svg"
        />
      </SimpleGrid>
    </Frame>
  );
}

export default Dashboard;

export const getServerSideProps = withPageAuthRequired();
