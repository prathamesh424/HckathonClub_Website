import React from 'react';

const SphereAnimation = () => {
  const planes = Array.from({ length: 12 }, (_, i) => i + 1);
  const spokes = Array.from({ length: 36 }, (_, i) => i + 1);

  return (
    <div className="main-wrapper">
      <div className="sphere-wrapper">
        {planes.map((plane) => (
          <div className={`plane plane-${plane}`} key={plane}>
            {spokes.map((spoke) => (
              <div className={`spoke spoke-${spoke}`} key={spoke}>
                <div className="dot"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SphereAnimation;
