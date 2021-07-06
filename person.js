const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age

}

const me = new Person('David', 'Bowie', 78)
console.log(me.age);

const friend = new Person('Jen', 'Grand', 29)
console.log(friend);

