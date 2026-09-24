import { useRef, useEffect, useState } from 'react';
import './Tilt3DImage.css';

const lerp = (start, end, factor) => start + (end - start) * factor;

export default function Tilt3DImage({ src, alt = 'Profile', className = '' }) {
  const containerRef = useRef(null);
  const stateRef = useRef({
    currentRotateX: 0,
    currentRotateY: 0,
    currentScale: 1,
    currentZ: 0,
    targetRotateX: 0,
    targetRotateY: 0,
    targetScale: 1,
    targetZ: 0,
    mouseX: 0,
    mouseY: 0,
    isHovering: false,
    shadowX: 0,
    shadowY: 0,
    brightness: 1,
  });

  const rafRef = useRef(null);

  /**
   * Smooth animation loop
   * Interpolates current values toward target values at ~60fps
   * Uses easing factor of 0.1 for smooth, non-linear acceleration
   */
  const animate = () => {
    const state = stateRef.current;
    const easingFactor = 0.1; // Lower = smoother, Higher = snappier

    // Interpolate rotation
    state.currentRotateX = lerp(state.currentRotateX, state.targetRotateX, easingFactor);
    state.currentRotateY = lerp(state.currentRotateY, state.targetRotateY, easingFactor);

    // Interpolate scale
    state.currentScale = lerp(state.currentScale, state.targetScale, easingFactor);

    // Interpolate Z depth
    state.currentZ = lerp(state.currentZ, state.targetZ, easingFactor);

    // Interpolate shadow position (opposite to tilt)
    state.shadowX = lerp(state.shadowX, state.targetRotateY * -0.5, easingFactor);
    state.shadowY = lerp(state.shadowY, state.targetRotateX * -0.5, easingFactor);

    // Interpolate brightness
    state.brightness = lerp(state.brightness, state.isHovering ? 1.03 : 1, easingFactor);

    // Apply transform to container
    if (containerRef.current) {
      containerRef.current.style.transform = `
        perspective(1600px)
        rotateX(${state.currentRotateX}deg)
        rotateY(${state.currentRotateY}deg)
        translateZ(${state.currentZ}px)
        scale(${state.currentScale})
      `;

      // Apply filter (brightness and dynamic shadow via filter)
      containerRef.current.style.filter = `brightness(${state.brightness})`;

      // Update CSS variable for dynamic shadow
      containerRef.current.style.setProperty('--shadow-x', `${state.shadowX}px`);
      containerRef.current.style.setProperty('--shadow-y', `${state.shadowY}px`);

      // Apply individual 3D transform to image layer
      const img = containerRef.current.querySelector('.tilt-3d-image');
      if (img) {
        img.style.transform = `
          translateZ(${state.currentZ * 1.8}px)
          scale(1.02)
        `;
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  };

  /**
   * Mouse move handler
   * Updates target rotation/scale values based on cursor position
   * Does NOT apply transforms directly - animation loop handles that
   */
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Position relative to element center
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize to -1 to 1 range
    const xPercent = (x - centerX) / centerX;
    const yPercent = (y - centerY) / centerY;

    // Update target values only
    const state = stateRef.current;
    state.targetRotateY = xPercent * 8; // Max 5 degrees
    state.targetRotateX = yPercent * -8; // Max 5 degrees (inverted)
    state.targetScale = 1.01;
    state.targetZ = 18; // Max 5px translateZ
    state.mouseX = x;
    state.mouseY = y;
  };

  /**
   * Mouse enter handler
   * Marks that we're hovering (triggers brightness increase)
   */
  const handleMouseEnter = () => {
    stateRef.current.isHovering = true;
  };

  /**
   * Mouse leave handler
   * Resets all target values to center/default
   * Animation loop smoothly interpolates back
   */
  const handleMouseLeave = () => {
    const state = stateRef.current;
    state.targetRotateX = 0;
    state.targetRotateY = 0;
    state.targetScale = 1.025;
    state.targetZ = 0;
    state.shadowX = 0;
    state.shadowY = 0;
    state.isHovering = false;
  };

  // Start animation loop on mount
  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`tilt-3d-image-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        alt={alt}
        className="tilt-3d-image"
        draggable={false}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      {/* Fallback emoji if image fails to load */}
      <div className="tilt-3d-fallback">👨‍💻</div>
    </div>
  );
}
