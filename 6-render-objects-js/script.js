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

/*root.innerText = "Text"
root.innerHTML = "<ul>...</ul>"
root.addEventListener('click', () => {})
root.classList.add("container")
root.style.backgroundColor = "red"*/

// создать Div с текстом "Hello World" и добавить в root элемент
const helloWorldHTMLElement = document.createElement("div")
helloWorldHTMLElement.innerText = "Hello World"
// добавить ребенка в родительский элемент
root.appendChild(helloWorldHTMLElement)


// создать тег button  с текстом "Press me" и добавить в root элемент
const pressMeHTMLElement = document.createElement("button")
pressMeHTMLElement.innerText = "Press me"
root.appendChild(pressMeHTMLElement)
// ************************************************************

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
const ulHTMLElement = document.createElement("ul")
root.appendChild(ulHTMLElement)
const li1HTMLElement = document.createElement("li")
const li2HTMLElement = document.createElement("li")
const li3HTMLElement = document.createElement("li")
const li4HTMLElement = document.createElement("li")
const li5HTMLElement = document.createElement("li")



// ************************************************************************************************
// сделать тоже самое только с нумерованым списком (нумерованым ol)

const olHTMLElement = document.createElement("ol")
root.appendChild(olHTMLElement)

// *************************************************************************************************


// создать кнопку
// добавить текст на кнопку
// достать родителский тег по айди
// добавить кнопку в родительский тег

// const btnHTMLElement = document.getElementById("btn")
// достает элемент по id со значением btn

const btnHTMLElement = document.createElement("button")
// создание кнопки


btnHTMLElement.innerText="click"
// добавить текст (на кнопку)

//  const wrapperHTMLElement = document.getElementById("wrapper")
// достать родительский тег по айди

// wrapperHTMLElement.appendChild(btnHTMLElement)

// добавление кнопки в родительский тег

// *******************************************
// добавить li element во внутрь ul MediaElementAudioSourceNode
const liHTMLElement = document.createElement("li")
const liHTMLElement1 = document.createElement("li")

const listHTMLElement = document.getElementById("list")
listHTMLElement.appendChild(liHTMLElement)
listHTMLElement.appendChild(liHTMLElement1)
// coздание li1
// с родителя достаем ребенка
// в первый Li добавить текст, а в li1 - добавить div 
liHTMLElement.innerText = "Myrka"
const divHTMLElement = document.createElement("div")
liHTMLElement1.appendChild(divHTMLElement)
// в  div добавить еще текст
divHTMLElement.innerText = "Kisa"

// создать li11, li22, li33, внутри списка murka-list
// и внутри каждого li добавить div с текстом Koshka, Murka, Kisa
const liHTMLElement11 = document.createElement("li")          
const liHTMLElement22 = document.createElement("li")          
const liHTMLElement33 = document.createElement("li")          
const murkaList= document.getElementById("murka-list")
murkaList.append(liHTMLElement11,liHTMLElement22,liHTMLElement33)
// если несколько детей нужны одновременно, то используем
//  только append , без child
const koshkaHTMLElement = document.createElement("div")  
const murkaHTMLElement = document.createElement("div")
const kisaHTMLElement = document.createElement("div")
koshkaHTMLElement.innerText = "Koshka"
murkaHTMLElement.innerText = "Murka"
kisaHTMLElement.innerText = "Kisa"
liHTMLElement11.appendChild(koshkaHTMLElement)
liHTMLElement22.appendChild(murkaHTMLElement)
liHTMLElement33.appendChild(kisaHTMLElement)


