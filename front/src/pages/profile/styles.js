import styled from 'styled-components';
import { ModalContent }  from '@chakra-ui/react'

export const BodyContainer = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  background-color: #fffaaf;
`;

export const Title = styled.h1`
    font-family:'Times New Roman', Times, serif, "Helvetica Neue", HelveticaNeue, Arial, sans-serif;
    font-weight: normal;
    font-size: 40px; 
    margin-top: 16px;
`;

export const InfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #fffaaf;
    border: 3px solid #ece6ac;
    border-radius: 8px;
    width:20%;
    align-items: center;
    align-self: center;
`;

export const MyButton = styled.button`
    font-size: 18px;
    padding: 4px 20px;
    background-clip: padding-box;
    background-color: transparent;
    background-size: auto;
    border: 1px solid #333;
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    box-shadow: rgba(0,0,0,.2)0 1px 2px 0;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 16px;
`;