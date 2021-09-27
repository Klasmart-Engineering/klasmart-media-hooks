import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
//import StateHooksComponent from './StateHooksComponent';
import Player from './PlayerComponent';
import AudioMetaDataForUser from './AudioMetaDataForUser';
import DownloadAndPlay from './DownloadAndPlay';

const link = createHttpLink({
  uri: "http://localhost:8080/audio-storage/graphql",
  //uri: "https://api.alpha.kidsloop.net/audio-storage/graphql",
  credentials: 'include',
})
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AudioMetaDataForUser />
  </ApolloProvider>,
  document.getElementById('root'),
);
//
//<AudioMetaDataForUser />
//<StateHooksComponent />
//<Player url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
//<DownloadAndPlay audioId="54b140c0-7703-4a5d-b0c7-ea59a0c4b4eb" organizationId="org1" />

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
