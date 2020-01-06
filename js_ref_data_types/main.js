
var student_array = ['Bob','Stacy','Ian','Heather','George','Marci'];

console.log("The third student in the array is: ", student_array[2]);
console.log("Full Student Array: ", student_array);
console.log("There are " + student_array.length + " students in the student_array");

student_array.push("Fred");
student_array.unshift("Nancy");
console.log("Full Student Array: ", student_array);
console.log("There are " + student_array.length + " students in the student_array");

var student = {};
student.firstName = "Stan";
student.lastName = "Thiem";
student.age = 25;
student.school = "Stanford";
student.questionQueue = [];
student.hasQuestion = false;

student.greeting = function(){
    return "Hello, my name is " + this.firstName;
}

student.aboutMe = function(){
    return "My full name is " + this.firstName + " " + this.lastName + ", I am " + this.age + " years old and I am a student at " + this.school;
}

student.askQuestion = function(Question){
    student.questionQueue.push(Question);
    student.hasQuestion = true;
    return "A question has been added to your queue";
}

student.answerQuestion = function(){
    if (student.hasQuestion === true){
        var currentQuestion = student.questionQueue.pop();
        if (student.questionQueue.length === 0){
            student.hasQuestion = false;
        }
        return currentQuestion;
    }
    else {
        return "You have no questions in your queue";
    }
}

console.log("Greet Test: " + student.greeting());
console.log("Aboutme Test: " + student.aboutMe());
console.log("Answer Question Test: " + student.answerQuestion());
console.log("Ask Question Test: " + student.askQuestion("How are you?"));
console.log("Ask Question Test: " + student.askQuestion("Where do you live?"));
console.log("Ask Question Test: " + student.askQuestion("What are your hobbies?"));
console.log("Answer Question Test: " + student.answerQuestion());
console.log("Answer Question Test: " + student.answerQuestion());
console.log("Answer Question Test: " + student.answerQuestion());
console.log("Answer Question Test: " + student.answerQuestion());

