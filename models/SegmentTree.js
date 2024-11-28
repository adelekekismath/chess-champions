"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SegmentTree {
    constructor(maxAge) {
        this.size = maxAge + 1;
        this.tree = Array(this.size * 2).fill(-1);
    }
    update(age, elo) {
        let index = age + this.size;
        this.tree[index] = Math.max(this.tree[index], elo);
        while (index > 1) {
            index = Math.floor(index / 2);
            this.tree[index] = Math.max(this.tree[2 * index], this.tree[2 * index + 1]);
        }
    }
    query(startAge, endAge) {
        startAge += this.size;
        endAge += this.size;
        let maxElo = -1;
        while (startAge <= endAge) {
            if (startAge % 2 === 1)
                maxElo = Math.max(maxElo, this.tree[startAge++]);
            if (endAge % 2 === 0)
                maxElo = Math.max(maxElo, this.tree[endAge--]);
            startAge = Math.floor(startAge / 2);
            endAge = Math.floor(endAge / 2);
        }
        return maxElo;
    }
}

exports.default = SegmentTree;
