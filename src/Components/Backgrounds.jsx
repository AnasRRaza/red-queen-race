import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

const Backgrounds = () => {

  const sceneryFrames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
  ];
  const sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
  };

  const background1Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground,
  });

  const background2Movement = useWebAnimations({
    keyframes: sceneryFrames,
    animationOptions: sceneryTimingBackground,
  });

  const goFast = () => {
    background1Movement.getAnimation().playbackRate *= 1.1;
    background2Movement.getAnimation().playbackRate *= 1.1;
  }

  useEffect(() => {

    window.addEventListener("click", goFast);

    setInterval(() => {
      if (background1Movement.getAnimation().playbackRate > 1
        || background2Movement.getAnimation().playState > 1
      ) {
        background1Movement.getAnimation().playbackRate *= .9;
        background2Movement.getAnimation().playbackRate *= .9;
      }
    }, 1000);

  });

  return (
    <div>
      <div className="scenery" id="background1" ref={background1Movement.ref}>
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
          alt=" " />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
          alt=" " />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
          alt=" " />
      </div>
      <div className="scenery" id="background2" ref={background2Movement.ref}>
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
          alt=" " />
        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
          alt=" " />
        <img
          id="palm2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
          alt=" " />
      </div>
    </div>
  )
}

export default Backgrounds;
