import React from 'react'
import './blackfire.css'

const BlackFIre = () => {

      const coords = { x: 0, y: 0};
    const circles = document.querySelectorAll(".circle");

    circles.forEach(function(circle) {
      circle.x = 0;
      circle.y = 0;
  });

  window.addEventListener("mousemove", function(e){
      coords.x = e.clientX;
      coords.y = e.clientY;
      animateCircles();
  });

  function animateCircles() {
          circles.forEach(function (circle, index) {
          circle.style.left = coords.x -12 + "px";
          circle.style.top = coords.y -12 + "px";
      })
  }

    return (
    <div className='outer-circle'>
        Hello
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
    )
}

export default BlackFire