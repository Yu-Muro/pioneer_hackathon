import React from 'react';
import { Link } from 'react-router-dom';

const Result = () => {
  return (

      <div className=' my-4 text-center'>
        <div >
          <p className='h3'>運転お疲れさまでした！</p>
          <p >ゆっくり休んでくださいね</p>
        </div>

          <img className='w-50' src={`${process.env.PUBLIC_URL}/car-dot.png`} alt="car" />
          <p>name さんのドット絵</p>
          <Link to="/home">運転する！</Link>
      </div>
  )
};

export default Result;
