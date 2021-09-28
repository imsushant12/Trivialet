
# Trivialet 🏆

This is an online assesment platform made by 🙈Adarsh Jain, 🙉Sushant Gaurav and 🙊Yashraj Pany.

The general portal for publishing exam results at universities. Students can get their exam results without any other medium like Email, Messaging etc. There are two modes of users:

1. Students 👶

2. Administrator 🧔

## Demo Video

[![asciicast](https://c.tenor.com/wRREzCO93yQAAAAC/trivia-night.gif)](https://vimeo.com/617155160)


 `Click on the Image`

## About Project 🚧
Today Online Examination System has become a fast growing examination method because of its speed and accuracy. It is also needed less manpower to execute the examination. Almost all organizations now-a-days, are conducting their objective exams by online examination system, it saves students time in examinations


## Required Functionality ⌛

 - Assessment shall be MCQ pattern ✔️
 - There must be a question pool for the assessment ✔️
 - The questions displayed in the assessment shall be only from that pool ✔️
 - Number of questions in the pool shall be more than questions displayed ✔️
 - Each student is allowed to take 400sec(After that the quiz will automatically submitted) ✔️
 - Assessment score shall be generated at the time of submission ✔️
 - Question order shall be shuffled for each candidate appearing ✔️

### For Admin: 🧨
- Option to create test✔️
- Option to add question in test pool, set number of question appear in test ✔️
- Page to view all submitted test results ✔️

### Added Functionality 🌞
- Creative UI Experience ✔️
- Maintained a database of students and thier data ✔️

## CI/CD 💡

- A deployed version can be checked here - [Trivialet Quiz](https://tivialet-frontend.herokuapp.com)
- For Admin you have to Register and then Login and for Student they can simply start the test.

## Deployment 🔥
For deployment we have used Heroku as a platform. The project works Successfully.


## Tech Stack ❄️

**Client:** HTML, CSS, Javascript 🧑‍💻

**Server:** Node JS, Express 🧑‍💻

**Deployement:** Heroku 🧑‍💻

**Database:** MongoDB 🧑‍💻

**Password Hashing:** Bcrypt 🧑‍💻

## Project Setup Details 💻
- Fork this repository.
- Create a issues then start to make any pull request for that issue.
- Be sure to give a good crisp commit message.
- Use only the above mentioned tech stacks.
- Work with correct directory.
- Use VS Code for better experience


## App Frontend 📺
`Index page`- to Welcome users ,here the user can register & Login

`Admin Login`- For login to Admin panel

`Admin page` - here the Admin can Set paper, View all reesult, Naviagte to Test Link, See all the Questions added

`All Question` - To take input of all Questions with options

`Instruction page`-To instruct student on rules and regulation of giving the test 

`Login Page` - to take user data who is giving the test

`Quiz page` - to take response of user, Shuffeled questions appeared here

`Register Success`- to make user know that thier Registration is Succesfull, Now they can easily Login

`Registration page`- to take user data and feed into database for easy login

`Result page` - Result of all the student is displayed here to Admin

`Thankyou page` - End page after the Test finished
## App Backend 🔚
#### Questions :
[GET - Get all questions](https://trivialet.herokuapp.com/api/questions) : Use this URL to fetch all the questions.

[GET - Test questions](https://trivialet.herokuapp.com/api/test) : Use this URL to fetch all the quiz questions in a random manner.

[POST - Create questions](https://trivialet.herokuapp.com/api/questions) : Use this URL to add a question from admin's dashboard.

[PUT - Update a question](https://trivialet.herokuapp.com/api/question/1) : Use this URL to update a particular question.

[DEL - Delete a question](https://trivialet.herokuapp.com/api/question/1) : Use this URL to delete a particular question.

#### Results : 
[GET - Get all results](https://trivialet.herokuapp.com/api/results) : Use this URL to fetch all the results.

[POST - Create result](https://trivialet.herokuapp.com/api/results) : Use this URL to add result.

#### Admins : 
[POST - Check credentials](https://trivialet.herokuapp.com/api/login) : Use this URL to fetch all the added credentials.

[POST - Create Admin/ Registration](https://trivialet.herokuapp.com/api/admin) : Use this URL to add credentialsl.


## Our Contributors 👥

[CONTRIBUTORS.md](https://github.com/imsushant12/Trivialet/blob/master/CONTRIBUTORS.md)

