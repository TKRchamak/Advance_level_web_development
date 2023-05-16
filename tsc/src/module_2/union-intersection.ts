/*
==> union
==> intersection
==> enum
*/

// --- union ---
type NoobDeveloper = {
    name: string
}

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
};

type JuniorDeveloper2 = NoobDeveloper & { //intersection type
    expertise: string;
    experience: number;
};

// --- enum --- its not recommended

enum Level {
    junior = "junior",
    mid = 'mid',
    senior = "senior"
}

type NextLevelDeveloper = JuniorDeveloper2 & {
    leadershipExperience : number;
    // level : Level;
    level : "junior" | "mid" | "senior"
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Tonmoy',
    experience: 1,
    expertise: 'JS'
}

const developer :NextLevelDeveloper = {
    name: 'Tonmoy',
    experience: 1,
    expertise: 'JS',
    leadershipExperience : 1,
    // level: Level.mid,
    level: "mid"
}