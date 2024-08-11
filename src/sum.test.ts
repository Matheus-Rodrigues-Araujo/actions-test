import sum from "../src/sum";

describe("Sum operations tests", () => {
  it("Should be able to sum A  and B", () => {
    expect(sum(8, 2)).toBe(10);
  });

  it("Should be able to sum A  and B", () => {
    expect(sum(12, 80)).toBe(92);
  });

});
