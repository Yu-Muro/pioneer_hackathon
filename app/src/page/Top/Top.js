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

        <button type="submit" className="btn btn-primary" >描く</button>
      </div>
      <Link to="/home">home</Link>
    </div>
  )
};

export default Top;
