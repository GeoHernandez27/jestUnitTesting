const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => cloaseDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => cloaseDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const cloaseDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name...');


describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });
  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
// not
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//CHECK FOR TRUTHY & FALSE VALUES
// tobeNull matches only null
// toBeUndefined matches only undefined
//

// toBeNull

test("Should be Null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual

test("User should be Brad Traversy object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy"
  });
});

// less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// regex
test("There is no I in Team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in username", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// Promise
// test("User fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//     expect(data.name).toEqual('Leanne Graham1');
//   });
// });

// Async Await
test("User fetched name should be Leanne Graham", async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
      expect(data.name).toEqual('Leanne Graham');
   
  });
  