const emailInput= document.getElementById('email')
const passwordInput= document.getElementById('password')
const submit= document.getElementById('submit')

submit.addEventListener('click', () => {
const email = emailInput.value
const password = passwordInput.value



fetch('https://trivialet.herokuapp.com/api/login', {
        method: 'POST', 
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(json => {
        if(json.success === true){
            window.location.replace("../admin.html")
        }else{
            window.alert("Wrong credentials");
        }
    })
})
