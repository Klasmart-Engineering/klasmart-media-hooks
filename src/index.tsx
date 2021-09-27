import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import StateHooksComponent from './StateHooksComponent';
import Player from './PlayerComponent';

const link = createHttpLink({
  uri: "http://localhost:8081/audio-storage/graphql",
  credentials: 'include',
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  //uri: "http://localhost:4000/graphql"
  //uri: "https://apollo-fullstack-tutorial.herokuapp.com/"
  //uri: "http://localhost:8081/audio-storage/graphql"
  //uri: "https://api.alpha.kidsloop.net/audio-server/graphql"
});

//<Player url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
ReactDOM.render(
  <ApolloProvider client={client}>
    <StateHooksComponent />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
