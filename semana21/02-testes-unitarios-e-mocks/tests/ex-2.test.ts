import { validateCharacter } from "../src/ex-1";

// a
test("Should return false for empty name", () => {
  const result = validateCharacter({
    name: "",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

// b
test("Should return false for life equals to zero", () => {
  const result = validateCharacter({
    name: "John Doe's father",
    life: 0,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(false);
});

// c
test("Should return false for strength equals to zero", () => {
  const result = validateCharacter({
    name: "John Doe",
    life: 1,
    strength: 0,
    defense: 1,
  });

  expect(result).toBe(false);
});

// d
test("Should return false for defense equals to zero", () => {
  const result = validateCharacter({
    name: "Windows Defender",
    life: 1,
    strength: 1,
    defense: 0,
  });

  expect(result).toBe(false);
});

// e
test("Should return false for defense equals to zero", () => {
  const result = validateCharacter({
    name: "Someone",
    life: -1,
    strength: 1,
    defense: 1,
  });

  expect(result).toBe(false);
});

// f
test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 15,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});

// g
test("Should return true for all valid inputs", () => {
  const result = validateCharacter({
    name: "Scorpion",
    life: 1500,
    strength: 300,
    defense: 500,
  });

  expect(result).toBe(true);
});
