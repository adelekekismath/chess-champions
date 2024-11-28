import Random1000Players from "./random1000Players";
import { TestCase } from "../models/Types";
  
  
export const testCases: TestCase[] = [
    {
      description: "Random Players",
      players: [
        { name: "Alice", age: 20, eloRating: 2400 },
        { name: "Bob", age: 16, eloRating: 2500 },
        { name: "Charlie", age: 21, eloRating: 2300 },
        { name: "David", age: 20, eloRating: 2450 },
        { name: "David1", age: 20, eloRating: 2050 },
        { name: "David3", age: 20, eloRating: 2850 },
        { name: "Eve", age: 19, eloRating: 2200 }
      ],
      expected: [
        { name: "Bob", age: 16, eloRating: 2500 },
        { name: "David3", age: 20, eloRating: 2850 }
      ]
    },
    {
      description: "Empty List",
      players: [],
      expected: []
    },
    {
      description: "Single Player",
      players: [{ name: "Alice", age: 20, eloRating: 2400 }],
      expected: [{ name: "Alice", age: 20, eloRating: 2400 }]
    },
    {
      description: "Multiple Players with same age",
      players: [
        { name: "Alice", age: 20, eloRating: 2400 },
        { name: "Bob", age: 20, eloRating: 2500 },
        { name: "Charlie", age: 20, eloRating: 2300 },
        { name: "David", age: 20, eloRating: 2450 }
      ],
      expected: [{ name: "Bob", age: 20, eloRating: 2500 }]
    },
    {
      description: "Multiple Players with same age and eloRating",
      players: [
        { name: "Alice", age: 20, eloRating: 2400 },
        { name: "Bob", age: 20, eloRating: 2400 },
        { name: "Charlie", age: 20, eloRating: 2400 },
        { name: "David", age: 20, eloRating: 2400 }
      ],
      expected: [
        { name: "Alice", age: 20, eloRating: 2400 },
        { name: "Bob", age: 20, eloRating: 2400 },
        { name: "Charlie", age: 20, eloRating: 2400 },
        { name: "David", age: 20, eloRating: 2400 }
      ]
    },
    {
      description: "Multiple Players with same age and different eloRating",
      players: [
        { name: "Alice", age: 20, eloRating: 2400 },
        { name: "Bob", age: 20, eloRating: 2500 },
        { name: "Charlie", age: 20, eloRating: 2300 },
        { name: "David", age: 20, eloRating: 2450 }
      ],
      expected: [{ name: "Bob", age: 20, eloRating: 2500 }]
    },
    {
      description: "Multiple Players with same eloRating",
      players: [
        { name: "Alice", age: 20, eloRating: 2400 },
        { name: "Bob", age: 16, eloRating: 2400 },
        { name: "Charlie", age: 21, eloRating: 2400 },
        { name: "David", age: 20, eloRating: 2400 }
      ],
      expected: [{ name: "Bob", age: 16, eloRating: 2400 }]
    },
    {
      description: "1000 Random Players",
      players: Random1000Players,
      expected:  [
        { name: 'Josue', age: 16, eloRating: 2816 },
        { name: 'Fabiola', age: 20, eloRating: 2878 }
      ]
    }
  ]

  export default testCases;