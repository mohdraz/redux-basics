function add(a) {
  return function (b) {
    return a + b;
  };
}

// N => 1

add(1)(5);

const add2 = (a) => (b) => a + b;

import { compose, pipe } from "lodash/fp";
import { Map } from "immutable";
import { produce } from "immer";

let input = " JavaScript ";
let output = "<div>" + input.trim() + "</div>";

// trimt

const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

// const result = wrapInDiv(toLowerCase(trim(input)));

// wrap In Div

// lodash

// const transform = compose(wrapInDiv, toLowerCase, trim);
const transform = pipe(trim, toLowerCase, wrap("div"));

console.log(transform(input));

const person = {
  name: "john",
  address: {
    country: "usa",
    city: "san francisco",
  },
};
// const updated = Object.assign({}, person, { name: "Bob", age: 30 });
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "new york",
  },
  name: "bob",
  age: 30,
};
updated.address.city = "new york";
console.log(person);

// array

const numbers = [1, 2, 3];
//adding
const index = numbers.indexOf(2);
const added = [...numbers, 4];
const added2 = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(added2);

// Removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed);

// updated
const updated2 = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updated2);

// libraries
// to.toLowerCase;

// ===================================immutable JS ---using immutable libraryr

// let book = { title: "Harry Potter" };

// function publish(book) {
//   book.isPublished = true;
// }
// publish(book);

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);
console.log(book.toJS());

//========================using immer library

let book2 = { title: "Harry Potter" };

function publish2(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updated22 = publish2(book2);
console.log(book2);
console.log(updated22);
