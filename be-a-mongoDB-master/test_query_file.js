// show databases;

// use practice-mongoose;

// in this file I am tring to understand the aggregation, unwind and group 

// db.practice.find();

db.practice.aggregate([
    {
        $match: {
            gender: "Male", age: { $gt: 18 }
        }
    }
])