const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function totalAmountSpent(amount){
    return 100
}

Given('I buy a pair of shoes for ${int}', function (int) {
    this.amount = int;
});

When('I pay for them I get a receipt with the total amount', function () {
    this.actualAmount = totalAmountSpent(this.amount);
});

Then('I should see the total amount spent is ${int}', function (int) {
    assert.strictEqual(this.actualAmount, int);
});
