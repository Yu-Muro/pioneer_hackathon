import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useStopwatch } from "react-timer-hook";
import axios from 'axios';

// home pageです
// 運転時間とか図るようです

const API_URL = 'https://pixel-drive.herokuapp.com'


const Home = () => {


  const { seconds, minutes, hours, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });


  const [start_longitude, setStart_longitude] = useState(); //スタート経度
  const [start_latitude, setStart_latitude] = useState(); //スタート緯度

  const [goal_longitude,setGoal_longitude] = useState(); //ゴール経度
  const [goal_latitude,setGoal_latitude] = useState(); //ゴール緯度

  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  const [base64img,setBase64img] = useState(''); //ゴール緯度
 

  const setStartPos = ()=>{
    navigator.geolocation.getCurrentPosition(
      pos => {
        setStart_latitude(pos.coords.latitude);
        setStart_longitude(pos.coords.longitude);
      },
    )
  };

  const setGoalPos = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        setGoal_latitude(pos.coords.latitude);
        setGoal_longitude(pos.coords.longitude);
      },
    )
  };




  const getDotPicture  = async(e)=>{
    e.preventDefault();
    setGoalPos();

    const dist = calcDistance()

    const formData = new FormData();
    formData.append("username", username);
    // formData.append("password", password);
    formData.append("mileage", dist);


    await axios.post(`${API_URL}/rev`, formData)
    .then(function (response) {
      // 送信成功時の処理

      setBase64img(response.data.img)
      
    })
    .catch(function (error) {
      // 送信失敗時の処理
      console.log(error);
    });
    
    setStart_longitude();
    setStart_latitude();
    setGoal_longitude();
    setGoal_latitude();
    // document.location.href = '/result'

  }
  

  const calcDistance = () => {
    // Nanになる??
    // return (
    //   6378137 * Math.acos(Math.sin(start_latitude) * Math.sin(goal_latitude) + Math.cos(start_latitude) * Math.cos(goal_latitude) * Math.cos(goal_longitude - start_longitude))
    //   )
    return (12)
  }



  const startDrive =()=>{
    start();
    setStartPos();
  }


  return (
    <div>
      {username ?

        <div className='my-3 text-center'>
          <h2>Welcome to </h2>
          <h2>Pixel Drive.</h2>
          <div className='mt-3'>
            <p>ストップウォッチ</p>
          </div>

          
          
          <div style={{ fontSize: 50 }}>
          
            {hours < 10 && (0)}<span>{hours}</span>:
            {minutes < 10 && (0)}<span>{minutes}</span>:
            {seconds < 10 && (0)}<span>{seconds}</span>
          </div>

          <p>{isRunning ? "Running" : "Not running"}</p>
          <button className='mx-1 btn btn-secondary' onClick={startDrive}>Start</button>
          <button className='mx-1 btn btn-secondary' onClick={pause}>Pause</button>
          <button className='mx-1 btn btn-secondary' onClick={reset}>Reset</button>
          
          <div style={{'line-height':'1.2rem'}} className='my-4'>
            <p >運転を開始する前に startを押して下さい</p>
            
            {hours === 0 && (
              <p>安全運転で行きましょう！</p>
            )}
            {0 < hours && hours <= 1 && (
              <p>いい調子です!!安全運転</p>
            )}
            {1 < hours && hours <= 2 && (
              <p>安全運転えらい！</p>
            )}
            {2 < hours && hours <= 3 && (
              <p>そろそろ休憩したら？</p>
            )}
            {3 < hours && hours <= 4 && (
              <p>3時間！お疲れ様です</p>
            )}
            {4 < hours && hours <= 5 && (
              <p>休憩も取って安全運転しよう！</p>
            )}
            {5 < hours && hours <= 6 && (
              <p>5時間を超えたよ！休憩は取った？</p>
            )}
          </div>
          
          
          
          {/* <div>
            {!isRunning && (
              <Link to="/result">現在のドット絵を見る</Link>
            )}
          
          </div> */}

          
          
          <div className='text-center my-5'>
          <button type='button' className='btn btn-primary' onClick={getDotPicture}>運転記録を反映する！</button>
          </div>
          {
            base64img ? 
            <>
              <img className='w-75 h-75' src={`data:image/jpeg;base64,${base64img}`}/>
            </>

            :<></>
          }
     </div> : <>loginに失敗しました</>
    }
    </div>
    
  );

};

export default Home;





