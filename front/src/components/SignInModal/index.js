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

const SignUpModal = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  
  const handleChangeEmail = (event) => setEmail(event.target.value);

  const handleChangePassword = (event) => setPassword(event.target.value);


  return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Entrar</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Text mb='8px'>E-mail</Text>
                    <InputGroup size='md'>
                        <Input
                        value={email}
                        onChange={handleChangeEmail}
                        pr='4.5rem'
                        type='text'
                        />
                    </InputGroup>
                    <Text mb='8px'>Senha</Text>
                    <InputGroup size='md'>
                        <Input
                        value={email}
                        onChange={handleChangeEmail}
                        pr='4.5rem'
                        type='text'
                        />
                    </InputGroup>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose}>
                Cadastrar
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  );
};

export default SignUpModal;