function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
    this.subject;
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks != undefined) {
        for (let x = 0; x < marks.length; x++) {
            this.marks.push(marks[x]);
        }
    }
}

Student.prototype.getAverage = function () {
    
    if (this.marks != undefined && this.marks.length > 0 ) {
        let sum = 0;
        for (let x = 0; x < this.marks.length; x++) {
            sum += this.marks[x];
        }
        return (sum / this.marks.length)
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}