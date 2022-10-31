import {useRouter} from 'next/router'
import {Button, Flex, Grid, Heading, Icon} from "@chakra-ui/react";
import {FcGoogle} from "react-icons/fc";

import {useAuth} from "../context/auth";
import {useEffect} from "react";


export default function Home() {
    const router = useRouter()
    const {login, isLoading, authUser} = useAuth()

    useEffect(() => {
        if (authUser && !isLoading) {
            router.push('/home')
        }
    }, [authUser, isLoading])

    return (
        <Grid placeItems="center" minH="100vh">
            <Flex flexDirection="column" gap="1rem" alignItems="center">
                <Heading>Welcome to Uxpense 🎉</Heading>
                <Flex
                    as={Button}
                    w="max-content"
                    alignItems="center"
                    gap="0.5rem"
                    onClick={login}
                    isLoading={isLoading}
                >
                    <Icon as={FcGoogle} w={6} h={6}/>
                    Sign In with Google
                </Flex>
            </Flex>
        </Grid>
    );
}
