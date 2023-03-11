function getUserNames(users){
    return users.map(index => index.username)
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
console.log(getUserNames(users)); // ['Yuri Gagarin', 'Nil Armstrong']