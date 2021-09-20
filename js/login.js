const nameIp = document.getElementById('name')
const emailIp = document.getElementById('email')
const submit = document.getElementById('submit')

submit.addEventListener('click', () => {
const name = nameIp.value
const email = emailIp.value
console.log(name)
console.log(email)
if(name === null){
    window.alert('Please add a name')
} else if(email === null){
    window.alert('Please add an email')
}else{
    window.location.replace("../instruction.html");
}
})