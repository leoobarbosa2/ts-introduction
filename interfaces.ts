// Conjunto de dados para descrever a estrutura de um objeto

interface Game {
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void;
}

const tlof: Game = {
    title: 'The last of us',
    description: 'A good game with good experience',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`similar games to ${title}: Uncharted, Metro`)
    }
}

console.log(tlof.genre)
// tlof.genre = 'new'
if(tlof.getSimilars) {
    tlof.getSimilars(tlof.title)
}

interface DLC extends Game {
    originalGame: Game;
    newContent: Array<string>;
}

const leftBehind: DLC = {
    title: 'The last of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    originalGame: tlof,
    newContent: ['3 hour story', 'new characters']
}

class CreateGame implements Game{
    title: string;
    description: string;
    genre: string;
    platform: Array<string>;

constructor(t: string, d: string, g: string, p: string[]) {
    this.title = t;
    this.description = d;
    this.genre = g;
    this.platform = p;
}
}