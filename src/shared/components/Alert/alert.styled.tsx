import styled, { keyframes, css } from 'styled-components';

const bounceInRight = keyframes`
from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;
const bounceOutRight = keyframes`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;

export const AlertBox = styled.div<{show: boolean}>`
    margin: 5px;
    width: 400px;
    display: flex;
    border-left:7px solid #1752b8;
    height: 60px;
    transition: 1s;
    font-size: 18px;
    overflow: hidden;
    padding:15px;
    border-radius: 8px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 0px 6px #00000020;
    z-index: ${ ({ show }) => show ? '-999' : '50' };
    animation: ${ ({ show }) => show ? bounceInRight : bounceOutRight } 1s forwards;
    & h2, p{
      margin: 0;
    }
`
export const AlertMessage = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & div {
    width: 70%;
    text-align: left;
    font-family: sans-serif;
  }
  & svg{
    width: 30%;
    height: 30%;
  }
`
export const AlertButtons = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & button {
    outline: none;
    background: transparent;
    border-radius: 8px;
    border: 1px solid rgba(0,0,0,.2);
    padding: 10px;
    cursor: pointer;
  }
`

// Container Styles
export const ContainerStyle = {
    top: '0',
    right: '0',
    width: '450px',
    height: 'auto',
    display: 'none',
    position: 'fixed',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
}
