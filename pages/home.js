import { useRouter } from "next/router";
import { Box, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";

import { useAuth } from "../context/auth";
import Header from "../components/Header";
import { useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseRow from "../components/ExpenseRow";

const Home = () => {
  const router = useRouter();
  const { authUser, isLoading } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (!authUser && !isLoading) {
      router.push("/");
    }
  }, []);

  return (
    <Box mx={{
        base: '12',
        md: '24',
        xl: '32'
    }}>
      <Header />
      <Flex
        flexDir="column"
        // justifyContent="center"
        alignItems="center"
        minH="100vh"
        mx={"auto"}
        gap={"2"}
      >
        <ExpenseRow />
        <IconButton
          icon={<IoIosAddCircle />}
          position={"fixed"}
          bottom={10}
          right={10}
          fontSize={"5xl"}
          bg={"transparent"}
          aria-label={"add expense"}
          _active={'background: "transparent"'}
          _hover={'background: "transparent"'}
          onClick={onOpen}
        />
        <ExpenseForm isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Box>
  );
};

export default Home;
