import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from 'react-apollo';
import { ContextProvider} from './context/Context';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'


const httpLink = createHttpLink({
  uri: 'https://petgram-server-jrmfsd-okxluew9o.now.sh/graphql',

})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    },
  }
} )

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onerror: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ApolloProvider client={client}>
       <App />
      </ApolloProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
