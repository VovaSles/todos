import React from 'react';
import {  applyMiddleware, compose, createStore } from 'redux';
import App from './App';
import thunk from 'redux-thunk'
import { RootReduser } from './redux/RootReduser';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { render } from '@testing-library/react';
import { forbiddenWordsMiddleware } from './redux/middleware';



const store = createStore(RootReduser, compose(applyMiddleware(thunk, forbiddenWordsMiddleware)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>)

  render( app, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
