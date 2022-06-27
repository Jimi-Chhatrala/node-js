// Object property shorthand

const name = "Jimi";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "India",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// const { label, stock } = product;
// console.log(label);
// console.log(stock);

// const { label: productLabel, stock } = product;
// console.log(productLabel);
// console.log(stock);

// const { label: productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
  console.log("Type : ", type, " Label : ", label, " Stock : ", stock);
};

transaction("order", product);
