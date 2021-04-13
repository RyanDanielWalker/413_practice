import ChangeInPocket from './../src/change.js'

const { TestScheduler } = require("jest")

// }

describe('ChangeInPocket', () => {
  it('should create an object with four properties: quarters, dimes, nickels, pennies', () => {
    let myChange = new ChangeInPocket(1, 1, 1, 1) //{quarters: 1, dimes: 1, nickels: 1, pennies:1}
    expect(myChange).toEqual({ quarters: 1, dimes: 1, nickels: 1, pennies: 1 })
  })
})

describe('enoughMoney', () => {
  it("It should check if there is enough change.", () => {
    let weHave = new ChangeInPocket(1, 1, 1, 1)
    let costOfItem = 1;
    const myMoney = weHave.enoughMoney(costOfItem);
    expect(myMoney).toBe(false);
  })
})