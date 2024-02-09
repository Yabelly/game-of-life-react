import checkLineForAlive from "./checkLineForAlive";

const tick = (oldWorld: number[][]): number[][] => {
  console.log("tick");

  const newWorld: number[][] = [];
  for (let y = 0; y < oldWorld.length; y++) {
    const newRow: number[] = [];

    for (let z = 0; z < oldWorld[y].length; z++) {
      const el = oldWorld[y][z];
      let aliveNeighbours = 0;

      // Checking left neighbor
      if (z > 0 && oldWorld[y][z - 1]) {
        aliveNeighbours++;
      }

      // Checking right neighbor
      if (z < oldWorld[y].length - 1 && oldWorld[y][z + 1]) {
        aliveNeighbours++;
      }

      // Checking neighbors in the row above
      if (y > 0) {
        aliveNeighbours += checkLineForAlive(oldWorld[y - 1], z);
      }

      // Checking neighbors in the row below
      if (y < oldWorld.length - 1) {
        aliveNeighbours += checkLineForAlive(oldWorld[y + 1], z);
      }

      // RULES FOR LIFE & DEATH
      // console.log(`aliveNeighbours: ${aliveNeighbours} + ${el}`);

      if (aliveNeighbours === 3 && !el) {
        // Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
        newRow.push(1);
        // console.log(`Alive: exact 3 at ${y} z: ${z}`);
      } else if ((aliveNeighbours < 2 || aliveNeighbours > 3) && el) {
        // Any live cell with fewer than two live neighbors or more than three live neighbors dies.
        newRow.push(0);
        // console.log(`Death: < 2 or > 3 y: ${y} z: ${z}`);
      } else if (el) {
        // Any live cell with two or three live neighbors lives on to the next generation.
        newRow.push(el + 1);
        // console.log(`I stay alive y: ${y} z: ${z}`);
      } else {
        newRow.push(0);
      }
    }

    newWorld.push(newRow);
  }
  console.log(newWorld);
  return newWorld;
};

export default tick;
