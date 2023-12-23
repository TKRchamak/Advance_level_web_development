// in this file I am tring to understand the aggregation, unwind and group 

/*
    When a document contains an array field, using $unwind allows you to 
    break down that array into individual documents, each holding a single array element. 
    This is particularly useful when you want to perform aggregation operations on elements within the array, 
    such as grouping, counting, sorting, or projecting specific array elements.
    
    
    unwind use for separate all the array element and set as eunique value;
    for example:
    in document 1
    friends: ["taki", "rafsan", "khairul", "mahfuz"];
    
    in document 2
    friends: ["taki", "rafsan"];
    
    in document 3
    friends: ["khairul", "rafsan"];
    
    
    if i want to see how many friend name in this database and find the countity for every 
    
    then first need to unwind the arraies and the group the names and count the
    
    also follow the notion note

*/

db.practice.aggregate([
    {
        $unwind: "$skills"
    },
    {
        $group: {
            _id: "$skills",
            count: {$sum : 1}
        }
    }
    {
        $project: {
            "skills": 1
            "count": 1
        }
    }
])