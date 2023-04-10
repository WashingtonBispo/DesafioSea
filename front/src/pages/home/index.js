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

import Story from '../../components/Story'
import Landing from "../../components/Landing";
import SignUpModal from "../../components/SignUpModal";
import SignInModal from "../../components/SignInModal"

const Home = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isSignOpen, 
            onOpen: onSignOpen, 
            onClose: onSignClose } = useDisclosure()



    return (
        <>
            <BodyContainer>
                <Title>
                    HISTÓRIA SEM GRAÇA
                </Title>
                <Landing
                    text= "fui botar catchup na batata frita mas esqueci de sacudir ai saiu agua primeiro">
                </Landing>
            <Story
            text = "fui botar catchup na batata frita mas esqueci de sacudir ai saiu agua primeiro"
            likes = "13"
            ></Story>

<Button onClick={onSignOpen}>Logar</Button>
<Button onClick={onOpen}>Cadastrar</Button>


      <SignInModal
        isOpen = {isSignOpen}
        onClose = {onSignClose}>
      </SignInModal>

      <SignUpModal
        isOpen = {isOpen}
        onClose = {onClose}>
      </SignUpModal>
      
            </BodyContainer>
        </>
    )
}

export default Home;