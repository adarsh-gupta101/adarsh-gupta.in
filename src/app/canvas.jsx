import React, { useEffect, useRef, useState } from 'react';
import "./canvasstyle.css"

const ConfettiCanvas = () => {
  const canvasRef = useRef(null);
  const [confetti, setConfetti] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const trailingElements = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    class Confetto {
      constructor(x, y, velocityX, velocityY) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15;
        this.colors = ['white', 'lightpink'];
        this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.velocityX = velocityX * 0.05;
        this.velocityY = 1 + Math.random() + velocityY * 0.005;
        this.gravity = 0.02;
        this.drag = 0.97;
        this.timeToLive = 500;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        const spikes = 4;
        const outerRadius = this.size;
        const innerRadius = this.size / 2;
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const angle = (i / spikes) * Math.PI;
          const x = this.x + Math.cos(angle) * radius;
          const y = this.y + Math.sin(angle) * radius;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      }

      update(deltaTime) {
        this.x += this.velocityX;
        this.velocityX *= this.drag;
        this.y += this.velocityY;
        this.velocityY += this.gravity;
        this.size = Math.max(0, this.size - (this.size * deltaTime) / this.timeToLive);
      }
    }

    const addConfettoAndTrail = (e) => {
      const mouseVelocityX = e.clientX - lastMouseX;
      const mouseVelocityY = e.clientY - lastMouseY;
      setLastMouseX(e.clientX);
      setLastMouseY(e.clientY);

      const randomOffsetX = (Math.random() - 0.5) * 100;
      const randomOffsetY = (Math.random() - 0.5) * 100;

      setConfetti((prevConfetti) => [
        ...prevConfetti,
        new Confetto(e.clientX, e.clientY, mouseVelocityX + randomOffsetX, mouseVelocityY + randomOffsetY)
      ]);

      const trail = document.createElement('div');
      trail.classList.add('trail');
      trail.style.top = `${e.clientY}px`;
      trail.style.left = `${e.clientX}px`;
      document.body.appendChild(trail);

      trailingElements.current.push(trail);
      if (trailingElements.current.length > 4) {
        const removedTrail = trailingElements.current.shift();
        removedTrail.remove();
      }
    };

    canvas.addEventListener('mousemove', addConfettoAndTrail);

    let lastTime = 0;

    const update = (time = 0) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      confetti.forEach((confetto) => {
        confetto.update(deltaTime);
        confetto.draw();
      });

      setConfetti((prevConfetti) =>
        prevConfetti.filter(
          (confetto) =>
            confetto.size > 0 &&
            confetto.y < height &&
            confetto.x > 0 &&
            confetto.x < width
        )
      );

      requestAnimationFrame(update);
    };

    update();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', addConfettoAndTrail);
    };
  }, [confetti, height, lastMouseX, lastMouseY, width]);

  return <canvas class="flow" id="flow" ref={canvasRef} width={width} height={height}></canvas>;
};

export default ConfettiCanvas;
