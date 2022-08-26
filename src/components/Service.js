
import React, { useState, useEffect, useRef } from 'react';


const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1>Welcome to GeeksforGeeks Team</h1>
    </div>
  );
};

export default Services;