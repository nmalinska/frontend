const root = document.getElementById("root")

const formHTMLElement  = document.createElement("form")

// row 1
const row1 = document.createElement("div")

const userNameHTMLElement  = document.createElement("label")
userNameHTMLElement.innerText = "User name"

const userNameInput = document.createElement("input")
userNameInput.placeholder = "Enter username"
userNameInput.type = "text"

row1.append(userNameHTMLElement, userNameInput)

// row 2
const row2 = document.createElement("div")

const passwordHTMLElement = document.createElement("label")
passwordHTMLElement.innerText = "Password"

const enterPasswordHTMLElement = document.createElement("input")
enterPasswordHTMLElement.placeholder = "Enter password"
enterPasswordHTMLElement.type = "text"

row2.append( passwordHTMLElement, enterPasswordHTMLElement)

// row 3
const row3 = document.createElement("div")

const button = document.createElement("button")
button.innerText = "Sign in"

row3.append(button)

// добавить все ряды в форму
formHTMLElement.append(row1, row2, row3)
// добавить форму в рут
root.appendChild(formHTMLElement)