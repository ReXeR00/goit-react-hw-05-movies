import React, { useEffect, useRef } from 'react';
import { TweenLite, Circ } from 'gsap';

const CanvasAnimation = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let points = [];
    let animateHeader = true;

    const width = window.innerWidth;
    const height = window.innerHeight;
    const target = { x: width / 2, y: height / 2 };

    canvas.width = width;
    canvas.height = height;

    const createPoints = () => {
      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + Math.random() * (width / 20);
          const py = y + Math.random() * (height / 20);
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }
    };

    const mouseMove = e => {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    };

    const scrollCheck = () => {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initAnimation = () => {
      animate();
      for (let i = 0; i < points.length; i++) {
        shiftPoint(points[i]);
      }
    };

    const animate = () => {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < points.length; i++) {
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
          } else {
            points[i].active = 0;
          }

          drawLines(points[i]);
        }
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = p => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function() {
          shiftPoint(p);
        },
      });
    };

    const drawLines = p => {
      if (!p.active) return;
      for (let i = 0; i < p.closest.length; i++) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        ctx.stroke();
      }
    };

    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    createPoints();
    initAnimation();

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage:
            "url('https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/img/demo-1-bg.jpg')",
        }}
      ></canvas>
      {children}
    </div>
  );
};

export default CanvasAnimation;
