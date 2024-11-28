import findChampions from "./Champions";
import testCases from "./data/testCases";

function testFindChampions(): void {

  testCases.forEach(({ description, players, expected }) => {
    const result = findChampions(players);
    console.log(
      `Test Case (${description}):`,
      JSON.stringify(result) === JSON.stringify(expected) ? "Passed" : "Failed"
    );
  });
}

testFindChampions();