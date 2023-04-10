import React, { useEffect, useState } from 'react';

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

import SignUpModal from '../SignUpModal';
import SignInModal from "../SignInModal";

import { useToast, useDisclosure } from '@chakra-ui/react'

import {
    HeaderContainer
} from './styles';

const Header = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isSignOpen, 
            onOpen: onSignOpen, 
            onClose: onSignClose } = useDisclosure()

  return (
    <>
      <HeaderContainer>
      <Button onClick={onSignOpen}>Logar</Button>
<Button onClick={onOpen}>Cadastrar</Button>
      </HeaderContainer>
    


      <SignInModal
        isOpen = {isSignOpen}
        onClose = {onSignClose}>
      </SignInModal>

      <SignUpModal
        isOpen = {isOpen}
        onClose = {onClose}>
      </SignUpModal>
    </>
  );
};

      


export default Header;