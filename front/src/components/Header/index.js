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

import jwt_decode from "jwt-decode";
import SignUpModal from '../SignUpModal';
import SignInModal from "../SignInModal";
import { useSelector, useDispatch, } from "react-redux";
import { useToast, useDisclosure } from '@chakra-ui/react'
import authAction from '../../store/action/auth';
import { useNavigate } from "react-router-dom";

import {
    HeaderContainer,
    MyButton
} from './styles';

const Header = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector((state) => state.authReducer.token);
    const decoded = !!token ? jwt_decode(token) : null;

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen:isSignOpen, 
            onOpen: onSignOpen, 
            onClose: onSignClose } = useDisclosure()

    const handleLogOff = () => {
        dispatch(
            authAction.logOut()
            );
            navigate("/");
        }
        
  return (
    <>
    
        <HeaderContainer>
            <div>
                <MyButton onClick={() => navigate("/")}>Home</MyButton>
                {decoded !== null ? (<>
                        <MyButton onClick={() => navigate("/profile")}>Perfil</MyButton>
                    </>
                    ):(<></>)

                }
            </div>
                {decoded == null ? (<>
                    <div>
                        <MyButton onClick={onSignOpen}>Logar</MyButton>
                        <MyButton onClick={onOpen}>Cadastrar</MyButton>
                    </div>
                    </>
                    ):(<>
                    <MyButton onClick={handleLogOff}>Sair</MyButton></>)

                }
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