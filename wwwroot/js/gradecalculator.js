//the default of the $ (or JQuery.) is document.getElementById

//Grade Weights - global
var ASSIGNMENT_WEIGHT = .5;
var GPROJECT_WEIGHT = .1;
var QUIZ_WEIGHT = .1;
var EXAM_WEIGHT = .2;
var INTEX_WEIGHT = .1;

//Jquery magic from videos
// var submit = $("submitButton");
$("#submitButton").click( function () {
    //calculating grade percentage
    var percentage = (($("#assignments").val() * ASSIGNMENT_WEIGHT) +
        ($("#groupproject").val() * GPROJECT_WEIGHT) +
        ($("#quizzes").val() * QUIZ_WEIGHT) +
        ($("#exams").val() * EXAM_WEIGHT) +
        ($("#intex").val() * INTEX_WEIGHT)).toFixed(2);

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