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

const filterUsers = users.filter((item) => item.lang !== "ru")

console.log(filterUsers) // [{ username: "Nil Armstrong, lang: "ENG" }]