const questions = [
    {
        question: "India's only active volcano is located at which among the following places?",
        options: ["Car Nicobar","Barren island","Maya Bunder","Lakshdweep"],
        answer: "Barren island",
        note: "The Barren Island is located in the Union Territory of Andaman and Nicobar Islands and is the only confirmed active volcano in South Asia.",
    },
    {
        question: "Damodar and Sone river valley and Rajmahal hills in the eastern India are depository of the______?",
        options: ["Cuddappa System Rocks","Dharwar System Rocks","Gondwana System Rocks","Vindhyan System Rocks"],
        answer: "Gondwana System Rocks",
        note: "Gondwana Rock System comprises the major coal deposits of India. This system contains famous Damuda and Panchet series which are famous for coal deposits (discussed below). The important coal bearing areas of this series are Raniganj, Jharia, Karanpur, and Bokaro of the Damodar basin in Odisha, and the Pench valley in Chhattisgarh and Madhya Pradesh, the jhingurda coal seam (Chhattisgarh).",
    },
    {
        question: "Which of the following is not a major family of languages spoken in India?",
        options: ["Indo-European","Altaic","Dravidian","Sino-Tibetan"],
        answer: "Altaic",
        note: "The four major language families of India are Indo-European, Dravidian, Austroasiatic and Sino-Tibetan family of languages.",
    },
]

var currentquest = 0;
var score = 0;


function begin() {
    var quiz = document.getElementById("quiz");
    quiz.style.display = 'block';
    var choice = document.getElementById("choice");
    var submit = document.getElementById("submit");
    choice.style.display = 'block';
    submit.style.display = 'block';
    document.getElementById("end").style.display = 'none';
    currentquest = 0;
    score = 0;
    document.getElementById("score").innerHTML = "";
}

function display() {

    document.getElementById("question").innerHTML = questions[currentquest].question;
    document.getElementById("optionA").innerHTML = questions[currentquest].options[0];
    document.getElementById("optionB").innerHTML = questions[currentquest].options[1];
    document.getElementById("optionC").innerHTML = questions[currentquest].options[2];
    document.getElementById("optionD").innerHTML = questions[currentquest].options[3];
}

function check() {

    var answer = questions[currentquest].answer;
    var choice = document.getElementById("choice").value;
    if(answer == choice){
        document.getElementById("result").innerHTML = "Correct!";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Wrong!";
    }
    document.getElementById("correct").innerHTML = answer;
}

function result() {
    var note = document.getElementById("note");
    var result = document.getElementById("result");
    result.style.display = 'block';
    note.style.display = 'block';
    note.innerHTML = questions[currentquest].note;
    document.getElementById("next").style.display = 'block';
    document.getElementById("correctd").style.display = 'block';
}

function next() {
    currentquest++;
    document.getElementById("next").style.display = 'none';
    document.getElementById("correctd").style.display = 'none';
    document.getElementById("note").style.display = 'none';
    document.getElementById("result").style.display = 'none';
    document.getElementById("choice").value = "";
    if(currentquest == questions.length) {
        document.getElementById("quiz").style.display = 'none';
        document.getElementById("end").style.display = 'block';
        document.getElementById("score").innerHTML = score;
    }
}

