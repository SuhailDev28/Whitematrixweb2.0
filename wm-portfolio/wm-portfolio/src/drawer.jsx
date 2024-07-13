import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import LG from "./assets/logo.png";
import backgroundImage from './assets/image.png'; 


const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 120%;
  height: 100vh;
  background: url(${backgroundImage}) bottom/100% 120% no-repeat, rgba(0, 0, 0, 0.6); /* Add background image and overlay */
  background-blend-mode: overlay; /* Blend the overlay color with the image */
  color: #fff;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 20px 80px 100px;
  transition: transform 0.3s ease;
  transform: translateY(${props => (props.isOpen ? '0' : '-100%')});
  overflow-y: auto;
  overflow-x: hidden;

  @media (max-width: 1200px) {
    padding: 50px 30% 0 5%;
    & p{
    text-align:justify;}
  }

  }
`;

const Content = styled.div`
  text-align: center;
  margin-top: 40px;
  margin-left: 40px;
  font-size: 1.2em;

  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 1em;
  }

  @media (max-width: 576px) {
    margin-top: 40px;
    font-size: 0.9em;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-left: -25%;
  margin-top: 0px;
`;

const Button = styled.button`
  font-size: 1.5em;
  background-color: transparent;
  color: #fff;
  border-color: transparent;
  border-style: solid;
  padding:  5px 20px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    transform:scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;

const Drawer = ({ isOpen, onClose, content }) => {
  const drawerRef = useRef(null);
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose(); // Close the drawer if Escape key is pressed
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);


  return (
    <DrawerContainer isOpen={isOpen} ref={drawerRef}>
      
      <Content>
      <ButtonContainer>
        <Button onClick={onClose}>x</Button>
      </ButtonContainer>
        <p>{content}</p>
      </Content>
      
    </DrawerContainer>
  );
};

export default Drawer;