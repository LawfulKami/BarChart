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
  const barValues = Array.from(barValueInput)
  for (let i = 0; i < barValues.length; i++){
    arrOfGraphValues.push(barValues[i].value)
    arrOfGraphValues[i] = Number(arrOfGraphValues[i])
  }
  console.log(arrOfGraphValues)
};

function verifyValue(){
  let invalid = false;
for (let point of arrOfGraphValues){
  if (isNaN(point) === true || point === 0 || point < 0){
  alert("The value of all your bars must be a positive number.");
  invalid = true
  break;
    }
  }
  if (invalid === true){
    location.reload();
  }
};

function addMoreBars(){
  let numExistingBar = document.getElementsByClassName("item").length
  const newBar = "<input type=\"text\" class=\"item\" placeholder=\"Item...\"></input>" + "\n" + `<input id=\"bar${numExistingBar}Value\" type=\"text\" class=\"quantity\"` +
  "placeholder=\"Value...\"><br>";
  $("#addVal").before(newBar)
}

function createBars(items){
  const graph = document.getElementById("axis");
  for (let i = 0; i < items.length; i++){
    let bar = document.createElement("div");
    bar.setAttribute("id",`bar${i}`);
    bar.setAttribute("class", "bar");
    bar.innerHTML = getBarValue(`bar${i}Value`);
    $(bar).css("width", function(){
      let ratio = (arrOfGraphValues[i]/Math.max(...arrOfGraphValues)*85) + "%";
      return ratio
  })
    graph.appendChild(bar);
  }
  $(".bar").hide()
  $(".bar").show("slow")
};

function getBarValue(barId){
  let value = document.getElementById(barId).value
  return value
};
