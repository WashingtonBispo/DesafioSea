import React, { useCallback, useEffect, useState } from 'react';
import { StoriesContainer } from './styles';
import { useToast } from '@chakra-ui/react'
import { api } from "../../services/api";
import Story from '../Story';

const Stories = (props) => {
    const [stories, setStories]  = useState([]);
    const email = props.email;
    const toast = useToast();

    const showErrorToast = useCallback((message) => {
      toast({
        title: message,
        position: "top-right",
        status: "error",
        isClosable: true,
      });
    }, [toast]);

    
    const getStories =  useCallback(async () => {
        try 
        {
            if(email === undefined || email === ""){
                const responseData = await api.get("Story");
                setStories(responseData.data);
            }
            else{
                const responseData = await api.get("Story",  { params : { email: email }});
                setStories(responseData.data);
                console.log(responseData.data)
            }
            
            
            console.log("-----------",stories);
        } catch (e)
        {
          showErrorToast("O Servidor está meio sem graça hoje!");
        }
      },  [showErrorToast, email])

    useEffect(() => {
        getStories();
    }, [getStories]);

    return (
    <>
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

      


export default Stories;