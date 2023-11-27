// 1
const user = {
  name: "Anna",
  hobby: "paiting",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}

// 2
const countProps = (user) => {
  return Object.keys(user).length;
};

console.log(countProps(user));

// 3
const employees = {
  Kate: 12,
  Lili: 9,
  Maks: 10,
  Stiv: 11,
};

const findBestEmployee = (arrayObject) => {
  let count = 0;
  let name = "";

  for (const key in arrayObject) {
    if (arrayObject[key] > count) {
      name = key;
      count = arrayObject[key];
    }
  }

  return name;
};

console.log(findBestEmployee(employees));

// 6
const products = [
  { name: "vershkoveMaslo", price: 90, quantity: 2 },
  { name: "hlib", price: 20, quantity: 1 },
  { name: "orange", price: 60, quantity: 3 },
];
const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice = 0;

  for (const product of allProdcuts) {
    if (productName == product.name) {
      totalPrice += product.price * product.quantity;
    }
  }
  return totalPrice;
};
console.log(calculateTotalPrice(products, "hlib"));

// 4
const employees2 = {
  Kate: 12000,
  Lili: 9000,
  Maks: 10000,
  Stiv: 11000,
};

const countTotalSalary = (employees) => {
  totalSalary = 0;
  for (const Salary in employees) {
    totalSalary += employees[Salary];
  }
  return totalSalary;
};

console.log(countTotalSalary(employees2));

// 5
const getAllPropValues = (arr, prop) => {
  let qq = [];
  for (const iterator of arr) {
    qq.push(iterator[prop]);
  }
  return qq;
};

console.log(getAllPropValues(products, "name"));
