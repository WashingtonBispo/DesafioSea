import styled from 'styled-components';
import { Modal }  from '@chakra-ui/react'

export const BodyContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #fffaaf;
`;

export const Title = styled.h1`
    font-family:'Times New Roman', Times, serif, "Helvetica Neue", HelveticaNeue, Arial, sans-serif;
    font-weight: normal;
    font-size: 40px; 
`;

export const MyModal = styled(Modal)`
    background-color: #fffaaf;
    border: 2px solid rgba(0,0,0,.16);
    border-radius: 8px;
    width:40%;
`;