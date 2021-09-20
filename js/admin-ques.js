const questionIn = document.getElementById('question')
const option1In = document.getElementById('option1')
const option2In = document.getElementById('option2')
const option3In = document.getElementById('option3')
const option4In = document.getElementById('option4')
const answerIn = document.getElementById('answer')
const submit = document.getElementById('add')
const reset = document.getElementById('reset')

submit.addEventListener('click', () => {
    const question = questionIn.value
    const option1 = option1In.value
    const option2 = option2In.value
    const option3 = option3In.value
    const option4 = option4In.value
    let answer
    if(answerIn.value ==='option1'){
    answer = option1In.value
    } else if(answerIn.value ==='option2'){
    answer = option2In.value
    } else if(answerIn.value ==='option3'){
    answer = option3In.value
    } else if(answerIn.value ==='option4'){
    answer = option4In.value
    } 

    fetch('https://trivialet.herokuapp.com/api/questions', {
        method: 'POST', 
        body: JSON.stringify({
            question,
            option1,
            option2,
            option3,
            option4,
            correct:answer
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(json => {
        if(json.success === true){
            console.log(json.data)
        }else {
            window.alert(`${json.error}`);
        }
    })
})

reset.addEventListener('click', () =>{
    questionIn.value = ''
    option1In.value = ''
    option2In.value = ''
    option3In.value = ''
    option4In.value = ''
    answerIn.value = ''
})