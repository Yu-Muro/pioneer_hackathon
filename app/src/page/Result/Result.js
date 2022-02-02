import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (
      <div className=' my-4 text-center'>
          <img className='w-50' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />
          <p>こんな感じでドット絵が出ます！</p>
          <Link to="/home">運転する！</Link>
      </div>
  )
};

export default Result;
