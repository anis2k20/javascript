const obj = {
    name: 'Anis',
    age: 23,
    friends: ['Ahmed', 'Mohamed', 'Sayed'],
    square: function (x) {
        this.age = this.age * x
        return this.age
    },
    ageCal: function (birthYear) {
        this.age = 2024 - birthYear
        return this.age
    }
}

console.log(`Anis is a ${obj.ageCal(2000)} years old`)