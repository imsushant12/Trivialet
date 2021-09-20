const xhr = new XMLHttpRequest();
xhr.open("GET", "https://trivialet.herokuapp.com/api/questions", true);

xhr.onload = function () {
  obj = JSON.parse(this.responseText);
  random_question(obj);
};

xhr.send();

function random_question(obj) {
  console.log(obj);
  let html = "";
  const questionData = obj.data;

  questionData.forEach(function (element, index) {
    html += `
            <div class="card shadow-lg my-2">
            <div class="card-header">
                <h5 class="col-10" id="question">Q.${index + 1} ${
      element.question
    }</h5>
            </div>
            <div class="card-body">
                <div class="col-sm-10">
                    <div class="form-check">
                        <label class="form-check-label" for="option1" id="option1Label">
                            a. ${element.option1}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="option2" id="option2Label">
                        b. ${element.option2}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="option3" id="option3Label">
                        c. ${element.option3}
                        </label>
                    </div>
                    <div class="form-check">
                        <label class="form-check-label" for="option4" id="option4Labe">
                        d. ${element.option4}
                        </label>
                    </div>
                    <div class="form-check">
                    <label class="form-check-label">
                        <strong>Correct Answer :- ${element.correct}</strong>
                    </label>
                    </div>
                </div>
            </div>
        </div>
            `;
  });

  form = document.getElementById("form2");
  form.innerHTML = html;
}
