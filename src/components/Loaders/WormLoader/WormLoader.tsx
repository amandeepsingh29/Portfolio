import React from 'react';
import './WormLoader.css';

export default function WormLoader() {
  return (
    <div className="flex items-center justify-center">
      <svg 
        className="worm-loader"
        viewBox="0 0 128 128"
        width="128"
        height="128"
      >
        <defs>
          <linearGradient id="worm-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
        </defs>
        <circle 
          className="worm-loader__ring"
          cx="64"
          cy="64"
          r="56"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        <path 
          className="worm-loader__worm"
          d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
          fill="none"
          stroke="url(#worm-grad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="44 1111"
          strokeDashoffset="10"
        />
      </svg>
    </div>
  );
}