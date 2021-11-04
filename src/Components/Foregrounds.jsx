import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

const Foregrounds = () => {

  const sceneryFrames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];

  const sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
  };

  const foreground1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground,
  });

  const foreground2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingForeground,
  });

  const goFast = () => {
    foreground1Movement.getAnimation().playbackRate *= 1.1;
    foreground2Movement.getAnimation().playbackRate *= 1.1;
  }

  useEffect(() => {

    window.addEventListener("click", goFast);

    setInterval(() => {
      if (foreground1Movement.getAnimation().playbackRate > 1
        || foreground2Movement.getAnimation().playState > 1
      ) {
        foreground1Movement.getAnimation().playbackRate *= .9;
        foreground2Movement.getAnimation().playbackRate *= .9;
      }
    }, 1000);

  });

  return (
    <div>
      <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
          alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
          alt=" " />
        <img
          id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
          alt=" " />
      </div>
    </div>
  )
}

export default Foregrounds;
