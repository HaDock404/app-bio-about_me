import { createGlobalStyle } from "styled-components"
import './keyframes.css'

const StyledGlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
        overflow-x: hidden;
    }
    body {
        overflow-x: hidden;
        position: relative;
        background-color: #56A926;
        height: 2500vh;
        font-family: 'Chewy', cursive;
        animation: bg 1s linear;
        animation-play-state: paused;
        animation-delay: calc(var(--scroll) * -1s);
        animation-iteration-count: 1;
        animation-fill-mode: both;
    }
    
`

function scrollSystem(){
    var offsetStart = 0;
    var offsetEnd = 0;

    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
    }, false);
}

function GlobalStyle() {
    scrollSystem()
    return <StyledGlobalStyle/>
}

export default GlobalStyle