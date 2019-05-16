class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject} `)
    }

    grade(subject, student) {
        console.log(`${student} receives a perfect score on ${subject}`)
    }
    instructorGrade() {
        return Math.floor(Math.random() * 100 + 1)
    }
}



class Student extends Person {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;

    }
    listSubjects() {
        console.log(this.favSubjects)
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    grade() {
        return Math.floor(Math.random() * 100 + 1)
    }
    graduate() {
        if ((jay.grade - dan.instructorGrade) > 70) {
            return `${this.name} has graduated!`
        } else {
            return `${this.name} failed!`
        }
        
    }


}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;

    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time.`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}. `)
    }

}

const dan = new Instructor({
    name: 'Dan',
    specialty: 'Web-Development',
    favLanguage: 'Javascript'

})

const devin = new Person({
    name: 'Devin',
    age: 28,
    location: 'California'
})

const jay = new Student({
    name: 'Jay',
    previousBackground: 'Construction Worker',
    className: 'WEB20',
    favInstructor: 'Josh Knell',
    favSubjects: ['Math', 'science', 'social studies'],
})

const adam = new ProjectManager({
    name: 'Adam',
    gradClassName: 'WEB19',
    favInstructor: 'Josh Knell',
})

console.log(jay.PRAssignment('PRA'))
console.log(adam.standUp('channel'))
console.log(jay.listSubjects())
console.log(jay.sprintChallenge('Javascript'))
console.log(devin.speak())
console.log(adam.debugsCode(jay.name, 'LESS'))
console.log(dan.demo('CSS'))
console.log(dan.grade('math'))
console.log(jay.grade())
console.log(dan.instructorGrade())
console.log(jay.graduate())

/*#### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.//
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/