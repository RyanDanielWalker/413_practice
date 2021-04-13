export default function ChangeInPocket(quarters, dimes, nickels, pennies) {
  this.quarters = quarters;
  this.dimes = dimes;
  this.nickels = nickels;
  this.pennies = pennies;
}

ChangeInPocket.prototype.enoughMoney = function (costOfItem) {
  let q = this.quarters;
  let d = this.dimes;
  let n = this.nickels;
  let p = this.pennies;
  let total = q * .25 + d * .10 + n * .05 + p * .01;
  if (total >= costOfItem) {
    return true;
  } else {
    return false;
  }
};