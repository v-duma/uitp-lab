import { expect, test, describe } from "vitest";
import { calculateDiscount } from "./math.js";

describe("Функція знижки", () => {
  test("правильно рахує звичайну знижку", () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  test("повертає 0, якщо ціна негативна", () => {
    expect(calculateDiscount(-50, 10)).toBe(0);
  });

  test("повертає повну ціну, якщо знижка більше 100%", () => {
    expect(calculateDiscount(100, 150)).toBe(100);
  });

  test("правильно працює зі знижкою 0%", () => {
    expect(calculateDiscount(100, 0)).toBe(100);
  });

  test("правильно працює зі знижкою 100%", () => {
    expect(calculateDiscount(100, 100)).toBe(0);
  });
});
