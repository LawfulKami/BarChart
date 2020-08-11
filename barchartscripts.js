let labelingForm = {
  title: "",
  subtitle: "",
  yaxistext: ""
}

function updateLabel(){
  labelingForm.title = document.getElementById("titleInput").value
  labelingForm.subtitle = document.getElementById("subtitleInput").value
  labelingForm.yaxistext = document.getElementById("yaxisInput").value
}
