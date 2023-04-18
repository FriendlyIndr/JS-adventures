var height;
var weight;
var bmi;

function updatebmi() {
    var height = document.getElementById("height").value;          //assigning input values to variables
    var weight = document.getElementById("weight").value;
    var hghtm = height/100;                                        //converting height in centimetres to meter
    var bmi = weight / (hghtm * hghtm);                            //bmi formula
    document.getElementById("bmi").innerHTML = 
       "BMI: " + Math.floor(bmi *100) / 100;                      //displaying the bmi value
    
    var comment;   
    if(bmi > 0 && bmi <= 16) {
        comment = "Severe thinness";
    } else if(bmi > 16 && bmi <= 17) {
        comment = "Moderate thinness";
    } else if(bmi > 17 && bmi <= 18.5) {
        comment = "Mild thinness";
    } else if(bmi > 18.5 && bmi <= 25) {                               //categorizing the bmi value
        comment = "Normal";
    } else if(bmi > 25 && bmi <= 30) {
        comment = "Overweight";
    } else if(bmi > 30 && bmi <= 35) {
        comment = "Obese Class I";
    } else if(bmi > 35 && bmi <= 40) {
        comment = "Obese Class II";
    } else if(bmi > 40) {
        comment = "Obese Class III"
    }
    document.getElementById("comment").innerHTML = "(" + comment + ")";
}
