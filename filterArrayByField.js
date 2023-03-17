const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

const filterByField = users.filter(items => items.isAstronaut && delete items.isAstronaut)

console.log(filterByField)
// [{ username: "Yuri Gagarin",
// lang: "ru", isAstronaut: true, },
//  { username: "Nil Armstrong, lang: "ENG"
// }]
