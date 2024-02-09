import { useEffect, useState } from "react";
import tick from "./functions/tick";
import "./App.css";
import createWorld from "./functions/createWorld";
import WorldRender from "./Components/WorldRender";
import Dashboard from "./Components/Dashboard";

type Stage = { xAxis: number; yAxis: number; tickTime: number };

function App() {
  const [world, setWorld] = useState<number[][] | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [stage, setStage] = useState<Stage>({
    xAxis: 10,
    yAxis: 10,
    tickTime: 1000,
  });

  const { xAxis, yAxis, tickTime } = stage;

  const godMode = (x: number, y: number) => {
    if (!world || !world[y]) return;

    const newWorld = [...world];
    const toggleStatus = world[y][x] === 0 ? 1 : 0;

    newWorld[y][x] = toggleStatus;
    setWorld(newWorld);
  };

  useEffect(() => {
    if (!world) {
      const emptyWorld = createWorld(xAxis, yAxis);
      setWorld(emptyWorld);
      console.log(emptyWorld);
    } else {
      const updatedWorld = createWorld(xAxis, yAxis);
      setWorld(updatedWorld);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xAxis, yAxis]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    const runSimulation = () => {
      if (world !== null) {
        const day = tick(world);
        setWorld(day);
      }
    };

    if (isRunning) {
      intervalId = setInterval(runSimulation, tickTime);

      return () => {
        clearInterval(intervalId);
      };
    }

    if (!isRunning) {
      clearInterval(intervalId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, world]);

  const toggleRun = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };
  if (!world) return <div>no world</div>;

  return (
    <>
      <Dashboard stage={stage} setStage={setStage} isRunning={isRunning} />
      <WorldRender world={world} godMode={godMode} />
      <button onClick={toggleRun}>{isRunning ? "Stop" : "Run"}</button>
    </>
  );
}

export default App;
