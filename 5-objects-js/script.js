// создать обьект квартира который будет иметь поля: улица номер дома стоимость кол-во квадратных метров
const apartment = {
  address: "Hryhoriy Sokalskogo street",
  houseNumber: 33,
  price: "16000 y.e.",
  square: "54 m2"
}

console.log(apartment)
// **************************************
const apartmentList = [
  {
    address: "Hryhoriy Sokalskogo street",
    houseNumber: 33,
    price: "16000 y.e.",
    square: "54 m2",
  },
  {
    address: "Druzby Narodov street",
    houseNumber: 35,
    price: "30000 y.e.",
    square: "35 m2",
  },
  {
    address: "Space street",
    houseNumber: 20,
    price: "29000 y.e.",
    square: "34 m2",
  }
]
console.log(apartmentList[1])
// вывести первый элемент массива
console.log(apartmentList[0])
// вывести последний  элемент массива, индекс последнего элемента массива - 2, а длина массива - 3, 
// чтобы найти последний элемент массива нужно: от длины массива отнять единицу (3-2)
// н-р , индекс последнего массива -5, а длина массива -6 (6-5),
console.log(apartmentList[apartmentList.length - 1])

// достать поле address из 1-го элемента массива и вывести на печать
console.log(apartmentList[0].address)

// достать поле price из последнего элемента массива и вывести на console
console.log(apartmentList[apartmentList.length - 1].price)


// создать массив из медицинских препаратов(наименование дозировка стоимость) (длина 3)
const medicines = [
  {
    namePills: "Analgin",
    dosage: "500",
    price: "6,85",
  },
  {
    namePills: "Paracetamol",
    dosage: "400",
    price: "23,70",
  },
  {
    namePills: "Spazmalgon",
    dosage: "150",
    price: "38",
  }
]
// вывести наименование первого элемента массива (это счет, это  индекс берем)
console.log(medicines[0].namePills)

// вывести первый элемент массива
console.log("first element")
console.log(medicines[0])

// вывести дозировку второго элемента
console.log("dosage of second element")
console.log(medicines[1].dosage)

// вывести стоимость последнего элемента
console.log(medicines[medicines.length - 1].price)



// вывести препараты со стоимостью выше 30 (грн) *
for (let i = 0; i > medicines.length; i++) {
  if (medicines[i].price > 30) {
    console.log(medicines[i].price)
  }
}