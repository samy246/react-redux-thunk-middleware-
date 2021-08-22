import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import {Provider } from 'react-redux';
import thunk from 'redux-thunk';
// //Selectors
//  const VADIVELU_COMEDY='VADIVELU_COMEDY';
//  const GOUNDAMANI_COMEDY='GOUNDAMANI_COMEDY';
// //subscribe action
// const SUBSCRIBE_CHANNEL ='SUBSCRIBE_CHANNEL'

// //Actions

// export const vadiveluComedyAction=()=>({type:VADIVELU_COMEDY})
// export const goundamaniComedyAction=()=>({type:GOUNDAMANI_COMEDY})
// //subscribe action
// export const subscribeAction=()=>({type:SUBSCRIBE_CHANNEL})



//only subscriber to see restrict
const initialvalue={
  loading:false,
  data:[],
  error:''
  // img:'https://i.pinimg.com/originals/bd/1d/9c/bd1d9cd43e1372a25673d8fb0aa11c5d.gif',
  // isSubscribed:false,
}

//Reducer
const LoginReducer=(state=initialvalue,actions)=>{
  switch (actions.type) {
    case 'LOGIN_START':
      return{
        ...state,
        loading:true,
        
      }
      case 'LOGIN_SUCESS':
        return{
        loading:false,
        data:actions.payload,
        error:''

          
        }
        case 'LOGIN_FAIL':
          return{
            loading:false,
            data:[],
            error:actions.error
          }
    default:
      return {
        ...state
      }
     
      
  }

}


//Store and middleware
let store=createStore(LoginReducer,applyMiddleware(thunk));
// store.subscribe(()=>{console.log(store.getState())});//console la paakuradhu


// //call vadivelu and goundamani
// store.dispatch(vadiveluComedyAction());
// store.dispatch(goundamaniComedyAction());



ReactDOM.render(
<Provider store={store}> 
  <App/> 
  </Provider>,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
