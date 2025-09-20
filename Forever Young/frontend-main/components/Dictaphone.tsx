import React, { useEffect, useState } from "react";
import {
  SpeechSegment,
  stateToString,
  useSpeechContext,
} from "@speechly/react-client";
import { SegmentItem } from "./SegmentItem";
import axios from "axios";
import {
  Box,
  Button,
  Code,
  Divider,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0/client";

function App() {
  const [isVadEnabled, setIsVadEnabled] = useState(false);
  const [speechSegments, setSpeechSegments] = useState<SpeechSegment[]>([]);
  const [tentative, setTentative] = useState("");
  const [resultData, setResultData] = useState<{
    input_text: string;
    summary: string;
    keywords: string[];
    latest_articles: Array<{ title: string; link: string; snippet: string }>;
    nearby_places: Array<{ name: string; address: string; rating: string }>;
  }>({
    input_text: "",
    summary: "",
    keywords: [],
    latest_articles: [],
    nearby_places: [],
  });
  const { user, isLoading, error } = useUser();

  const {
    client,
    clientState,
    listening,
    microphoneState,
    segment,
    attachMicrophone,
    start,
    stop,
  } = useSpeechContext();

  useEffect(() => {
    if (segment) {
      const text = segment.words.map((w) => w.value).join(" ");
      setTentative(text);
      if (segment.isFinal) {
        setTentative("");
        setSpeechSegments((current) => [...current, segment]);
      }
    }
  }, [segment]);

  const handleMicPress = async () => {
    if (listening) {
      await stop();

      let text = "";
      document.querySelectorAll(".segment-content").forEach((el) => {
        text += el.textContent + " ";
      });

      text += tentative;

      const result = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/summarize`,
        {
          text: text,
        }
      );

      const data = JSON.parse(result.data);

      setResultData({
        ...resultData,
        input_text: data.input_text,
        summary: data.summary,
        keywords: data.keywords,
        latest_articles: data.latest_articles,
        nearby_places: data.nearby_places,
      });

      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
        email: user?.email,
        keywords: data.keywords,
      });
    } else {
      await attachMicrophone();
      await start();
    }
  };

  const handleVadPress = async () => {
    await attachMicrophone();
    await client?.adjustAudioProcessor({ vad: { enabled: !isVadEnabled } });
    setIsVadEnabled(!isVadEnabled);
  };

  const handleFileSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const arrayBuffer =
      evt.target.files && (await evt.target.files[0].arrayBuffer());
    if (arrayBuffer) {
      await client?.uploadAudioData(arrayBuffer);
    }
  };

  const handleClearPress = () => {
    setSpeechSegments([]);
    setTentative("");
  };

  return (
    <Box className="app" p={5}>
      <Box
        className="left"
        bg="purple.100"
        p={5}
        borderRadius="md"
        boxShadow="lg"
      >
        <Box className="status">
          <Code bg={"purple.200"} p={2} borderLeftRadius={8}>
            Client: <span>{stateToString(clientState)}</span>
          </Code>
          <Code bg={"purple.200"} p={2}>
            {" "}
            &middot;{" "}
          </Code>
          <Code bg={"purple.200"} p={2} borderRightRadius={8}>
            Microphone: <span>{microphoneState}</span>
          </Code>
        </Box>
        <Box className="toolbar" mt={4}>
          <Button onClick={handleMicPress} colorScheme="purple">
            {listening ? "Stop" : "Start"} microphone
          </Button>
        </Box>
        <Box className="transcript" mt={4}>
          {speechSegments?.map((segment) => (
            <SegmentItem
              key={`segment-${segment.contextId}-${segment.id}`}
              segment={segment}
            />
          ))}
        </Box>
        <Box className="tentative" mt={4}>
          {tentative}
        </Box>
        <Box mt={8}>
          <TableContainer>
            <Heading>Result</Heading>
            <Table variant="simple" colorScheme="black">
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Input Text</Td>
                  <Td>{resultData.input_text}</Td>
                </Tr>
                <Tr>
                  <Td>Summary</Td>
                  <Td>{resultData.summary}</Td>
                </Tr>
                <Tr>
                  <Td>Keywords</Td>
                  <Td>{resultData.keywords.join(", ")}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Divider mt={5} mb={5} />
          {/* <TableContainer> */}
          <Heading>Relevant Articles</Heading>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Link</Th>
                <Th>Snippet</Th>
              </Tr>
            </Thead>
            <Tbody>
              {resultData.latest_articles.map((article, index) => (
                <Tr key={index}>
                  <Td>{article.title}</Td>
                  <Td>{article.link}</Td>
                  <Td>{article.snippet}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          {/* </TableContainer> */}
          <Divider mt={5} mb={5} color={"blackAlpha.800"} />
          <TableContainer>
            <Heading>Suggested places</Heading>

            <Table variant={"striped"}>
              <Thead>
                <Tr>
                  <Th>Place Name</Th>
                  <Th>Address</Th>
                  <Th>Rating</Th>
                </Tr>
              </Thead>
              <Tbody>
                {resultData.nearby_places.map((place, index) => (
                  <Tr key={index}>
                    <Td>{place.name}</Td>
                    <Td>{place.address}</Td>
                    <Td>{place.rating == "0" ? "-" : place.rating}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
