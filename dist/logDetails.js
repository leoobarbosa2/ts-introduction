"use strict";
function logDetails(uuid, item) {
    console.log("A product with " + uuid + " has a title as " + item);
}
function logInformation(uuid, user) {
    console.log("A user with " + uuid + " has a name as " + user);
}
function renderPlatform(platform) {
    return platform;
}
logDetails(123, 'tênis');
logDetails("123", "sapato");
logInformation(123, 'Leonardo');
logInformation("123", "Leonardo");
renderPlatform('Mac Os');
