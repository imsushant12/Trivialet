const score = document.getElementById('score')

score.innerHTML = ` <b>${sessionStorage.getItem('score')}/10</b>`