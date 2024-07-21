import styled from "styled-components";

import { useEffect } from "react";
import ShuffleText from "./shuffle"

import { LanguageContext } from './LanguageContext';
import React, { useContext } from 'react';

const CardFunction = styled.section`
  position: absolute;
  top: calc(100vmin * 0.5);
  left: 50%;
  color: white;
  text-align: left;
  transform:translate(-50%,-30%);
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  `
  const CardBlue = styled.span`
    color: #18B6FF;`

  const CardGreen = styled.span`
    color: #1BEB9E;`

  const CardOrange = styled.span`
    color: #FF9528;`

  const CardPink = styled.span`
    color: #FF45B4;`

  const CardPurple = styled.span`
    color: #B462FF;
    font-family: 'Chewy', cursive;
    font-size: 30px;`

  const CardYellow = styled.span`
    color: #FFFF00;`

function App() {

  const texts = {
    english: 'Hi, I’m Gael Delescluse and this is my Website',
    français: 'Salut, je suis Gael Delescluse et ceci est mon Website'
  };

  const { language, setLanguage } = useContext(LanguageContext);
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    console.log(lang)
  };

  useEffect(() => {

    var el1 = document.getElementById("el1");
    var el2 = document.getElementById("el2");
    var el3 = document.getElementById("el3");
    var el4 = document.getElementById("el4");
    var el5 = document.getElementById("el5");
    var el6 = document.getElementById("el6");
    var el7 = document.getElementById("el7");
    var el8 = document.getElementById("el8");
    var el9 = document.getElementById("el9");
    var el10 = document.getElementById("el10");
    var el11 = document.getElementById("el11");
    var el12 = document.getElementById("el12");
    var el13 = document.getElementById("el13");

    var shuffle1 = new ShuffleText(el1);
    var shuffle2 = new ShuffleText(el2);
    var shuffle3 = new ShuffleText(el3);
    var shuffle4 = new ShuffleText(el4);
    var shuffle5 = new ShuffleText(el5);
    var shuffle6 = new ShuffleText(el6);
    var shuffle7 = new ShuffleText(el7);
    var shuffle8 = new ShuffleText(el8);
    var shuffle9 = new ShuffleText(el9);
    var shuffle10 = new ShuffleText(el10);
    var shuffle11 = new ShuffleText(el11);
    var shuffle12 = new ShuffleText(el12);
    var shuffle13 = new ShuffleText(el13);

    shuffle1.start();
    shuffle2.start();
    shuffle3.start();
    shuffle4.start();
    shuffle5.start();
    shuffle6.start();
    shuffle7.start();
    shuffle8.start();
    shuffle9.start();
    shuffle10.start();
    shuffle11.start();
    shuffle12.start();
    shuffle13.start();
  })
  
  console.log(texts[language])
  return (
    <CardFunction>
      <CardBlue id="el1">Class</CardBlue> <CardGreen id="el2">Website</CardGreen> = &#40;<CardOrange id="el3">haDock404</CardOrange>&#41; =&gt; &#123;
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CardPink id="el4">const</CardPink> <CardYellow id="el5">bio</CardYellow> = <CardPurple id="el6">“Hi, I’m Gael Delescluse and this is my Website”</CardPurple>
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CardPink id="el7">let</CardPink> <CardOrange id="el8"  onClick={() => handleLanguageChange('english')}>english;</CardOrange>
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CardPink id="el9">let</CardPink> <CardOrange id="el10"  onClick={() => handleLanguageChange('français')}>français;</CardOrange>
      <br />
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CardPink id="el11">return</CardPink> <CardYellow id="el12">bio</CardYellow>(<CardOrange id="el13">{language}</CardOrange>)
      <br />
      <br />
      &#125;
    </CardFunction>
  )
}

export default App;