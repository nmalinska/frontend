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

// 21 - 25 lines create by JS only!
const root = document.getElementById("root")
const flex = document.createElement("div")
flex.className = "flex-row flex--jc-sb"
root.appendChild(flex)

const pillName = document.createElement("div")
pillName.innerText = "Analgin"
flex.appendChild(pillName)

const dosage = document.createElement("div")
dosage.innerText = "500"
flex.appendChild(dosage)

const price = document.createElement("div")
price.innerText = "6.85"
flex.appendChild(price)         

const createPillInfoElement = (info) => {
  const pillInfo = document.createElement("div")
  pillInfo.innerText = info
  flex.appendChild(pillInfo)
}

createPillInfoElement("Analgin") 
createPillInfoElement("500") 
createPillInfoElement("6.85") 