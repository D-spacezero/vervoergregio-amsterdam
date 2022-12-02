var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function contrast() {
  var element = document.body;
  element.classList.toggle("dark-contrast");
}

function fontSize() {
  var element = document.body;
  element.classList.toggle("textgrow");
}

function fontSize() {
  const textincrease = document.getElementById("fontIncrease")
  textincrease.classList.toggle('text-large')
  textincrease.style.fontSize = textincrease.style.fontSize === '200%' ? '100%' : '200%'
};