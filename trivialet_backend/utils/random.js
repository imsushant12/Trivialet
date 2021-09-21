function random(data) {
    let questions = [];

    let i = 0;
    let num = [0, 1, 2, 3, 4, 5]
    while (i < 5) {
        let random = Math.floor(Math.random() * num.length)
        let split = num.splice(random, 1);
        questions.push(data[split[0]]);;
        i++;
    }
    return questions;
}

module.exports = random