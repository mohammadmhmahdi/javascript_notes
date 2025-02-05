var moneyIHave = 1000;
//Product Prices
var orangePrice = 90;
var applePrice = 70;
//New Prices
var newOrangePrice = orangePrice * 5;
var newApplePrice = applePrice * 5;

var totalPrice = newOrangePrice + newApplePrice ;
var retureMoney = moneyIHave - totalPrice;

console.log(totalPrice);
console.log(retureMoney);
