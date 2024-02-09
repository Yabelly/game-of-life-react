export default function createWorld(x: number, y: number): number[][] {
  const outerArr: number[][] = [];
  for (let i = 0; i < y; i++) {
    const innerArr: number[] = [];
    for (let j = 0; j < x; j++) {
      innerArr.push(0);
    }
    outerArr.push(innerArr);
  }
  return outerArr;
}
