// Prototypal Inheritance. 
// myPerson --> Person.prototype --> Objec.prototype --> null
// Object: myObject --> myObject.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })    
        return bio 
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

// Creating subclasses
// extends
// super

// class Student extends Person {
//     constructor(firstName, lastName, age, major, likes) {
//         super(firstName, lastName, age, likes)
//         this.major = major
//     }
//     getBio () {
//         return `${this.firstName} is a ${this.major} student.`
//     }
//     yearsSinceGraduated() {
//         return `${this.firstName} has graduated ${this.age - 23} years ago.`
//     }

// }


// Challenge time

class Student extends Person {
    constructor(firstName, lastName, age, major, likes, grade) {
        super(firstName, lastName, age, likes)
        this.major = major
        this.grade = grade
    }
    getBio() {
        return this.grade >= 70 ? `${this.firstName} is passing the course.` : `${this.firstName} is failing the course.`
        // if (this.grade >= 70) {
        //     return `${this.firstName} is passing the course.`
        // } else {
        //     return `${this.firstName} is failing the course.`
        // }
    }
    updateGrade(amount) {
        return this.grade += amount
    }
}

const me = new Student('David', 'Numanov', 24, 'CS', ['Horse Riding'], 71)
console.log(me.getBio());
console.log(me.updateGrade(-50)); 
console.log(me.getBio());