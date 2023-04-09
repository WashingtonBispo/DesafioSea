import React, { useEffect, useState } from 'react';

import { 
  Text
} from '@chakra-ui/react'

import {
    StoryContainer,
    StoryArea,
    InfoArea,
    LikesText
} from './styles';

const Story = (props) => {
  const text = props.text;
  const status = props.status;
  const likes = props.likes;

  const Like = (e) => {
    alert("nha")
  }

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
          {text}
        </p>
      </StoryArea>
      <InfoArea>
        <LikesText>
            {likes} likes
        </LikesText>
        <button onClick={Like}>
            auau
        </button>
      </InfoArea>

      </StoryContainer>
    </>
  );
};

export default Story;