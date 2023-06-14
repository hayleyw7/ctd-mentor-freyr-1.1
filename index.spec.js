const { logString, today, concat, capitalizeFirstLetter, mod, avg, absoluteDifference, longestStringLength } = require('./index.js')

describe("Testing console log of logString function", () => {
  test("logString function", () => {
    console.log = jest.fn();
    logString("Happy Birthday!");
    expect(console.log).toHaveBeenCalledWith("Happy Birthday!");
  })
})

describe("Testing return of today function", () => {
  test("today function", () => {
      const realDateNow = Date.now.bind(global.Date);
      const dateNowStub = jest.fn(() => 1530518207007);
      global.Date.now = dateNowStub;
      expect(today()).toBe(1530518207007);
  })
})

describe("Testing return value of concat function", () => {
	test("concat function", () => {
		expect(concat('Hello', ' Goodbye')).toBe('Hello Goodbye');
	})
})

describe("Testing return value of capitalizeFirstLetter function", () => {
  test("capitalizeFirstLetter function", () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  })
})

describe("Testing return value of mod function", () => {
  test("mod function", () => {
    expect(mod(2,1)).toBe(0);
  })
})

describe("Testing console log of avg function", () => {
  test("avg function", () => {
    expect(avg(1,5)).toBe(3);
  })
})

describe("Testing return value of absoluteDifference function", () => {
  test("absoluteDifference function", () => {
    const small_1 = 1;
    const big_2 = 5;

    expect(absoluteDifference(small_1, big_2)).toBe(4);
    expect(absoluteDifference(big_2, small_1)).toBe(4);
    expect(absoluteDifference(1, 1)).toBe(0);
  })
})

describe("Testing return value of longestStringLength function", () => {
  test("longestStringLength function", () => {
    const str_1 = 'a';
    const str_2 = 'abc';
    const str_3 = 'def';

    expect(longestStringLength(str_1, str_2)).toBe(3);
    expect(longestStringLength(str_2, str_1)).toBe(3);
    expect(longestStringLength(str_2, str_3)).toBe(3);
  })
})
