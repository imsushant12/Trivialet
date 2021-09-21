const xhr = new XMLHttpRequest();
xhr.open("GET", "https://trivialet.herokuapp.com/api/results", true)

xhr.onload = function () {
  obj = JSON.parse(this.responseText);
  result(obj)
};

xhr.send()

function result(obj) {
  console.log(obj)
  let html = ""
  const resultData = obj.data

  resultData.forEach(function (element, index) {
    html += `
        <div class="card shadow-lg">
        <div class="card-header">
            <h5 class="col-10">${element.name}</h5>
            <h6 class="col-10">${element.email}</h6>
        </div>
        <div class="card-body">

            <div class="col-sm-10">
                <p>Score is <b>${element.score}</b></p>
            </div>    
        </div>
    </div><br>
            `
  })

  div = document.getElementById("result")
  div.innerHTML = html
}
