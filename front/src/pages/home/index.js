import React, {useEffect, useState} from "react";

import {
    BodyContainer,
    Title
  } from './styles';

import Story from '../../components/Story'

const Home = () => {
    return (
        <>
            <BodyContainer>
                <Title>
                    HISTÓRIA SEM GRAÇA
                </Title>
            <Story
            text = "fui botar catchup na batata frita mas esqueci de sacudir ai saiu agua primeiro"
            likes = "13"
            ></Story>
            </BodyContainer>
        </>
    )
}

export default Home;