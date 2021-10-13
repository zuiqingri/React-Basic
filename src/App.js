/* eslint-disable*/
//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';



function App() {
  let [title, changeTitle]=useState(['I love you React!','I will mast you quickly']);
  let [mark,changeMark]=useState(0);
  function ChangeText(){
      let newArray=[...title];
      newArray[0]="How are you";
       changeTitle(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>Hello React</div>
      </div>
      <button onClick={ChangeText}>Button</button>
      <div className="list">
        <h3>{title[0]} <span onClick={()=>{changeMark(mark+1)}}>Marks</span>{mark}</h3>
        <p>Published 2.17</p>
        <hr/>
      </div>
      <Modal /> 
        <hr/>
      <Board 
        title={board.title}
        content={board.content}
        user={board.user}
      />
      {/* <Clock date={new Date()}/> */}
      <Clock />

    </div>
  );
}

function Modal(){
  return(
  <div className="modal">
    <h2>Title</h2>
    <p>date</p>
    <p>datail contents</p>
  </div>
  )
}

function User(props){
  return(
    <div>
      <img src={props.user.imageUrl}/>
      &nbsp;
      <strong>{props.user.name}</strong>
    </div>
  )
}
function Board(props){
  return(
    <section>
      <User user={props.user}/>
      {props.title}
      <hr/>
      {props.content}
    </section>
  )
}
const board={
  title:'This is title',
  content:'HelloWorld, I am a developer',
  user:{
    name:'KangMyong',
    imageUrl:'http://placeimg.com/32/32/any'
  }
}
// Timer using class

      // class Clock extends React.Component{
      //   constructor(props){
      //     super(props);
      //     this.state={
      //       date: new Date()
      //     }
      //   }
      //   tick(){
      //     this.setState({
      //       date:new Date()
      //     })
      //   }
      //   componentDidMount(){
      //     this.timerID=setInterval(()=>this.tick(),1000);
      //   }
      //   componentWillUnmount(){
      //     clearInterval(this.timerID);
      //   }
      //   render(){
      //       return(
      //         <h3>
      //           Now [{this.state.date.toLocaleTimeString()}]
      //         </h3>
      //       )
      //   }
      // }

// Timer using function

      // function Clock(){
      //   let [time,changeTime]=useState(new Date());
      //   function tick(){
      //     changeTime(new Date())
      //   }
      //     setInterval(tick,1000);
      //   return(
      //     <h3>
      //      Now [{time.toLocaleTimeString()}]
      //     </h3>
      //   )
      // }

// 10second back
class Clock extends React.Component{
        constructor(props){
          super(props);
          this.state={
            date: new Date()
          }
        }
        goBack(){
          let nextDate=this.state.date;
          nextDate.setSeconds(nextDate.getSeconds()-10);
          this.setState({
            date:nextDate
          })
        }
        render(){
            return(
              <div>
              <h3>
                Now [{this.state.date.toLocaleTimeString()}]
              </h3>
              <button onClick={this.goBack.bind(this)}>10s Back</button>
              </div>
            )
        }
      }
export default App;

