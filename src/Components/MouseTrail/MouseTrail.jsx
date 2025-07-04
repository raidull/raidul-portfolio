import React, { useEffect } from 'react';
import './mousetrail.css';

const MouseTrail = () => {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle) => {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div className="mouse-trail-wrapper">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="circle"></div>
      ))}
    </div>
  );
};

export default MouseTrail;
