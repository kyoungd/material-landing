import React from 'react';

const Card = ({ className, onClick, children }) => (
  <a class="card1" href="#">
    <div
      className={`p-12 rounded-lg border border-solid border-gray-200 ${className}`}
      onClick={onClick}
      style={{
        boxShadow: '0 10px 28px rgba(0,0,0,.08)'
      }}
    >
      {children}
    </div>
  </a>
);

export default Card;
