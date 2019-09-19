import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import bg from '../images/bg.jpg';

export const Logo = styled.img`
  display: inline-block;
  max-width: 200px;
`;

export const Background = styled.div`
height: 100vh;
position: relative;
z-index: 1;

&:before,
&:after {
  content: '';
  position: absolute;
  top: 0;    
  left: 0;
  width: 100%;
  height: 100%;
}

&:before {
  z-index: -2;
  background: url(${bg}) no-repeat center;
  background-size: cover;
  filter: grayscale(100%);
}
&:after {
  // background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

`;

export const Row = styled.div`
  @media(min-width: 768px) {
    height: 100%;
    padding-top: 4rem;
    padding-bottom: 4rem;
}
`;

export const Navbar = styled.div`
background-color: rgba(255, 255, 255, 0.8);
color: #333;
right: -6rem;
position: relative;
z-index: 3;
height: 88vh;

& .nav-wrapper {
  overflow-y: auto;
  height: 80%;
}
`;

export const LaunchInfo = styled.div `
background-color: rgba(1, 10, 19, 0.6);
height: 94vh;
overflow-y: auto;
padding-left: 130px;
`;


// LAUNCH ITEM
export const Button = styled(NavLink)`
    color: #fff !important;
    background-color: #222;
    border: 1px solid #222;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    padding: 7px 12px 8px;
    border-radius: 50px;
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
    text-align: center;

    &:hover {
        background-color: #444;
        // color: #222 !important; background-color: transparent;
        text-decoration: none !important;
        transform: translateX(4px);
    }
`;

export const Divider = styled.div`
    width: 100%;
    display: inline-block;
    line-height: 10px;
    font-size: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #fff;
    font-weight: bold;
`;