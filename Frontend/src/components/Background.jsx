import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />

      {/* Subtle Radial Gradient Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};
