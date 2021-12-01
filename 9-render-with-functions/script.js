// each tag has a name
// each tag has a class
// practically each tag has a text

const root = document.getElementById("root")

const simpleRender = () => {
    const flexRow = document.createElement("div")
    flexRow.className = "flex-row"

    const textHello = document.createElement("div")
    textHello.className ="text"
    textHello.innerText = "Hello"

    const textWorld = document.createElement("div")
    textWorld.className = "text"
    textWorld.innerText = "World"
    flexRow.append(textHello, textWorld)
}

// function way to create tags
// в скобках - пишутся аргументы.
const createTag = (tagName, className, text) => {
    const tag = document.createElement(tagName)
    tag.className = className
    tag.innerText = text
    return tag // возращение готового тега с классом и текстом
}

const flexRow = createTag("div", "flex-row", "")
const textHello = createTag("div", "text", "Hello")
const textWorld = createTag("div", "text", "World")
flexRow.append(textHello, textWorld)

// создание функции
const someFunction = (/* arguments or empty */) => {
    // some logic ...
}

// вызов функции
someFunction(/* arguments or empty */)
