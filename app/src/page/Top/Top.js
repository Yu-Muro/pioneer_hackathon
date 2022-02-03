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

      <div>
        <p></p>
      </div>

      <p>機能</p>
      <div className="d-flex justify-content-center bd-highlight mb-3">
        <div className="p-2 bd-highlight">走る</div>
        <div className="p-2 bd-highlight">描く</div>
        <div className="p-2 bd-highlight">集める</div>
      </div>
    </div>
  )
};

export default Top;
