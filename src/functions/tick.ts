import checkLineForAlive from "./checkLineForAlive";

const tick = (oldWorld: string[][]): string[][] => {
  console.log("tick");

  const newWorld: string[][] = [];
  for (let y = 0; y < oldWorld.length; y++) {
    const newRow: string[] = [];

    for (let z = 0; z < oldWorld[y].length; z++) {
      const el = oldWorld[y][z];
      let aliveNeighbours = 0;
      if (oldWorld[y][z - 1] === "alive") {
        // console.log(`a lefty is alive at my idx y: ${y} z: ${z}`);
        aliveNeighbours++;
      }
      if (oldWorld[y][z + 1] === "alive") {
        // console.log(`a righty is alive at my idx y: ${y} z: ${z}`);
        aliveNeighbours++;
      }
      if (oldWorld[y - 1]) {
        aliveNeighbours =
          aliveNeighbours + checkLineForAlive(oldWorld[y - 1], z);
      }
      if (oldWorld[y + 1]) {
        aliveNeighbours =
          aliveNeighbours + checkLineForAlive(oldWorld[y + 1], z);
      }
      // RULES FOR LIFE & DEATH
      if (aliveNeighbours === 3 && el === "death") {
        //Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        newRow.push("alive");
        // console.log(`Alive: exact 3 at ${y} z: ${z}`);
      } else if (aliveNeighbours < 2 && el === "alive") {
        //Any live cell with fewer than two live neighbors dies, as if by underpopulation.
        newRow.push("death");
        // console.log(`Death: < 2 y: ${y} z: ${z}`);
      } else if (aliveNeighbours > 3 && el === "alive") {
        //Any live cell with more than three live neighbors dies, as if by overpopulation.
        newRow.push("death");
        // console.log(`Death: > 3 y: ${y} z: ${z}`);
      } else {
        newRow.push(el);
        // console.log(`I stay the same y: ${y} z: ${z}`);
        //Any live cell with two or three live neighbors lives on to the next generation.
      }
    }

    newWorld.push(newRow);
  }

  return newWorld;
};

export default tick;
