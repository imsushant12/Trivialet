const nameIp = document.getElementById('name')
const emailIp = document.getElementById('email')
const passwordIp = document.getElementById('password')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
    const name = nameIp.value
    const email = emailIp.value
    const password = passwordIp.value


    
    fetch('https://trivialet.herokuapp.com/api/admin', {
        method: 'POST', 
        body: JSON.stringify({
            name,
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
            window.location.replace("../registerSucess.html")
        }else if(json.success === false){
            window.alert(json.error);
        }
    })
})