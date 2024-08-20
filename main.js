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
    if(state){
geometricShapesContainer.style.display= "block";
}else{
    geometricShapesContainer.style.display = "none";
}
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