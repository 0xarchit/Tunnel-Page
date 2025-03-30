import React from 'react';
import './StarAnimation.css';

const StarAnimation: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="star" />
        ))}
      </div>
    </>
  );
};

export default StarAnimation;
