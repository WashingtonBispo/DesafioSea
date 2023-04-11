import React, {useEffect, useState} from "react";
import {
    BodyContainer,
    Title,
    InfoContainer,
    MyButton
  } from './styles';

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
  
import { 
    Input, 
    InputGroup, 
    Text
  } from '@chakra-ui/react'

import jwt_decode from 'jwt-decode';
import Stories from "../../components/Stories";
import { useDispatch, } from "react-redux";
import authAction from '../../store/action/auth';
import { api } from "../../services/api";


const Profile = () => {
  const [email, setEmail] =useState('');
  const [name, setName] =useState('');
  const [password, setPassword] = useState('');
  const token = useSelector((state) => state.authReducer.token);

  const handleChangeName = (event) => setName(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  function changeBackground(e, color) {
    e.target.style.background = color;
}

const dispatch = useDispatch();
const navigate = useNavigate();

const handleEdit= () => {
    const Edit = async () => {
        try{
            const userData = {
                email,
                password,
                name
            }

            const responseData = await api.put("User", userData);
    
            window.location.reload(false);
        }
        catch(err){
            console.log(err);
        }
    }

    Edit();
}


const handleDelete = () => {
    const Login = async () => {
        try{
            const userData = {
                email,
                password
            }

            const responseData = await api.delete("User", userData);
            const token = responseData.data.jwt;
    
            window.location.reload(false);

            dispatch(
                authAction.logOut()
                );
                navigate("/");
        }
        catch(err){
            console.log(err);
        }
    }

    Login();
}

    useEffect(() => {
        const decoded = !!token ? jwt_decode(token) : null;

        if(decoded)
          setEmail(decoded.email);
      
      }, [token]);

    return (
        <>
            <BodyContainer>
                <Title>
                    PERFIL SEM GRAÇA
                </Title>

                <InfoContainer>
                <Text mb='8px'>Nome</Text>
                    <InputGroup 
                        width="80%">
                        <Input
                        value={name}
                        onChange={handleChangeName}
                        pr='4.5rem'
                        type='text'
                        />
                    </InputGroup>
                    <Text mb='8px'>Senha</Text>
                    <InputGroup
                        width="80%" >
                        <Input
                        value={password}
                        onChange={handleChangePassword}
                        pr='4.5rem'
                        type='password'
                        />
                    </InputGroup>

                    <div>
                        <MyButton onClick={handleEdit} onMouseOver={(e) => changeBackground(e, "#c7dc75")} onMouseOut={(e) => changeBackground(e, "transparent")}>Editar</MyButton>     
                        <MyButton onMouseOver={(e) => changeBackground(e, "#FF0000")} onMouseOut={(e) => changeBackground(e, "transparent")}>Deletar</MyButton>              
                    </div>
                    </InfoContainer>
                    <Title>
                    MINHAS HISTÓRIAS SEM GRAÇA
                </Title>
                <Stories
                    email={email}>
                </Stories>
            </BodyContainer>
        </>
    )
}

export default Profile;