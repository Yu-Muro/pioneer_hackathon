import React from 'react';
import { Link } from 'react-router-dom'


// Top pageです
// おしゃれなページにしてください！！！

const Top = () => {
  return (
    <div className='my-4'>
      <div>
        <h1>Move and Draw.</h1>
        <p className='h9 '>走った分だけ華やかに。</p>
        <p className='h9 '>あなたのドライブをちょっとだけ楽しくさせます。</p>

      </div>


      <div className='text-center my-5'>
        <img className='w-75' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />

        <p></p>
        <p>
          <a type="button" className="btn btn-primary" href='/login'>今すぐ描く！</a>
        </p>

      </div>

      <h3 className="text-center">こんなアプリ</h3>
      <div class="row justify-content-center">
        <div class="col-10 border-top border-primary border-5"></div>
      </div>
      <p></p>
      <div className="row">
        <div className="col-4 text-center border border-2 rounded-lg">
          <h5 className="text-primary">走る</h5>
          Pixel Driveが走った距離を計測します
        </div>
        <div className="col-4 text-center border border-2 rounded-lg">
          <h5 className="text-primary">描く</h5>
          距離に応じて素敵なドット絵が描かれていきます
        </div>
        <div className="col-4 text-center border border-2 rounded-lg">
          <h5 className="text-primary">集める</h5>
          たくさんのドット絵をゲットしましょう
        </div>
      </div>
    </div>
  )
};

export default Top;
