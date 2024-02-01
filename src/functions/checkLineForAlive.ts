const checkLineForAlive = (arr: string[], idx: number): number => {
  const sliceStart = Math.max(0, idx - 1);
  const sliceEnd = Math.min(arr.length, idx + 2);
  const slicedArray = arr.slice(sliceStart, sliceEnd);

  let count = 0;
  for (const value of slicedArray) {
    if (value === "alive") {
      count++;
    }
  }

  return count;
};

export default checkLineForAlive;
