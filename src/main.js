import ChangeInPocket from './change.js';
import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#change-amount-input").submit(function (event) {
    event.preventDefault();
    const costOfItem = parseFloat($("#item-cost").val());
    const quarters = parseFloat($("#quarters").val());
    const dimes = parseFloat($("#dimes").val());
    const nickels = parseFloat($("#nickels").val());
    const pennies = parseFloat($("#pennies").val());
    let myChange = new ChangeInPocket(quarters, dimes, nickels, pennies);
    const answer = myChange.enoughMoney(costOfItem);
    if (answer === true) {
      $("#return").text("you have enough money");
    } else {
      $("#return").text("you do not have enough money");
    }

  });
});
