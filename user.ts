// Account Info
// charInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: "Leonardo",
}

type CharInfo = {
    nickname: string;
    level: number;
}

const character: CharInfo = {
    nickname: 'barbosacp',
    level: 100
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player : PlayerInfo = {
    id: 123,
    name: 'Leonardo',
    nickname: 'barbosa',
    level: 100,
}