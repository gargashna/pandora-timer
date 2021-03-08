import React, {useState, useRef, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function padTime(time){
 return time.toString().padStart(2,'0');
}

let interval= setInterval(()=>{},1000)

function App() {

const [title, setTitle]= useState("Let the countdown begin")
const [timeLeft, setTimeLeft]= useState(10);
const[isRunning, setIsRunning]= useState(false);
const intervalRef=useRef(null);
//interval is being sent to null , everytime rendering is happening


// clearInterval(interval);

function startTimer(){

if(intervalRef.current!=null)return;
//if it alread exists then don't do anything
setIsRunning(true);
  setTitle(`You are doing great`)
   intervalRef.current= setInterval(()=>{
      setTimeLeft((timeLeft)=>{
        if(timeLeft>=1) return timeLeft-1;
        resetTimer();
        return 0;
      })

    },1000)
}

function stopTimer(){
   if(intervalRef.current==null)return;
    clearInterval(intervalRef.current);
    intervalRef.current=null;
    setTitle("Keep it up!")
    setIsRunning(false);

}

function resetTimer(){
  
    clearInterval(intervalRef.current);
    setTitle("Ready to go to another round?")
    setTimeLeft(10);
    intervalRef.current=null;
    setIsRunning(false);
}

const minutes= padTime(Math.floor(timeLeft/60))  ;
const seconds= padTime(timeLeft-minutes*60);
 return (
    <div className="App">
        <h2>{title}</h2>
          <div className="timer">
  <span>{minutes}</span>
  <span>:</span>
  <span>{seconds}</span>
          </div>
          <div className="actionButtons">
            {!isRunning &&<button onClick={startTimer}>Start</button>}
            {isRunning && <button onClick={stopTimer} >Stop</button>}
            <button onClick={resetTimer}>Reset</button>
          </div>
        
    </div>
  );
}

export default App;
