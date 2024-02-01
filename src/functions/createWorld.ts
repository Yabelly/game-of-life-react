export default function createWorld(x: number, y: number): string[][] {
  const outerArr: string[][] = [];
  for (let i = 0; i < y; i++) {
    const innerArr: string[] = [];
    for (let j = 0; j < x; j++) {
      innerArr.push("death");
    }
    outerArr.push(innerArr);
  }
  return outerArr;
}
