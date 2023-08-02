import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const MySpline3D = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/vgtpSWZRgGPQ2fAE/scene.splinecode');
  }, []); // Empty dependency array to ensure useEffect runs only once on component mount

  return <canvas id="canvas3d" />;
};

export default MySpline3D;
