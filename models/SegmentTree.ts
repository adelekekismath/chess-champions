export default class SegmentTree {
    private size: number;
    private tree: number[];
  
    constructor(maxAge: number) {
      this.size = maxAge + 1;
      
      // The tree array has double the size to account for both leaf nodes and internal nodes
      this.tree = Array(this.size * 2).fill(-1);
    }
  
    update(age: number, eloRating: number): void {
      // Convert the age to the corresponding position in the segment tree
      let positionInTree = age + this.size;

      // Update the leaf node with the maximum ELO rating
      this.tree[positionInTree] = Math.max(this.tree[positionInTree], eloRating);

      // Propagate the update up the tree
      while (positionInTree > 1) {
        // Move to the parent node 
        positionInTree = Math.floor(positionInTree / 2);

        // Update the parent node with the maximum of its two children
        this.tree[positionInTree] = Math.max(this.tree[2 * positionInTree], this.tree[2 * positionInTree + 1]);
      }
    }
  
    getMaxEloInRange(startPosition: number, endPosition: number): number {
      // Adjust positions to the corresponding indices in the segment tree
      startPosition += this.size;
      endPosition += this.size;

      let maxEloRating = -1; // Initialize the maximum ELO rating
  
      while (startPosition <= endPosition) {
         // If the start position is odd, include it in the range and move to the next position
        if (startPosition % 2 === 1) maxEloRating = Math.max(maxEloRating, this.tree[startPosition++]);

        // If the end position is even, include it in the range and move to the previous position
        if (endPosition % 2 === 0) maxEloRating = Math.max(maxEloRating, this.tree[endPosition--]);

        // Move to the parent nodes
        startPosition = Math.floor(startPosition / 2);
        endPosition = Math.floor(endPosition / 2);
      }
      return maxEloRating;
    }
  }