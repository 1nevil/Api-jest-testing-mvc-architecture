const add = require("../Math");
// test("hello world", () => {
//   throw new Error("Failure in print hello world");
// });

test("Check calculation", () => {
  const sum = add(10, 20);
  console.log(sum);
  expect(sum).toBe(30);
});

// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a < 0 || b < 0)
//         reject(new Error("A and B value should be greater than equal 0"));
//       resolve(a + b);
//     }, 100);
//   });
// };

// test("Addition", async () => {
//   const sum = await add(1, 2);
//   expect(sum).toBe(3);
// });
