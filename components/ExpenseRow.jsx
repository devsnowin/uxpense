import React from "react";
import {
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseRow = () => {
  return (
    <HStack w="full" p="4" justifyContent={"space-between"} bg="gray.200" rounded={"xl"}>
      <Text fontWeight={"bold"} style={{ padding: "0 !important" }}>
        Bank transfer
      </Text>
      <VStack alignItems={"flex-start"} justifyContent="center">
        <Text>18/09/2021</Text>
        <Text>₹200.45</Text>
      </VStack>
      <VStack alignItems={"flex-start"} rowGap="0rem">
        <Text>Main road, Brathi street - 617281</Text>
        <Text>Nuts and home applications</Text>
      </VStack>
      <HStack gap={"2"} alignItems="center">
        <IconButton icon={<MdEdit />} colorScheme="teal" variant={"ghost"} />
        <IconButton icon={<MdDelete />} colorScheme="red" variant={"ghost"} />
      </HStack>
    </HStack>
  );
};

export default ExpenseRow;
