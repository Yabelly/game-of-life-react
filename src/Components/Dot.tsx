import { FC } from "react";

type props = {
  organism: number;
  x: number;
  y: number;
  godMode: (x: number, y: number) => void;
};

const Dot: FC<props> = ({ organism, x, y, godMode }) => {
  let renderOrganism: string;

  switch (organism) {
    case 0:
      renderOrganism = "death";
      break;
    case 1:
      renderOrganism = "color-1";
      break;
    case 2:
      renderOrganism = "color-2";
      break;
    case 3:
      renderOrganism = "color-3";
      break;
    case 4:
      renderOrganism = "color-4";
      break;
    case 5:
      renderOrganism = "color-5";
      break;
    case 6:
      renderOrganism = "color-6";
      break;
    case 7:
      renderOrganism = "color-7";
      break;
    case 8:
      renderOrganism = "color-8";
      break;

    default:
      renderOrganism = "color-9";
  }
  return (
    <div
      onClick={() => godMode(x, y)}
      className={renderOrganism + " cell"}
    ></div>
  );
};

export default Dot;
