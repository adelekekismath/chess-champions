import findChampions from "./Champions";

function testFindChampions(): void {
  const testCases = [
    {
      description: "Random Players",
      players: [
        { name: "Alice", age: 20, elo: 2400 },
        { name: "Bob", age: 16, elo: 2500 },
        { name: "Charlie", age: 21, elo: 2300 },
        { name: "David", age: 20, elo: 2450 },
        { name: "David1", age: 20, elo: 2050 },
        { name: "David3", age: 20, elo: 2850 },
        { name: "Eve", age: 19, elo: 2200 },
      ],
      expected: [
        { name: "Bob", age: 16, elo: 2500 },
        { name: "David3", age: 20, elo: 2850 },
      ],
    },
    {
      description: "Empty List",
      players: [],
      expected: [],
    },
    {
      description: "Single Player",
      players: [{ name: "Alice", age: 20, elo: 2400 }],
      expected: [{ name: "Alice", age: 20, elo: 2400 }],
    },
    {
      description: "Multiple Players with same age",
      players: [
        { name: "Alice", age: 20, elo: 2400 },
        { name: "Bob", age: 20, elo: 2500 },
        { name: "Charlie", age: 20, elo: 2300 },
        { name: "David", age: 20, elo: 2450 },
      ],
      expected: [{ name: "Bob", age: 20, elo: 2500 }],
    },
    {
      description: "Multiple Players with same age and elo",
      players: [
        { name: "Alice", age: 20, elo: 2400 },
        { name: "Bob", age: 20, elo: 2400 },
        { name: "Charlie", age: 20, elo: 2400 },
        { name: "David", age: 20, elo: 2400 },
      ],
      expected: [
        { name: "Alice", age: 20, elo: 2400 },
        { name: "Bob", age: 20, elo: 2400 },
        { name: "Charlie", age: 20, elo: 2400 },
        { name: "David", age: 20, elo: 2400 },
      ],
    },
    {
      description: "Multiple Players with same age and different elo",
      players: [
        { name: "Alice", age: 20, elo: 2400 },
        { name: "Bob", age: 20, elo: 2500 },
        { name: "Charlie", age: 20, elo: 2300 },
        { name: "David", age: 20, elo: 2450 },
      ],
      expected: [{ name: "Bob", age: 20, elo: 2500 }],
    },
    {
      description: "Multiple Players with same elo",
      players: [
        { name: "Alice", age: 20, elo: 2400 },
        { name: "Bob", age: 16, elo: 2400 },
        { name: "Charlie", age: 21, elo: 2400 },
        { name: "David", age: 20, elo: 2400 },
      ],
      expected: [{ name: "Bob", age: 16, elo: 2400 }],
    },
  ];

  testCases.forEach(({ description, players, expected }) => {
    const result = findChampions(players);
    console.log(
      `Test Case (${description}):`,
      JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed"
    );
  });
}

testFindChampions();