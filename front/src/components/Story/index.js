import React, { useEffect, useState } from 'react';

import { 
    Icon
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { api } from "../../services/api";

import {
    StoryContainer,
    StoryArea,
    InfoArea,
    LikesText
} from './styles';
import { AiTwotoneHeart, AiOutlineScissor } from 'react-icons/ai'


const Story = (props) => {
  const token = useSelector((state) => state.authReducer.token);
  const story = props.story;
  const [likesQtd, setlikesQtd] = useState(story.likes.length)
  const [email, setEmail] = useState("");
  const [liked, setLiked] = useState(false);

  
  const handleLike = () => {
    const Like = async () => {
        try{
          const StoryData = {
            idStory: story.idStory,
            email,
            status: !liked
          }

          await api.put("Story", StoryData);
      }
      catch(err){
          console.log(err);
      }
  
  }
  Like();
  }

  const handleRemove = () => {
    const Like = async () => {
        try{
          await api.delete("Story", { params: {idStory: story.idStory}});
          window.location.reload(false);
      }
      catch(err){
          console.log(err);
      }
  
  }
  Like();
  }


  const Like = (e) => {
      handleLike();
      setLiked(!liked);
    }
    
  useEffect(() => {
        const decoded = !!token ? jwt_decode(token) : null;
        
        if(decoded){

            setEmail(decoded.email);
            
            if(story.likes.find(x => x === decoded.email)){
                setLiked(true);
                setlikesQtd(likesQtd -liked);
            }
        }
  }, [email, token]);


  return (
    <>
      <StoryContainer>
        <StoryArea>

      <p 
          fontSize='20px' 
          color="#3F4254" 
          marginLeft="8px"
          marginBottom="8px"
          fontWeight="bold"
          >
          {story.storyText}
        </p>
      </StoryArea>
      <InfoArea>
        <LikesText>
            {likesQtd + liked} likes
        </LikesText>
        <div>
        {
            (email && story.author===email?
                <><Icon
                fontSize="16px"
                marginRight="16px"
                onClick={() => handleRemove()} 
                as={AiOutlineScissor} /></>
                :<></>
            )
        }
        <Icon
            fontSize="16px"
            color={liked? "red": ""}
            onClick={() => Like()} 
            as={AiTwotoneHeart} />
        </div>
        </InfoArea>

      </StoryContainer>
    </>
  );
};

export default Story;