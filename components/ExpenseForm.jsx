import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const ExpenseForm = ({ isOpen, onClose }) => {
  const [error, setError] = useState({
    isError: false,
    msg: "",
  });

  const dateRef = useRef();
  const locnameRef = useRef();
  const locaddressRef = useRef();
  const itemsRef = useRef();
  const amountRef = useRef();

  const handleSubmit = () => {
    const date = dateRef.current.value;
    const locname = locnameRef.current.value;
    const locaddress = locaddressRef.current.value;
    const items = itemsRef.current.value;
    const amount = amountRef.current.value;

    if (
      date != "" ||
      locname != "" ||
      locaddress != "" ||
      items != "" ||
      amount != ""
    ) {
      console.log({
        date,
        locname,
        locaddress,
        items,
        amount,
      });
    } else {
      setError({
        isError: true,
        msg: "Please fill all fields",
      });
      setTimeout(() => {
        setError({
          isError: false,
          msg: "",
        });
      }, 3000);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Expense</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          {error.isError && (
            <Text mb="4" color={"red.500"}>
              {error.msg}
            </Text>
          )}
          <FormControl isRequired>
            <FormLabel>Date</FormLabel>
            <Input ref={dateRef} type={"date"} />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Location name</FormLabel>
            <Input ref={locnameRef} placeholder="add a location" />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Location address</FormLabel>
            <Input ref={locaddressRef} placeholder="add an address" />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Items</FormLabel>
            <Input ref={itemsRef} placeholder="add your items" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Amount</FormLabel>
            <NumberInput>
              <NumberInputField ref={amountRef} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} type="submit" onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ExpenseForm;
