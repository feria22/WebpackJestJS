import { Sum} from "../src/scripts/example";

describe("test function Sum in module example", () => {
    test("adds 3 + 2 to equal 5", () => {
      expect(Sum(3,2)).toBe(5);
    });
  })