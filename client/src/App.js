import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LaunchDetails from './components/LaunchDetailsPage'

import { Background } from './components/StyledComponents'
import './App.scss';
 

const uri = {uri: 'http://localhost:5000/graphql'};
const client = new ApolloClient(uri);

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Background>
          <Route exact path="/" component={LaunchDetails} />
          <Route exact path="/launches/:id" component={LaunchDetails} />
        </Background>
      </Router>
    </ApolloProvider> 
  );
}

export default App;
