console.log("test js");
start = document.getElementById("startbtn");
start.addEventListener("click", fetchQuestion);

function fetchQuestion() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("https://trivialet.herokuapp.com/api/questions", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
