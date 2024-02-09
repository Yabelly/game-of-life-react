const checkLineForAlive = (arr: number[], idx: number): number => {
  const sliceStart = Math.max(0, idx - 1);
  const sliceEnd = Math.min(arr.length, idx + 2);
  const slicedArray = arr.slice(sliceStart, sliceEnd);

  let count = 0;
  for (const value of slicedArray) {
    if (value) {
      count++;
    }
  }

  return count;
};

export default checkLineForAlive;
