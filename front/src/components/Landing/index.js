import React, { useEffect, useState } from 'react';

import { 
  Text
} from '@chakra-ui/react'

import {
    LandingContainer,
    CreateContainer,
    RateContainer,
    WhiteBoard,
    WriteBoard,
    SplitLine,
    MyButton
} from './styles';


const Landing = (props) => {
  const text = props.text;
  const Like = (e) => {
    alert("nha")
  }

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
        <strong>Julgue uma história</strong>
                    <p>
                        Ela é sem graça?
                    </p>
                    <WriteBoard>
                        auau
                    </WriteBoard>
                    <MyButton onMouseOver={(e) => changeBackground(e, "#c7dc75")} onMouseOut={(e) => changeBackground(e, "transparent")}>Enviar</MyButton>
        </CreateContainer>
      </LandingContainer>
    </>
  );
};

export default Landing;