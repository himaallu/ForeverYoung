import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

function ServiceCard({
  heading,
  description,
  image,
  buttonLink,
}: {
  heading: string;
  description: string;
  image: string;
  buttonLink: string;
}) {
  return (
    <LinkBox>
      <Card maxW="sm" bg={"whiteAlpha.600"}>
        <CardBody>
          <Image src={image} borderRadius="lg" w={340} />
          <Stack mt="6" spacing="3">
            <LinkOverlay as={NextLink} href={buttonLink}>
              <Heading size="md">{heading}</Heading>
            </LinkOverlay>
            <Text>{description}</Text>
          </Stack>
        </CardBody>
      </Card>
    </LinkBox>
  );
}

export default ServiceCard;
