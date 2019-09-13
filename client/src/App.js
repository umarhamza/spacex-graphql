import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Launches from './components/Launches';

import './App.css';
import styled from 'styled-components'
import logo from './images/logo-black.png'; 
import bg from './images/bg.jpg';

const uri = {uri: 'http://localhost:5000/graphql'};
const client = new ApolloClient(uri);

const Logo = styled.img`
  max-width: 300px;
`;

const Background = styled.div`
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
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }

`;

const Row = styled.div`
    @media(min-width: 768px) {
      height: 100%;
      padding-top: 4rem;
      padding-bottom: 4rem;
  }
`;

const Navbar = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  color: #ffffff;
  right: -6rem;
  position: relative;
  z-index: 3;
`;

const launchesStyles = {
  backgroundColor: 'rgba(1, 10, 19, 0.6)',

}

function App() {
  return (
    <ApolloProvider client={client}>
      <Background>
        <Row className="row py-md-5 pl-md-5 pr-md-4 mx-0">
          <Navbar className="col col-12 col-md-5 r-md-n5 h-md-100 p-5">
            <Logo src={logo} className='logo w-100' />
          </Navbar>
          <div style={launchesStyles} className="col col-12 col-md-7 p-5 my-md-n4">
            <Launches />
          </div>
        </Row>
      </Background>
    </ApolloProvider>
  );
}

export default App;
