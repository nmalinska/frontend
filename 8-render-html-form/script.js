const formHTMLElement  = document.createElement("form")

const userNameHTMLElement  = document.createElement("label")
userNameHTMLElement.innerText = "User name"

const userNameInput = document.createElement("input")
userNameInput.placeholder = "Enter username"
userNameInput.type = "text"

const button = document.createElement("button")
button.innerText = "Sign in"

const root = document.getElementById("root")
root.appendChild(formHTMLElement)

const row1 = document.createElement("div")
const passwordHTMLElement = document.createElement("label")
passwordHTMLElement.innerText = "Password"
const enterPasswordHTMLElement = document.createElement("input")
enterPasswordHTMLElement.placeholder = "Enter password"
enterPasswordHTMLElement.type = "text"


const row2 = document.createElement("div")

const row3 = document.createElement("div")

row1.append(userNameHTMLElement, userNameInput)
row2.append( passwordHTMLElement,enterPasswordHTMLElement)
row3.append(button)
formHTMLElement.append(row1, row2, row3)