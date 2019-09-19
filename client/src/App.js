import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/HomePage'
import LaunchDetails from './components/LaunchDetailsPage'

import { Background } from './components/StyledComponents'
import './App.css';
 

const uri = {uri: 'http://localhost:5000/graphql'};
const client = new ApolloClient(uri);

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Background>
          <Route exact path="/" component={Home} />
          <Route exact path="/launches/:id" component={LaunchDetails} />
        </Background>
      </Router>
    </ApolloProvider>
  );
}

export default App;
