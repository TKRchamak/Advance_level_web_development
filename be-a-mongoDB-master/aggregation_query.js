show databases;

use practice - mongoose;

db.practice.aggregate([
    // -----------stage match-----------
    // { $match: { gender: "Male", age: { $gt: 18 } } },

    // -----------add field stage-----------
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {}}, 100]
                    }
                }
            }
        }
    },

    // { $out: "practiceWithSalary" }, // create new database with priously modifued value
    // { $merge: "practice"} // practice database a merge kore dibe, in this case same database ai merge kore dibe
    // -----------add field stage end-----------


    // -----------group stage start-----------
    // ----single
    // {
    //     $group: { _id: "$age"}
    // }

    // ----multiple
    // {
    //     $group: {
    //         _id: {
    //             age: "$age",
    //             gender : "$gender"
    //         }
    //     }
    // }

    // {
    //     $group: {
    //         _id: "$age",
    //         count: { $sum: 1 } // accumulator
    //     }
    // }


    // -----------group stage end-----------    


    // -----------sort stage start-----------
    // {
    //     $sort: { _id: 1 }
    // }
    // -----------sort stage end-----------    

    // -----------stage project-----------
    // { $project: { gender: 1, age: 1 } } // project korar pore project j field gulo k kora hoicilo oi gulo k nest stage a pathabe
])