import Dot from "./Dot";

type Props = {
  world: string[][];
  godMode: (x: number, y: number) => void;
};

export default function WorldRender({ world, godMode }: Props) {
  return (
    <>
      <div className="full-world">
        {world.map((row, idxY) => (
          <div key={idxY} className="row-world">
            {row.map((dot, idxX) => (
              <Dot
                key={idxX}
                organism={dot}
                x={idxX}
                y={idxY}
                godMode={godMode}
              ></Dot>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
