import React, { useReducer } from 'react';
import { Variants } from 'framer-motion';
import * as B from './ActivityBox.style';

interface BoxProps {
  img: string;
  title: string;
}

const variants: Variants = {
  active: { scale: 1.2, transition: { duration: 0.2 } },
  inactive: { scale: 1, transition: { duration: 0.2 } },
};

function SmallActivityBox({ img, title }: BoxProps) {
  const [active, setActive] = useReducer((prev: boolean) => !prev, false);
  return (
    <B.SmallBox onMouseEnter={setActive} onMouseLeave={setActive}>
      <B.SmallBoxImage src={img} initial="inactive" animate={active ? 'active' : 'inactive'} variants={variants} />
      <B.SmallBoxTitle>{title}</B.SmallBoxTitle>
    </B.SmallBox>
  );
}

export default SmallActivityBox;
