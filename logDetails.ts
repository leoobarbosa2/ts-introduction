// Type alias
type Uuid = number | string;

function logDetails(uuid: Uuid, item: string) {
    console.log(`A product with ${uuid} has a title as ${item}`)
}

function logInformation(uuid: Uuid, user: string) {
    console.log(`A user with ${uuid} has a name as ${user}`)
}

type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlatform(platform: Platform) {
    return platform;
}

logDetails(123, 'tênis')
logDetails("123", "sapato")

logInformation(123, 'Leonardo')
logInformation("123", "Leonardo")
renderPlatform('Mac Os');