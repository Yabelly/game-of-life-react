import { FC } from "react";

type props = {
  organism: string;
  x: number;
  y: number;
  godMode: (x: number, y: number) => void;
};

const Dot: FC<props> = ({ organism, x, y, godMode }) => {
  return <div onClick={() => godMode(x, y)} className={organism}></div>;
};

export default Dot;
