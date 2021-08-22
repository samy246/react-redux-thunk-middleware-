import React from 'react';
import { useDispatch, useSelector,connect } from 'react-redux';
//import { vadiveluComedyAction , goundamaniComedyAction,subscribeAction} from './index';

//connect in redux



class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
  //   const comedies = useSelector(state=>state);
  // const dispatch = useDispatch();
  
  return(
    <div>
      <h1>SAMY</h1>
      <p>loading :{this.props.loading ? 'true' : 'false'}</p>
      <p>data :{JSON.stringify(this.props.data)}</p>
      <p>error :{this.props.error}</p>
      <button onClick={()=>this.props.login()}>Login</button>
      {/* <img src= {this.props.img}/>
  <button disabled={!this.props.isSubscribed} onClick = {() =>this.props.vadiveluComedy()}>vadivelu comedy</button> &nbsp;
  <button disabled={!this.props.isSubscribed} onClick = {() => this.props.goundamaniComedy()}>Goundamani comedy</button> &nbsp;
  <button onClick = {() =>this.props.subscribe()}>{!this.props.isSubscribed ? 'Subscribe' : 'UnSubscribe'}</button> */}

    </div>
  )
  }
}


//using middleware
 const middleware =()=>{
   return dispatch => {
     dispatch({type:'LOGIN_START'});
//json placeholder
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>  dispatch({type:'LOGIN_SUCESS',payload:json}))
        .catch(err => dispatch({type:'LOGIN_FAIL',error:'ERROR'}))
   }
 }


const mapStateToProps = (state) => {
 // console.log(state);
  return state;
}

const mapDispatchToProps =(dispatch)=>{
  return {
    login:()=>dispatch(middleware())
    // goundamaniComedy:()=>dispatch(goundamaniComedyAction()),
    // subscribe:()=>dispatch(subscribeAction()),
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (App);