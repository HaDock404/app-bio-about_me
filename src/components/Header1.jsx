import styled from "styled-components"
import { Link } from 'react-router-dom'

import { useEffect } from "react"
import ShuffleText from "./shuffle"
//import '../styles/header1.css';

const CardHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `

const CardLogo = styled(Link)`
    color: #1BEB9E;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top: 15px;
    margin-left: 15px;
    width: 800px;
    height: 200px;
    overflow: none;
    white-space: nowrap;
    text-decoration: none;
    `

const CardItalic = styled.span`
    font-style: italic;
    `

const CardBold = styled.span`
    font-weight: 700;
    `

const CardNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding-top: 35px;
    `

const CardLink = styled(Link)`
    text-decoration: none;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    `

const CardBlue = styled.span`
    color: #18B6FF;
    `

const CardGrey = styled.span`
    color: #898989;
    `

const CardShuffle = styled.div`
    display: flex;
    flex-direction: row;`

function Header() {

    useEffect(() => {

        var line1 = document.getElementById("line1");
        var line2 = document.getElementById("line2");
        var line3 = document.getElementById("line3");
        var line4 = document.getElementById("line4");
        var line5 = document.getElementById("line5");
        var line6 = document.getElementById("line6");
        var line7 = document.getElementById("line7");
        var line8 = document.getElementById("line8");
        var line9 = document.getElementById("line9");
        var line10 = document.getElementById("line10");
        var line11 = document.getElementById("line11");

        var line1bis = document.getElementById("line1bis");
        var line2bis = document.getElementById("line2bis");
        var line3bis = document.getElementById("line3bis");
        var line4bis = document.getElementById("line4bis");
        var line5bis = document.getElementById("line5bis");
        var line6bis = document.getElementById("line6bis");
        var line7bis = document.getElementById("line7bis");
        var line9bis = document.getElementById("line9bis");
        var line9tier = document.getElementById("line9tier");
        var line10bis = document.getElementById("line10bis");
        var line10tier = document.getElementById("line10tier");

        var nav1 = document.getElementById("nav1");
        var nav1bis = document.getElementById("nav1bis");
        var nav2 = document.getElementById("nav2");
        var nav2bis = document.getElementById("nav2bis");
        var nav3 = document.getElementById("nav3");
        var nav3bis = document.getElementById("nav3bis");

        var text1 = new ShuffleText(line1);
        var text2 = new ShuffleText(line2);
        var text3 = new ShuffleText(line3);
        var text4 = new ShuffleText(line4);
        var text5 = new ShuffleText(line5);
        var text6 = new ShuffleText(line6);
        var text7 = new ShuffleText(line7);
        var text8 = new ShuffleText(line8);
        var text9 = new ShuffleText(line9);
        var text10 = new ShuffleText(line10);
        var text11 = new ShuffleText(line11);

        var text1bis = new ShuffleText(line1bis);
        var text2bis = new ShuffleText(line2bis);
        var text3bis = new ShuffleText(line3bis);
        var text4bis = new ShuffleText(line4bis);
        var text5bis = new ShuffleText(line5bis);
        var text6bis = new ShuffleText(line6bis);
        var text7bis = new ShuffleText(line7bis);
        var text9bis = new ShuffleText(line9bis);
        var text9tier = new ShuffleText(line9tier);
        var text10bis = new ShuffleText(line10bis);
        var text10tier = new ShuffleText(line10tier);

        var textnav1 = new ShuffleText(nav1);
        var textnav1bis = new ShuffleText(nav1bis);
        var textnav2 = new ShuffleText(nav2);
        var textnav2bis = new ShuffleText(nav2bis);
        var textnav3 = new ShuffleText(nav3);
        var textnav3bis = new ShuffleText(nav3bis);

        text1.start();
        text2.start();
        text3.start();
        text4.start();
        text5.start();
        text6.start();
        text7.start();
        text8.start();
        text9.start();
        text10.start();
        text11.start();

        text1bis.start();
        text2bis.start();
        text3bis.start();
        text4bis.start();
        text5bis.start();
        text6bis.start();
        text7bis.start();
        text9bis.start();
        text9tier.start();
        text10bis.start();
        text10tier.start();

        textnav1.start();
        textnav1bis.start();
        textnav2.start();
        textnav2bis.start();
        textnav3.start();
        textnav3bis.start();
    })

    return (
        <CardHeader>
            <CardLogo to='/'>
                <CardShuffle>
                    <CardItalic id='line1'>/</CardItalic><div id='line1bis'>**<br></br></div>
                </CardShuffle>

                <CardShuffle>
                    <div id="line2bis">* @</div><CardBold id="line2">author</CardBold><br></br>
                </CardShuffle>

                <CardShuffle>
                    <div id="line3bis">*</div><CardItalic id="line3">&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;_____&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;_____&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;__</CardItalic><br></br>
                </CardShuffle>
                
                <CardShuffle>
                    <div id="line4bis">*</div><CardItalic id="line4">&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/____&thinsp;&thinsp;_/&thinsp;&thinsp;&thinsp;&thinsp;___&thinsp;&thinsp;&thinsp;\____&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;______/&thinsp;&thinsp;&thinsp;/&thinsp;__/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;\/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/</CardItalic><br></br>
                </CardShuffle>
                
                <CardShuffle>
                    <div id="line5bis">*</div><CardItalic id="line5">&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;_/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;___&thinsp;`/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;\/&thinsp;&thinsp;&thinsp;____/&thinsp;&thinsp;&thinsp;/&thinsp;/&thinsp;_/&thinsp;&thinsp;&thinsp;/_/&thinsp;&thinsp;&thinsp;/_/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;/_/&thinsp;&thinsp;&thinsp;/_</CardItalic><br></br>
                </CardShuffle>
                
                <CardShuffle>
                    <div id="line6bis">*</div><CardItalic id="line6">&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;&thinsp;__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/__/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/__/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/&thinsp;_/&thinsp;&thinsp;&thinsp;/&thinsp;&thinsp;&thinsp;/___/&thinsp;&thinsp;&thinsp;,&lt;&thinsp;&thinsp;&thinsp;&thinsp;/__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;___/&thinsp;&thinsp;&thinsp;/&thinsp;_/&thinsp;&thinsp;&thinsp;/__&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;___/</CardItalic><br></br>
                </CardShuffle>
                
                <CardShuffle>
                    <div id="line7bis">*</div><CardItalic id="line7">/&thinsp;_/&thinsp;&thinsp;&thinsp;/&thinsp;_/\___&thinsp;,_/______/\_____/\____/&thinsp;_/|_|&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;/_/&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;\_____/&thinsp;&thinsp;&thinsp;&thinsp;/_/</CardItalic><br></br>
                </CardShuffle>

                <CardShuffle id="line8">
                    *<br></br>
                </CardShuffle>
                
                <CardShuffle>
                    <div id="line9bis">* @</div><CardBold id="line9">version</CardBold><div id="line9tier">&thinsp;2.1</div><br></br>
                </CardShuffle>
                
                <CardShuffle>
                    <div id="line10bis">* @</div><CardBold id="line10">created</CardBold><div id="line10tier">&thinsp;19-dec-2022 18:35:12<br></br></div>
                </CardShuffle>
                
                <CardShuffle id="line11">
                    *<CardItalic>/</CardItalic>
                </CardShuffle> 
            </CardLogo>

            <CardNav>
                <CardLink id="cardlink1" to="/projets">
                    <CardBlue id='nav1'>haDock404</CardBlue><CardGrey id='nav1bis'>/Projet</CardGrey>
                </CardLink>
                <CardLink id="cardlink2" to="/apropos">
                    <CardBlue id='nav2'>haDock404</CardBlue><CardGrey id='nav2bis'>/Apropros</CardGrey>
                </CardLink>
                <CardLink id="cardlink3" to="/contact">
                    <CardBlue id='nav3'>haDock404</CardBlue><CardGrey id='nav3bis'>/Contact</CardGrey>
                </CardLink>
            </CardNav>
        </CardHeader>
    );
}

export default Header