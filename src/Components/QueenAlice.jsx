import React, { useEffect } from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';

const QueenAlice = () => {

  const spriteFrames = [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-100%)' }
  ];

  const redQueen_alice_sprite = useWebAnimations({
    keyframes: spriteFrames,
    animationOptions: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    }
  })

  const goFast = () => {
    redQueen_alice_sprite.getAnimation().playbackRate *= 1.1;
  }
  useEffect(() => {

    window.addEventListener("click", goFast);

    setInterval(() => {
      if (redQueen_alice_sprite.getAnimation().playbackRate > 1) {
        redQueen_alice_sprite.getAnimation().playbackRate *= .9;
      }
    }, 1000);

  });

  return (
    <div id="red-queen_and_alice">
      <img
        id="red-queen_and_alice_sprite"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
        alt="Alice and the Red Queen running to stay in place."
        ref={redQueen_alice_sprite.ref}
      />
    </div>
  )
}

export default QueenAlice;
