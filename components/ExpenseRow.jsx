import React from 'react'
import { Flex, HStack, IconButton, Stack, Text, VStack } from '@chakra-ui/react'
import {MdDelete, MdEdit} from 'react-icons/md'

const ExpenseRow = () => {
  return (
    <HStack w="full" px="2" justifyContent={"space-between"} gap="2">
        <Text fontWeight={"bold"}>Bank transfer</Text>
        <VStack alignItems={"flex-start"} justifyContent="center">
            <Text>18/09/2021</Text>
            <Text>₹200.45</Text>
        </VStack>
        <VStack alignItems={"flex-start"} rowGap="0rem">
            <Text>Main road, Brathi street - 617281</Text>
            <Text>Nuts and home applications</Text>
        </VStack>
        <IconButton icon={<MdDelete />} />
        <IconButton icon={<MdEdit />} />
    </HStack>
  )
}

export default ExpenseRow