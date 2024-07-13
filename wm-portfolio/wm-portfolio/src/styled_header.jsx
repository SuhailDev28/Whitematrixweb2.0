
import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 5px 100px; /* Adjusted padding for consistency */
  z-index: 1000;
  background: #102447; /* Set the default background color to opaque */

  &.sticky {
    /* Remove background change and padding adjustment in sticky class */
    background: #102447;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .logo {
    position: relative;
    font-weight: 700;
    color: #FFFFFF;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: 0.6s;

    &:hover {
      transform: scale(1.2);
    }
  }

  img {
    max-width: 100px;
    height: 100%;
    margin-right: 10px;
    margin-top: 20px;
    transition: transform 0.3s ease;
  }
  
  img:hover {
    transform: scale(1.2);
  }

  ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      position: relative;
      list-style: none;
      

      a {
        position: relative;
        margin: 0 15px;
        text-decoration: none;
        color: #FFFFFF;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 20px;

        &:hover,
        &.active {
          color: #47bfbf;
        
        }
      }
    }
  }

  .toggle {
    display: none;
  }

  @media (max-width: 892px) {
    .toggle {
      display: block;
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  
    .toggle::before {
      content: '';
      position: absolute;
      top: 6px;
      width: 100%;
      height: 4px;
      background: #ffffff;
      z-index: 1;
      box-shadow: 0 10px 0 #ffffff;
      transition: 0.5s;
      border-radius: 2px;
    }
  
    .toggle::after {
      content: '';
      position: absolute;
      bottom: 1px;
      width: 100%;
      height: 4px;
      background: #ffffff;
      z-index: 1;
      transition: 0.5s;
      border-radius: 2px;
    }
  
    &,
    &.sticky {
      padding: 10px 50px; /* Consistent padding */
      background: #102447;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    ul {
      position: absolute;
      top: 100px;
      left: 0;
      width: 100%;
      text-align: center;
      height: 0;
      overflow: hidden;
      background: #102447;
      visibility: hidden;
      opacity: 0;
      transition: max-height 0.5s ease, visibility 0.5s ease, opacity 0.5s ease;
    }
  
    &.active ul {
      height: auto;
      visibility: visible;
      opacity: 1;
      display: block;
      padding-top: 20px;
      max-height: 500px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  
    &.active ul li a {
      display: inline-block;
      margin: 10px 0;
      font-size: 20px;
      color: #ffffff;
    }
  
    &.active ul li a:hover {
      speed: 500;
      color: #47bfbf;
    }

    .sticky .logo,
    .sticky ul li a {
      color: #345789;
    }
  }
`;

export default StyledHeader;
