class UserAccount {
    name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`Player name: ${this.name} and age ${this.age}`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    private level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
 
        this.nickname = nickname;
        this.level = level;
    }

    get getLevel() {
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
    }
}

const leo = new UserAccount('Leonardo', 23);
console.log(leo);
leo.logDetails();

const barbosa = new CharAccount("Barbosa", 23, 'barbosacp', 85);
// barbosa.nickname = 'teste'
console.log(barbosa)
// console.log(barbosa.level)
// barbosa.level = 79;
barbosa.logDetails();
barbosa.logCharDetails()

console.log(barbosa.getLevel)
barbosa.setLevel = 199
console.log(barbosa.getLevel)