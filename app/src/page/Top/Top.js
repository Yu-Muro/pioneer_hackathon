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

      <h1 className="text-center">こんなアプリ</h1>
      <div className="row">
        <div className="col-4 text-center border border-5 border-warning rounded-lg">
          走る
        </div>
        <div className="col-4 text-center border border-5 border-warning rounded-lg">
          描く
        </div>
        <div className="col-4 text-center border border-5 border-warning rounded-lg">
          集める
        </div>
      </div>
    </div>
  )
};

export default Top;
