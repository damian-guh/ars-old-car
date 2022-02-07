import React from 'react';
import gsap from 'gsap';
import { NextRouter } from 'next/router';

const carAnimation = (
  ref: React.RefObject<HTMLDivElement>,
  event: React.MouseEvent<HTMLSpanElement>,
  href: string,
  router: NextRouter
) => {
  if (ref.current && router.pathname !== href) {
    const svg = ref.current.children[0];
    const group = svg.children[0].children[1];
    const car = group.children[1];

    const distanceBetweenTargetAndCarInPercent =
      ((event.currentTarget.getBoundingClientRect().left +
        event.currentTarget.getBoundingClientRect().width / 2 -
        car.getBoundingClientRect().width / 2 -
        car.getBoundingClientRect().left) /
        car.getBoundingClientRect().width) *
      100;

    router.prefetch(href);

    gsap.to(car, { yPercent: -90, duration: 0.5, scale: 0.7 });

    gsap.to(car, {
      xPercent: distanceBetweenTargetAndCarInPercent,
      duration: 1,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export default carAnimation;
