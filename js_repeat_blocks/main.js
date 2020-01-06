
var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var asc = 0; asc<numbers.length; asc++) {
    console.log(numbers[asc]);
}

for (var desc = numbers.length-1; desc>=0; desc--) {
    console.log(numbers[desc]);
}

for (var odd = 0; odd<numbers.length; odd+=2) {
    console.log(numbers[odd]);
}



var mixedArray = [4,56,11,13,97,22,7,36,19,5,8,10];
for (var i = 0; i<mixedArray.length; i++) {
     if (mixedArray[i] % 2 !== 0) {
        console.log(mixedArray[i]);
     }
}



var classRoom = {'desk1': 'Stu', 'desk2': 'Peggy', 'desk3': 'LoneStar', 'desk4': 'George', 'desk5': 'Sheldon'};
for (var name in classRoom) {
    console.log(classRoom[name] + " is at " + name);
}



var studentArray = [{'name': 'Bob', 'grade': 87}, {'name': 'Fred', 'grade': 82}, {'name': 'George', 'grade': 93}, {'name': 'Robert', 'grade': 85}]
function findStudent(name) {
    var output = "";
    var i = 0;
    var found = false;


    while (!found && i < studentArray.length){
        var student = studentArray[i];
        if (student.name == name) {
            output = "Found " + name + " Grade: " + student.grade;
            found = true;
        }
        i++;
    }
    if (found !== true) {
        output = "Student " + name + " not found";
    }
    return output;
}

console.log("Test 1: ", findStudent("George"));
console.log("Test 2: ", findStudent("Fred"));
console.log("Test 3: ", findStudent("Hank"));



