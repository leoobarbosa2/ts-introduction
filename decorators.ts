// @Component
// @Selector
// @useState('aaa')

// Factory
function Logger(prefix: string) {
    return  (target: any) => {
        console.log(`${prefix} - ${target}`);
    }
}

@Logger('awesome')
class Fooo {}


function setAPIVersion(apiVersion: string) {
    return (constructor: any) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}
// Class Decorator

// decorator - anotar a versão da API
@setAPIVersion("1.0.0")
class API {}

console.log(new API())


// Property decorator

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val;

        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`[Erro] - você nao pode criar ${key} menor que ${length}`)
            } else {
                val = value;
            }
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    }
}

class Movie {
    // validação - se for menor que 5 - erro
    @minLength(5)
    title: string;
    description: string;

    constructor(t: string, d: string) {
        this.title = t;
        this.description = d;
    }
}

const movie = new Movie("Interstellar", "Teste");

console.log(movie)

// Method Decorator

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any) {
            console.log(`Esperando ${ms}`)
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor;
        }
   }
}

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g;
    }

    // esperar um tempo antes de rodar esse metodo
    @delay(2000)
    greet() {
        console.log(`Hello ${this.greeting}`)
    }
}

const peopleGreet = new Greeter('pessoa')
console.log(peopleGreet.greet())
