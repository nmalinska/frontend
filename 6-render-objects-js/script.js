const medicines = [
  {
    namePills: "Analgin",
    dosage: 500,
    price: 6.85,
  },
  {
    namePills: "Paracetamol",
    dosage: 400,
    price: 23.70,
  },
  {
    namePills: "Spazmalgon",
    dosage: 150,
    price: 38,
  }
]
// получить доступ к тегу с id root
const root = document.getElementById("root")

// создать Div с текстом "Hello World" и добавить в root элемент
const helloWorldHTMLElement = document.createElement("div")
helloWorldHTMLElement.innerText = "Hello World"
// добавить ребенка в родительский элемент
root.appendChild(helloWorldHTMLElement)


// создать тег button  с текстом "Press me" и добавить в root элемент
const pressMeHTMLElement = document.createElement("button")
pressMeHTMLElement.innerText = "Press me"
root.appendChild(pressMeHTMLElement)


// ****************************************************************************************
// создать тег label с текстом "Email" и добавить в root элемент
const emailHTMLElement = document.createElement("label")
emailHTMLElement.innerText = "Email"
root.appendChild(emailHTMLElement)


// *****************************************************************************************
// создать тег input с плейсхолдером "Enter your email" и добавить в root элемент *
const enterYourEmailHTMLElement = document.createElement("input")
enterYourEmailHTMLElement.placeholder= "Enter your email"
root.appendChild(enterYourEmailHTMLElement)


// *****************************************************************************************
// создать тег div(wrapper) и добавить в root элемент а затем создать элемент div(inner) 
// и добавить его в wrapper **
const wrapperHTMLElement = document.createElement("div")
root.appendChild(wrapperHTMLElement)
const innerHTMLElement = document.createElement("div")
innerHTMLElement.innerText = "div"
wrapperHTMLElement.appendChild(innerHTMLElement)


// *******************************************************************************************
// создать список (с точкой ul) список должен состоять из 5ти пунктов
// в каждом пункте должен быть текст: Item 1, Item 2, Item 3, Item 4, Item 5

// сделать тоже самое только с нумерованым списком (нумерованым ol)

