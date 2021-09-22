const nameIp = document.getElementById('name')
const emailIp = document.getElementById('email')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
const name = nameIp.value
const email = emailIp.value

if(name === null){
    window.alert('Please add a name')
} else if(email === null){
    window.alert('Please add an email')
}else{
    sessionStorage.setItem('name', `${name}`)
    sessionStorage.setItem('email', `${email}`)

    window.location.replace("../instruction.html");
}
})