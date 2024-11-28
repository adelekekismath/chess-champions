type Player = {
    name: string;
    age: number;
    elo: number;
};

type TestCase = {
    description: string;
    players: Player[];
    expected: Player[];
};

export type {Player, TestCase};