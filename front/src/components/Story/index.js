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
  const story = props.story;
  const status = props.status;


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
          {story.storyText}
        </p>
      </StoryArea>
      <InfoArea>
        <LikesText>
            {story.likes.length} likes
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