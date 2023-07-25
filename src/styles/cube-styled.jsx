import styled from "styled-components";

export const Cube = styled.div`
  @keyframes rotation {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }

  position: relative;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  transform: rotateX(-30deg);
  animation: animate 5s linear infinite;
  animation-name: rotation;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background: #fffffff0;
    transform: rotateX(90deg) translateZ(65px);
    box-shadow: 1px 1px 15px -10px #6e07f3 inset;
  }

  .top::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background: #6e07f3;
    transform: translateZ(-170px);
    filter: blur(20px);
    box-shadow: 0 0 60px #6d07f3e1, 0 0 100px #6d07f3b1, 0 0 150px #6d07f387,
      0 0 200px #6d07f35c;
  }
`;

export const GradientSpan = styled.span`
  --i: ${(props) => props.index};

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #6e07f3);
  transform: rotateY(calc(90deg * var(--i))) translateZ(74.5px);
`;
