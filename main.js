//Calculo de areas
const geometricShapesContainer = document.getElementById('geometricShapesContainer');
const gsBtn = document.getElementById('gsBtn');
let state = false;
const triangleContainer = document.getElementById("triangleContainer");
const squareContainer = document.getElementById("squareContainer");
const selectElement = document.getElementById("calcSelect");
const squareBtn = document.getElementById("squareBtn");
geometricShapesContainer.style.display = "none";

const handleSelectChange = () =>{
    const selectGS = selectElement.value;
if (selectGS === "Triangle"){
    triangleContainer.style.display= "block";
    squareContainer.style.display = "none";
   }else{
    triangleContainer.style.display= "none";
    squareContainer.style.display = "block";
   }
  
};
selectElement.addEventListener("change", handleSelectChange);

handleSelectChange();
gsBtn.addEventListener("click", ()=>{
    state = !state;
    state ? geometricShapesContainer.style.display = "block" : geometricShapesContainer.style.display = "none";
});


const calculateTriangleArea = () => {
const base = document.getElementById('base').value;
const height = document.getElementById('height').value;
const resultTriangle = document.getElementById('resultTriangle');
    resultTriangle.textContent="";
    const baseDouble = parseFloat(base);
    const heightDouble = parseFloat(height);

    if(isNaN(baseDouble) || isNaN(heightDouble)){
        console.error("NaN");
        resultTriangle.textContent="NaN";
    }else{
        const area = (baseDouble * heightDouble) / 2;
        resultTriangle.textContent=area;
    }
};

squareBtn.addEventListener("click", ()=>{
    const side = document.getElementById("side").value;
    const resultSquareP = document.getElementById("resultSquare");
    resultSquareP.textContent = "";

    const sideDouble = parseFloat(side);
    
    if(isNaN(sideDouble)){
        console.error("NaN");
        resultSquareP.textContent="NaN";
    }else{
        const area = sideDouble * sideDouble;
        resultSquareP.textContent = area;
    }


});


//Temperature Converter

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toF")
const toCelsius = document.getElementById("toC")
const result = document.getElementById("result")
const tempBtn = document.getElementById("tempBtn");
const tempConverterContainer = document.getElementById("tempConverterContainer");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp =  Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";

    }else if (toCelsius.checked){
        temp =  Number(textBox.value);
        temp = (temp - 32) *  (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";

    }else {
        result.textContent = "Select a unit";
    }
}
tempConverterContainer.style.display = "none";
let tempState = false;
tempBtn.addEventListener("click", ()=>{
    
    tempState = !tempState;
    tempState ? tempConverterContainer.style.display = "block" : tempConverterContainer.style.display = "none";
});

//Mensaje de bienvenida


const message = document.getElementById("message");
const messageBtn = document.getElementById("messageBtn");
const messageSpawnBtn = document.getElementById("messageSpawnBtn");
const messageContainer = document.getElementById("messageContainer");
messageContainer.style.display = "none";

let messageState = false;
messageSpawnBtn.addEventListener("click", () => {
    messageState = !messageState;
    messageState ? messageContainer.style.display = "block" : messageContainer.style.display = "none";
});

messageBtn.addEventListener("click", ()=>{
const username = document.getElementById("name").value;
const lastname = document.getElementById("lastname").value;
message.textContent = "Bienvenido " + username + " " + lastname;
});

//Calculo de promedio

const avgContainer = document.getElementById("averageContainer");
const avgBtn = document.getElementById("avgBtn");
const avgResult = document.getElementById("avgResult");

const calculateAvg = () =>{
    const n1 = document.getElementById("n1").value;
    const n2 = document.getElementById("n2").value;
    const n3 = document.getElementById("n3").value;

    n1Double = parseFloat(n1);
    n2Double = parseFloat(n2);
    n3Double = parseFloat(n3);
    if(isNaN(n1Double) || isNaN(n2Double) || isNaN(n3Double)){
        avgResult.textContent = "Ingrese un numero valido";
    }else{
        const sum = n1Double + n2Double + n3Double;
        const avg = sum / 3;
        avgResult.textContent = avg;
    }

};
avgBtn.addEventListener("click", calculateAvg);

const avgCalculatorBtn = document.getElementById("avgCalculatorBtn");
let avgState = false;
avgContainer.style.display = "none";
avgCalculatorBtn.addEventListener("click", ()=>{
    avgState = !avgState;
    avgState ? avgContainer.style.display = "block" : avgContainer.style.display = "none";
});

//Calculador de Moneda
const calcBtn = document.getElementById("calcBtn");
const selectCurrency = document.getElementById("selectConverter");
const moneyConverterContainer = document.getElementById("moneyConverterContainer");
const moneyResult = document.getElementById("moneyResult");
const currencyCalculatorBtn = document.getElementById("currencyCalculatorBtn");
let currencyState = false;
const handleCurrencyCalculator = () =>{
    const selectC = selectCurrency.value;
    const pesos = document.getElementById("pesos").value;
    const pesosDouble = parseFloat(pesos);
    if(isNaN(pesosDouble)){
        moneyResult.textContent = "Ingrese un numero valido";
    }
    if(selectC == "0"){
        moneyResult.textContent = pesosDouble * 40,18;
        moneyResult.textContent+= "$USD";
    }else if (selectC == "1"){
        moneyResult.textContent = pesosDouble * 44,54;
        moneyResult.textContent+="€";
    }else{
        moneyResult.textContent = pesosDouble * 52,17;
        moneyResult.textContent+="£";
    }
};

calcBtn.addEventListener("click", handleCurrencyCalculator);

moneyConverterContainer.style.display = "none";

currencyCalculatorBtn.addEventListener("click", ()=>{
currencyState = !currencyState;

currencyState ? moneyConverterContainer.style.display = "block" : moneyConverterContainer.style.display = "none";
});


