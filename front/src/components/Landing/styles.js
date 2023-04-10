import styled from 'styled-components';

export const LandingContainer = styled.div`
  border-radius: 8px;
  margin: 16px;
  display:flex;
  justify-content: space-evenly;
`;

export const RateContainer = styled.p`
  padding: 16px;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
  justify-content: center;
`;

export const CreateContainer = styled.div`
padding: 16px;
display: flex;
flex-direction: column;
text-align: left;
align-items: center;
justify-content: center;
`;

export const WhiteBoard = styled.div`
    width: 520px;
    height: 230px;
    padding:16px;
    margin-top: 16px;
    margin-bottom: 16px;
    background-color:white;
`;

export const WriteBoard = styled.textarea`
width: 520px;
height: 230px;
padding:16px;
margin-top: 16px;
margin-bottom: 16px;
background-color:#ece6ac;
`;

export const SplitLine = styled.div`
height: 350px;
width: 1px;
background-color: #000;
display: block;
float: left;
margin-left: 2%;
margin-right: 1%;
`;

export const MyButton = styled.button`
    text-transform: lowercase;
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
`;

export const StoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;