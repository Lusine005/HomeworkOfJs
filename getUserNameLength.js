function getUsernameLengths(users) {
    return users.map(index => index.username.length)
}

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
];

console.log(getUsernameLengths(users)); // [12, 13]