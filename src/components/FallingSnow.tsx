import React from 'react';

const FallingSnow = () => {
  const snowflakes = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="snowflake"
      style={{
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${5 + Math.random() * 5}s`,
        opacity: `${0.5 + Math.random() * 0.5}`,
        fontSize: `${10 + Math.random() * 10}px`,
      }}
    >
      ❅
    </div>
  ));

  return <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">{snowflakes}</div>;
};

export default FallingSnow;