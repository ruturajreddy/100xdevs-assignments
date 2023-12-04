/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [{category : transactions['category'], amountspent : transactions['price']}];
// }

// module.exports = calculateTotalSpentByCategory;

const transaction = [{
  itemName : 'milk', 
  category : 'grocery', 
  price : 1000, 
  timestamp : 'today'
}, {
  itemName : 'bread', 
  category : 'grocery', 
  price : 1000, 
  timestamp : 'today'
}, {
  itemName : 'clothes', 
  category : 'wearables', 
  price : 1000, 
  timestamp : 'today'
}
]

// function calTotalAmt(transaction) {
//   return transaction['itemName'];
// }

// console.log(calTotalAmt(transaction));

console.log(transaction[0]['category']);
