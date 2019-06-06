export class Team {
    centers: Player[] = [];
    coaches: Coache[] = [];
    defenses: Player[] = [];
    forwards: Player[] = [];
    goalkeepers: Player[] = [];
}


export class Person {
    birth_place: string;
    birthday: Date;
    first_surname: string;
    height: number;
    image: string;
    name: string;
    number: number;
    second_surname: string;
    weight: number;
}

export class Player extends Person {
    last_team: string;
    position: string;
    position_short: string;
}

export class Coache extends Person {
    role: string;
    role_short: string;
}

// export class Centers {
//     birth_place: string;
//     birthday: Date;
//     first_surname: string;
//     height: number;
//     image: string;
//     last_team: string;
//     name: string;
//     number: number;
//     position: string;
//     position_short: string;
//     second_surname: string;
//     weight: number;
// }

// export class Coaches {
//     birth_place: String;
//     birthday: Date;
//     first_surname: string;
//     height: number;
//     image: string;
//     name: string;
//     role: string;
//     role_short: string;
//     second_surname: string;
//     weight: number;
// }

// export class Defenses {
//     birth_place: string;
//     birthday: Date;
//     first_surname: string;
//     height: number;
//     image: string;
//     last_team: string;
//     name: string;
//     number: number;
//     position: string;
//     position_short: string;
//     second_surname: string;
//     weight: number;
// }

// export class Forwards {
//     birth_place: string;
//     birthday: Date;
//     first_surname: string;
//     height: number;
//     image: string;
//     last_team: string;
//     name: string;
//     number: number;
//     position: string;
//     position_short: string;
//     second_surname: string;
//     weight: number;
// }

// export class Goalkeepers {
//     birth_place: string;
//     birthday: Date;
//     first_surname: string;
//     height: number;
//     image: string;
//     last_team: string;
//     name: string;
//     number: number;
//     position: string;
//     position_short: string;
//     second_surname: string;
//     weight: number;
// }