import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from 'redux-thunk'
import uploadReducer from './store/reducer/uploadReducer';
import requestReducer from './store/reducer/requestReducer';
import authReducer from './store/reducer/authReducer';
import ratingReducer from './store/reducer/ratingReducer';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";

Amplify.configure(awsmobile);

const rootReducer = combineReducers({
  upload: uploadReducer,
  request: requestReducer,
  auth:authReducer,
  rating : ratingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
