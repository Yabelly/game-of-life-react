import { useState, Dispatch, ChangeEvent } from "react";

type Stage = { xAxis: number; yAxis: number; tickTime: number };

type Props = {
  stage: Stage;
  setStage: Dispatch<React.SetStateAction<Stage>>;
  isRunning: boolean;
};

const Dashboard = ({ stage, setStage, isRunning }: Props) => {
  const [newStage, setNewStage] = useState(stage);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewStage((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    setStage(newStage);
  };

  return (
    <div>
      <label>
        X Axis:
        <input
          type="number"
          name="xAxis"
          value={newStage.xAxis}
          disabled={isRunning}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Y Axis:
        <input
          type="number"
          name="yAxis"
          value={newStage.yAxis}
          disabled={isRunning}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Tick Time:
        <input
          type="number"
          name="tickTime"
          value={newStage.tickTime}
          disabled={isRunning}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button onClick={handleButtonClick} disabled={isRunning}>
        Set Values
      </button>
    </div>
  );
};

export default Dashboard;
