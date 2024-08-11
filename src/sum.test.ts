import sum from "../src/sum";

describe("Sum opetation", () => {
    it("Should be able to sum A  and B")
    const result:number =  sum(8, 2);

    expect(result).toBe(10);
})