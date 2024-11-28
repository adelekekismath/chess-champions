import findChampions from "./Champions";
import testCases from "./data/testCases";

function testFindChampions(): void {

  testCases.forEach(({ description, players, expected }) => {
    const startTime = Date.now();
    const result = findChampions(players);
    const endTime = Date.now();
    const duration = endTime - startTime;
    const isPassed = JSON.stringify(result) === JSON.stringify(expected);
  
    console.log(
      `Test Case (${description}): ${isPassed ? "Passed" : "Failed"} in ${duration}ms`
    );
  });
}

testFindChampions();