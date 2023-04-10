import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import authAction from "../../store/action/auth";

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

import { api } from "../../services/api";

const SignUpModal = (props) => {
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => setEmail(event.target.value);

  const handleChangePassword = (event) => setPassword(event.target.value);

  const handleSubmitForms = () => {
    const Login = async () => {
        try{
            const userData = {
                email,
                password
            }

            const responseData = await api.get("User", { params : { email: userData.email, password: userData.password}});
            const token = responseData.data.jwt;
    
            dispatch(
              authAction.logIn({
                token
              })
            );

        }
        catch(err){
            console.log(err);
        }
    }

    Login();
    onClose();
}

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
                        value={password}
                        onChange={handleChangePassword}
                        pr='4.5rem'
                        type='password'
                        />
                    </InputGroup>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={handleSubmitForms}>
                Cadastrar
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  );
};

export default SignUpModal;