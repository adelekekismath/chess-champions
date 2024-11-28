export default class SegmentTree {
    private size: number;
    private tree: number[];
  
    constructor(maxAge: number) {
      this.size = maxAge + 1;
      this.tree = Array(this.size * 2).fill(-1);
    }
  
    update(age: number, elo: number): void {
      let index = age + this.size;
      this.tree[index] = Math.max(this.tree[index], elo);
      while (index > 1) {
        index = Math.floor(index / 2);
        this.tree[index] = Math.max(this.tree[2 * index], this.tree[2 * index + 1]);
      }
    }
  
    query(startAge: number, endAge: number): number {
      startAge += this.size;
      endAge += this.size;
      let maxElo = -1;
  
      while (startAge <= endAge) {
        if (startAge % 2 === 1) maxElo = Math.max(maxElo, this.tree[startAge++]);
        if (endAge % 2 === 0) maxElo = Math.max(maxElo, this.tree[endAge--]);
        startAge = Math.floor(startAge / 2);
        endAge = Math.floor(endAge / 2);
      }
      return maxElo;
    }
  }