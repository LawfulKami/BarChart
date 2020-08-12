const labelingForm = {
  title: "",
  subtitle: "",
  yaxistext: ""
};

const arrOfGraphValues = []

function updateLabel(){
  labelingForm.title = document.getElementById("titleInput").value
  labelingForm.subtitle = document.getElementById("subtitleInput").value
  labelingForm.yaxistext = document.getElementById("xAxisInput").value
};

function  updateValue(){
  let barValueInput = document.getElementsByClassName("quantity");
  console.log(barValueInput)
  const barValues = Array.from(barValueInput)
  for (let i = 0; i < barValues.length; i++){
    arrOfGraphValues.push(barValues[i].value)
  }
  console.log(arrOfGraphValues)
};

function verifyValue(){
for (let point of arrOfGraphValues){
 if (isNaN(point) === true || point === "" || point < 0){
 alert("The value of all your bars must be a positive number.");
    }
  }
};

function createBars(items){
  const graph = document.getElementById("axis");
  for (let i = 0; i < items.length; i++){
    let bar = document.createElement("div");
    bar.setAttribute("id",`bar${i}`);
    bar.setAttribute("class", "bar");
    bar.innerHTML = getBarValue(`bar${i}Value`);
    bar.style.
    graph.appendChild(bar);
  }
};

function getBarValue(barId){
  let value = document.getElementById(barId).value
  return value
};
