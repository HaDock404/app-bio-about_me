import styled from "styled-components";

const CardScroll = styled.div`
  height: 3px;
  width: 0%;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  animation: progress 1s linear;
  /* Pause the animation */
  animation-play-state: paused;
  /* Bind the animation to scroll */
  animation-delay: calc(var(--scroll) * -1s);
  /* These last 2 properites clean up overshoot weirdness */
  animation-iteration-count: 1;
  animation-fill-mode: both;
`

function ScrollBar() {
  return (
    <CardScroll/>
  );
}

export default ScrollBar;
