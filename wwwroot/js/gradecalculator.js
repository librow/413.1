//Grade Weights - global
var ASSIGNMENT_WEIGHT = .5;
var GPROJECT_WEIGHT = .1;
var QUIZ_WEIGHT = .1;
var EXAM_WEIGHT = .2;
var INTEX_WEIGHT = .1;

var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    //calculating grade percentage
    var percentage = ((document.getElementById("assignments").value * ASSIGNMENT_WEIGHT) +
        (document.getElementById("groupproject").value * GPROJECT_WEIGHT) +
        (document.getElementById("quizzes").value * QUIZ_WEIGHT) +
        (document.getElementById("exams").value * EXAM_WEIGHT) +
        (document.getElementById("intex").value * INTEX_WEIGHT)).toFixed(2);

    //evaluating letter grade
    var grade = "";
    if (percentage >= 94) {
        grade = "A";
    }
    else if (percentage >= 90) {
        grade = "A-";
    }
    else if (percentage >= 87) {
        grade = "B+";
    }
    else if (percentage >= 84) {
        grade = "B";
    }
    else if (percentage >= 80) {
        grade = "B-";
    }
    else if (percentage >= 77) {
        grade = "C+";
    }
    else if (percentage >= 74) {
        grade = "C";
    }
    else if (percentage >= 70) {
        grade = "C-";
    }
    else if (percentage >= 67) {
        grade = "D+";
    }
    else if (percentage >= 64) {
        grade = "D";
    }
    else if (percentage >= 60) {
        grade = "D-";
    }
    else {
        grade = "E";
    };

    alert("Final Percentage: " + percentage + "%" + " Final Grade: " + grade);
});