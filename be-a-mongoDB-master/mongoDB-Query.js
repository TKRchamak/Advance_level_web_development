// alt + shift + F //auto formater

show databases;

use practice - mongoose;

// view all user's age only
// db.practice.find({ }, { age : 1 }); //field filter

// ----------filter by age----------
// db.practice.find({ age: { $gt: 34 } }, { age: 1 })

// ----------using projection filter by age----------
// db.practice.find({ age: { $gt: 34 } }) // filter
//     .projection({ age: 1 }) // field filter
//     .sort({ age: -1 })  // sorting assending order



// ----------and operator----------
// db.practice.find({
//     $and: [
//         { gender: 'Female' },
//         { age: { $lt: 60 } },
//         { age: { $gt: 20 } },
//         { "skills.name": 'JAVASCRIPT' }
//     ]
// }).projection({ age: 1 })


// ----------update favoutiteColor to favouriteColor----------
// db.practice.updateMany(
//     {},
//     { $rename: { "favoutiteColor": "favouriteColor" } }
// )


// ----------delete----------
// db.practice.find({ "name.firstName": "Jon" }, { name: 1 }) //field filter
// db.practice.deleteOne({ "name.firstName": "John" }, function(err, result) {

// });


