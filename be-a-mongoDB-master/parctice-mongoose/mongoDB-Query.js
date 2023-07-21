// alt + shift + F //auto formater

// view all user's age only
// db.practice.find({ }, { age : 1 }) //field filter

// filter by age
db.practice.find({ age: { $gt: 34 } }, { age : 1 })

// using projection filter by age
// db.practice.find({ age: { $gt: 34 } }) // filter
//     .projection({ age: 1 }) // field filter
//     .sort({ age: -1 })  // sorting assending order