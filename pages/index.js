import { Button, Flex, Grid, Heading, Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { SiPlausibleanalytics } from "react-icons/si";

export default function Home() {
  return (
    <Grid placeItems="center" minH="100vh">
      <Flex flexDirection="column" gap="1rem" alignItems="center">
        {/* <Icon as={SiPlausibleanalytics} w={16} h={16} /> */}
        <Heading>Welcome to Uxpense 🎉</Heading>
        <Flex as={Button} w="max-content" alignItems="center" gap="0.5rem">
          <Icon as={FcGoogle} w={6} h={6} />
          Sign In with Google
        </Flex>
      </Flex>
    </Grid>
  );
}
