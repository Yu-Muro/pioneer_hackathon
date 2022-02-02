import React from 'react';
import { Link } from 'react-router-dom'


// Top pageです
// おしゃれなページにしてください！！！

const Top = () => {
  return (
    <div className='my-4'>
      <div className='text-center'>
        <img className='w-50' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />
        <p className='h3 my-3 '>動いて描く！</p>
        <p className='h9 my-3 '>走った分だけ華やかに。</p>
        <a type="button" className="btn btn-primary" href='/login'>描き始める</a>
      </div>
    </div>
  )
};

export default Top;
