import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import createSagaMiddleWare from 'redux-saga';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/rootReducer';
import rootSaga from './store/sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

firebase.initializeApp({
  apiKey: 'AIzaSyBaK2sKbEoygBTmaiSHez4kiaLVu99LxZk',
  authDomain: 'social-app-api-f6567.firebaseapp.com',
  projectId: 'social-app-api-f6567',
  storageBucket: 'social-app-api-f6567.appspot.com',
  messagingSenderId: '981708246264',
  appId: '1:981708246264:web:2b358be1924452d63f7f0d'
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
