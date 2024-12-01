import findChampions from "./Champions";
import testCases from "./data/testCases";

function testFindChampions(): void {

  testCases.forEach(({ description, players, expected }) => {
    const startTime = Date.now();
    const result = findChampions(players);
    const endTime = Date.now();
    const duration = endTime - startTime;
    const isPassed = JSON.stringify(result) === JSON.stringify(expected);

    const passedMessage = `\x1b[32mPassed\x1b[0m`;
    const failedMessage = `\x1b[31mFailed\x1b[0m`;

    console.log(
      `Test Case (${description}): ${isPassed ? passedMessage : failedMessage} in ${duration}ms\n`  
    );
  });
}

testFindChampions();