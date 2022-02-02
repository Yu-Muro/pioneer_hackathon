import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import { useStopwatch } from "react-timer-hook";
import axios from 'axios';

// home pageです
// 運転時間とか図るようです

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const Home = () => {


  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
  useStopwatch({ autoStart: false });


  const [start_longitude,setStart_longitude] = useState(); //スタート経度
  const [start_latitude,setStart_latitude] = useState(); //スタート緯度

  const [goal_longitude,setGoal_longitude] = useState(); //ゴール経度
  const [goal_latitude,setGoal_latitude] = useState(); //ゴール緯度
 

  const setStartPos = ()=>{
    navigator.geolocation.getCurrentPosition(
      pos => {
        setStart_latitude(pos.coords.latitude);
        setStart_longitude(pos.coords.longitude);
      },
    )
  };

  const setGoalPos = ()=>{
      navigator.geolocation.getCurrentPosition(
        pos => {
          setStart_latitude(pos.coords.latitude);
          setStart_longitude(pos.coords.longitude);
        },
      )
  };

  //https://developer.yahoo.co.jp/webapi/map/openlocalplatform/v1/distance.html
  const getDistance = async()=>{
    await axios.get(`https://map.yahooapis.jp/dist/V1/distance?coordinates=${start_longitude},${start_latitude} ${goal_longitude},${goal_latitude}&appid=ID!!&output=json`)
    .then(res=>{
      console.log("###",res)
    })

  }

  return (
    <>

      <div className='my-3 text-center'>
        <h1>Pixel Driveへようこそ！</h1>
        <div className='my-5'>
          <p>ストップウォッチ</p>
          <p>運転を開始する前に startを押して下さい</p>
        </div>

        <div style={{ fontSize: "100px" }}>

          <span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <button className='mx-1 btn btn-primary' onClick={start}>Start</button>
        <button className='mx-1 btn btn-primary' onClick={pause}>Pause</button>
        <button className='mx-1 btn btn-primary' onClick={reset}>Reset</button>
          {hours==0 && (
              <p>安全運転で行きましょう！</p>
          )}
          {0<hours  && hours<=1 && (
              <p>いい調子です!!安全運転</p>
          )}
          {1<hours  && hours<=2 && (
              <p>安全運転えらい！</p>
          )}
          {2<hours  && hours<=3 &&(
              <p>そろそろ休憩したら？</p>
          )}
          {3<hours  && hours<=4 &&(
              <p>3時間！お疲れ様です</p>
          )}
          {4<hours  && hours<=5 &&(
              <p>休憩も取って安全運転しよう！</p>
          )}
          {5<hours  && hours<=6 &&(
              <p>5時間を超えたよ！休憩は取った？</p>
          )}


        <div>
          {!isRunning && (
            <Link to="/result">現在のドット絵を見る</Link>
          )}

        </div>
      </div>
      <p>
        start
        {start_latitude},
        {start_longitude}
      </p>
      <p>
        goal
        {goal_latitude},
        {goal_longitude}
      </p>

      <div className='text-center'>
        <button type='button'className='btn btn-primary' onClick={setStartPos}>start</button>
        <button type='button'className='btn btn-primary' onClick={setGoalPos}>goal</button>
        {/* <button type='button'className='btn btn-primary' onClick={getDistance}>d</button> */}
      </div>

    </>


  );

};

export default Home;
