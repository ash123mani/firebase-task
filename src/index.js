import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import thunk from 'redux-thunk'
import { ThemeProvider } from 'styled-components'


import rootReducer from './store/reducers'
import fbConfig from './config/fbConfig'
import theme from './styles/theme'
import { setUserloggedIn } from './store/actions/authActions' 
import './index.css';
import App from './App';
require('dotenv').config()

const middlewares = [thunk.withExtraArgument({ getFirestore, getFirebase })]
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'Firey Store, debug, time travel and see your actions in action'
    }) : compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      attachAuthIsReady: true
    })
  )
)


store.firebaseAuthIsReady
  .then(() => {
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>, 
      document.getElementById('root')
    );
  })

