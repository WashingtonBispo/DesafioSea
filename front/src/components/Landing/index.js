import React, { useCallback, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { useToast } from '@chakra-ui/react'

import { api } from "../../services/api";
import Story from "../Story"
import {
    LandingContainer,
    CreateContainer,
    RateContainer,
    WhiteBoard,
    WriteBoard,
    SplitLine,
    MyButton,
    StoriesContainer
} from './styles';

const Landing = (props) => {
  const token = useSelector((state) => state.authReducer.token);
  const text = props.text;
  const [stories, setStories]  = useState([]);
  const [story, setStory] = useState('');
  const [email, setEmail] =useState('');

  const handleChangeStory = (event) => setStory(event.target.value);  
  
  
  const toast = useToast();

  const showErrorToast = useCallback((message) => {
    toast({
      title: message,
      position: "top-right",
      status: "error",
      isClosable: true,
    });
  }, [toast]);

  const handleNewStory = () => {
      const Enviar = async () => {
          try{
            const StoryData = {
                email,
                storyText: story
            }

            await api.post("Story", StoryData);
        }
        catch(err){
            console.log(err);
        }
    
    }
    Enviar();
    }

    const getStories = useCallback(async () => {
        try 
        {

          const responseData = await api.get("Story");
          setStories(responseData.data);
            console.log(stories);
        } catch (e)
        {
          showErrorToast("O Servidor está meio sem graça hoje!");
        }
      }, [showErrorToast])

useEffect(() => {
  getStories();
  const decoded = jwt_decode(token);
  
  setEmail(decoded.email);

}, [getStories, token]);

function changeBackground(e, color) {
    e.target.style.background = color;
}

  return (
    <>
      <LandingContainer>
        <RateContainer>
                <strong>Julgue uma história</strong>
                    <p>
                        Ela é sem graça?
                    </p>
                <WhiteBoard>
                    <p>
                        {text}
                    </p>
                </WhiteBoard>
                <div>
                    <MyButton onMouseOver={(e) => changeBackground(e, "#c7dc75")} onMouseOut={(e) => changeBackground(e, "transparent")}>Sim</MyButton>
                    <MyButton onMouseOver={(e) => changeBackground(e, "#FFFFFF")} onMouseOut={(e) => changeBackground(e, "transparent")}>Não sei, próxima</MyButton>
                    <MyButton onMouseOver={(e) => changeBackground(e, "#f4975e")} onMouseOut={(e) => changeBackground(e, "transparent")}>Não</MyButton>
                </div>
        </RateContainer>
        <SplitLine />
        <CreateContainer>
        <strong>Envie sua história</strong>
                    <p>
                    Se ela for sem graça, será publicada.
                    </p>
                    <WriteBoard
                    onChange={handleChangeStory}
                    value={story}></WriteBoard>
                    <MyButton onClick={handleNewStory} onMouseOver={(e) => changeBackground(e, "#c7dc75")} onMouseOut={(e) => changeBackground(e, "transparent")}>Enviar</MyButton>
        </CreateContainer>
      </LandingContainer>
      <StoriesContainer>
        {stories.map((story) =>{
            return ( 
                <Story
                    story = {story}
                ></Story>
            )
        }
        )}
      </StoriesContainer>
    </>
  );
};

export default Landing;