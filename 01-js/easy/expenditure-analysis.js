/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   return [{category : transactions['category'], amountspent : transactions['price']}];
// }

// module.exports = calculateTotalSpentByCategory;
// making some changes here 
// deleted something here now need to update in the master branch 
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
