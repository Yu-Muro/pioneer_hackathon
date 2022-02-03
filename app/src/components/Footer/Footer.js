import React from 'react';

const Footer = () => {
  return (
    <div className='bg-primary ' style={{ height: 200 }}>
      <p class="text-center text-light">Developers</p>
      <div style={{ 'line-height': '0.8rem' }} className="d-flex justify-content-center bd-highlight mb-3">
        <div className="p-2 bd-highlight">
          <p class="text-light">frontend</p>
          <p class="text-light">yoshi sama</p>
          <p class="text-light">nishi sama</p>
        </div>
        <div className="p-2 bd-highlight">
          <p class="text-light">backend</p>
          <p class="text-light">muro sama</p>
          <p class="text-light">ue sama</p>
          <p class="text-light">naka sama</p>
        </div>
      </div>
    </div>
  )
};

export default Footer;
