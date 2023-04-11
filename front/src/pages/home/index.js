import React, {useEffect, useState} from "react";
import {
    BodyContainer,
    Title,
    MyModal
  } from './styles';
  
  import { useToast, useDisclosure } from '@chakra-ui/react'
  import { 
    Input, 
    InputGroup, 
    InputRightElement, 
    Button, 
    Text,
    Icon,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import Landing from "../../components/Landing";

const Home = () => {
    return (
        <>
            <BodyContainer>
                <Title>
                    HISTÓRIA SEM GRAÇA
                </Title>
                <Landing
                    text= "fui botar catchup na batata frita mas esqueci de sacudir ai saiu agua primeiro">
                </Landing>  
            </BodyContainer>
        </>
    )
}

export default Home;