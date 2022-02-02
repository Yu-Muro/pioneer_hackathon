import React from 'react';
import { Link} from 'react-router-dom'
import { useStopwatch } from "react-timer-hook";

// home pageです
// 運転時間とか図るようです



const Home = () => {


  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
  useStopwatch({ autoStart: false });

  return (
    <>

      <div className='my-3 text-center'>
        <h1>Pixel Driveへようこそ！</h1>
        <div className='my-5'>
          <p>ストップウォッチ</p>
          <p>運転を開始する前に startを押して下さい</p>
        </div>

        <div style={{ fontSize: "100px" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
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

    </>


  );

};

export default Home;
