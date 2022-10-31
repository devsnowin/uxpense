import Link from 'next/link'
import {Flex, Heading, Stack, Text, Button} from "@chakra-ui/react";

import {useAuth} from "../context/auth";

const Header = () => {
    const {authUser, logout, isLoading} = useAuth()

    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} h={"28"}>
            <Heading>Uxpense</Heading>
            <Stack direction={"row"} gap={"2"} alignItems={"center"}>
                <Text>{authUser?.email}</Text>
                <Button as={Link} href={"/"} isLoading={isLoading} onClick={logout}>Logout</Button>
            </Stack>
        </Flex>
    )
}

export default Header
