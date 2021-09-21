
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://trivialet.herokuapp.com/api/questions", true);


xhr.onload = function () {
    obj = JSON.parse(this.responseText);
    random_question(obj);
};

xhr.send();

function random_question(obj){
    console.log(obj);
    let html = '';
    const questionData = obj.data;
    questionData.sort(() => Math.random() - 0.5);
    questionData.splice(5- questionData.length);
    console.log(questionData);

        questionData.forEach(function(element, index) {
            html += `
            <div class="card shadow-lg my-2">
            <div class="card-header">
                <h5 class="col-10" id="question">Q.${index + 1} ${element.question}</h5>
            </div>
            <div class="card-body">
                <div class="col-sm-10">
                    <div class="form-check">
                        <!--- option 1 -->
                        <input class="form-check-input" type="radio" name="${element._id}"  
                            id="${element._id + 1}" value="${element.option1} ">
                        <label class="form-check-label" for="${element._id + 1}" id="option1Label">
                            ${element.option1}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="${element._id}"
                            id="${element._id + 2}" value="${element.option2} ">
                        <label class="form-check-label" for="${element._id + 2}" id="option2Label">
                        ${element.option2}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="${element._id}"
                            id="${element._id + 3}" value="${element.option3} ">
                        <label class="form-check-label" for="${element._id + 3}" id="option3Label">
                        ${element.option3}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="${element._id}"
                            id="${element._id + 4}" value="${element.option4} ">
                        <label class="form-check-label" for="${element._id + 4}" id="option4Label">
                        ${element.option4}
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn_next btn submit">Next</button>
            </div>
        </div>
            `  
        });
    
        form = document.getElementById('form1');
        form.innerHTML = html;
        
}
const submit = document.querySelector('.btn')
submit.addEventListener('click', () =>{
    checkAnswer()
}) 


function checkAnswer () {
    const answer = document.querySelector('input[type="radio"]:checked').value;
    console.log(answer)
}
