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
        <p className='h9 '>走った分だけ華やかに。</p>

      </div>
      

      <div className='text-center my-5'>
        <img className='w-75' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />
        
        <p></p>
        <p>
          <a type="button" className="btn btn-primary" href='/login'>今すぐ描く！</a>
        </p>

      </div>

      <div>
        <p>アプリの説明　簡単な</p>
      </div>

      <p>機能</p>
      {/* 横並びにしてほしい */}
      <div>
        <div>
          タイマー機能追加
        </div>
        <div>
          ドット絵を描く
        </div>
      </div>
    </div>
  )
};

export default Top;
