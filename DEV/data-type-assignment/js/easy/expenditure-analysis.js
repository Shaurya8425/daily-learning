/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

const list = [
  {
    itemName: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    timestamp: "2024-02-08T10:30:00Z"
  },
  {
    itemName: "Coffee Beans",
    category: "Food & Beverage",
    price: 12.50,
    timestamp: "2024-02-08T11:15:00Z"
  },
  {
    itemName: "Yoga Mat",
    category: "Sports & Fitness",
    price: 35.00,
    timestamp: "2024-02-08T09:45:00Z"
  },
  {
    itemName: "Notebook Set",
    category: "Office Supplies",
    price: 8.99,
    timestamp: "2024-02-08T14:20:00Z"
  },
  {
    itemName: "Bluetooth Headphones",
    category: "Electronics",
    price: 79.99,
    timestamp: "2024-02-07T16:30:00Z"
  },
  {
    itemName: "Green Tea",
    category: "Food & Beverage",
    price: 15.00,
    timestamp: "2024-02-08T08:00:00Z"
  },
  {
    itemName: "Desk Lamp",
    category: "Office Supplies",
    price: 45.00,
    timestamp: "2024-02-08T13:45:00Z"
  },
  {
    itemName: "USB-C Cable",
    category: "Electronics",
    price: 12.99,
    timestamp: "2024-02-08T15:10:00Z"
  },
  {
    itemName: "Protein Bars",
    category: "Food & Beverage",
    price: 24.99,
    timestamp: "2024-02-07T12:00:00Z"
  },
  {
    itemName: "Dumbbells",
    category: "Sports & Fitness",
    price: 55.00,
    timestamp: "2024-02-08T07:30:00Z"
  }
]

const uniqueCategories = [...new Set(list.map(t => t.category))]
console.log(uniqueCategories)

function calculateTotalSpentByCategory(transactions) {
  const uniqueCategories = [...new Set(transactions.map(t => t.category))]
  const totalsByCategory = uniqueCategories.map(category => {
    const total = transactions.filter(t => t.category === category).reduce((sum, t) => sum + t.price, 0)
    return { 
      category:category,
      totalSpent:total
     }
  })
  return totalsByCategory
}

const transactions = [
  { item: "Mouse", category: "Electronics", price: 30 },
  { item: "Coffee", category: "Food", price: 10 },
  { item: "Keyboard", category: "Electronics", price: 50 }
];

// reduce
const total=transactions.reduce((sum,t)=>{
  return sum+t.price
},0)
console.log(total)

// filter
const group=transactions.filter(t=>t.category==="Electronics")
console.log(group)

// map
const item=transactions.map(t=>
  t.item
)
console.log(item)


module.exports = calculateTotalSpentByCategory;