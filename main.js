let arr = [
  {
    name: "Ivan",
    balance: 100,
    age: 21,
    alcoholName: "martini",
    alcoholCount: 2
  },
  { name: "Lida", balance: 10, age: 20, alcoholName: "vodka", alcoholCount: 1 },
  {
    name: "Dasha",
    balance: 70,
    age: 16,
    alcoholName: "beer",
    alcoholCount: 3
  },
  {
    name: "Tom",
    balance: 150,
    age: 26,
    alcoholName: "wine",
    alcoholCount: 3
  },
  {
    name: "Bob",
    balance: 220,
    age: 14,
    alcoholName: "vodka",
    alcoholCount: 2
  },
  {
    name: "Polina",
    balance: 55,
    age: 22,
    alcoholName: "wine",
    alcoholCount: 1
  },
  {
    name: "Tim",
    balance: 10,
    age: 18,
    alcoholName: "beer",
    alcoholCount: 2
  },
  {
    name: "Liza",
    balance: 100,
    age: 28,
    alcoholName: "martini",
    alcoholCount: 4
  },
  {
    name: "Vova",
    balance: 140,
    age: 20,
    alcoholName: "sidr",
    alcoholCount: 4
  },
  {
    name: "Sasha",
    balance: 70,
    age: 15,
    alcoholName: "sidr",
    alcoholCount: 2
  }
];
let alcohol = {
  martini: 36.4,
  vodka: 13.5,
  beer: 27.7,
  wine: 50,
  sidr: 30
};

function init(people) {
  let results = people.map(person);

  results.forEach(element => {
    console.log(element);
  });
}

function person(person) {
  let legal = checkLegal(person);
  let alcoholFavorite = favoriteAlcohol(person);
  let price = priceAlcohol(person, alcoholFavorite);
  let shop = canBuy(person, price);

  if (legal === true && shop === true) {
    person.balance = (person.balance - price).toFixed(2);
    return `${person.name}, вот ваш заказ: ${person.alcoholName} в количестве ${person.alcoholCount} шт. С вас ${price} рублей`;
  } else if (legal === false) {
    return `${
      person.name
    }, не выдаем заказы несовершеннолетним, приходите через ${18 -
      person.age} года`;
  } else {
    return `${person.name}, средств недостаточно, не хватает ${(
      price - person.balance
    ).toFixed(2)} рублей`;
  }
}

function checkLegal(person) {
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
}

function favoriteAlcohol(person) {
  return alcohol[person.alcoholName];
}

function priceAlcohol(person, alcoholFavorite) {
  return person.alcoholCount * alcoholFavorite;
}

function canBuy(person, price) {
  if (person.balance >= price) {
    return true;
  } else {
    return false;
  }
}

init(arr);

console.log(arr);
