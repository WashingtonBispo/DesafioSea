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
  const handleChangeName = (event) => setName(event.target.value);

  const handleSubmitForms = () => {
    const CreateUser = async () => {
        try{
            const userData = {
                name,
                email,
                password
            }

            const responseData = await api.post("User", userData);
            const token = responseData.data.jwt;
    
            dispatch(
              authAction.logIn({
                token
              })
            );
            window.location.reload(false);
        }
        catch(err){
            console.log(err);
        }
    }

    CreateUser();
    onClose();
}


  return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Cadastrar</ModalHeader>
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
                    <Text mb='8px'>Nome</Text>
                    <InputGroup size='md'>
                        <Input
                        value={name}
                        onChange={handleChangeName}
                        pr='4.5rem'
                        type='text'
                        />
                    </InputGroup>
            </ModalBody>
            <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={handleSubmitForms}>
                Entrar
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
  );
};

export default SignUpModal;