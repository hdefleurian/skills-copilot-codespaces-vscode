function skillsMember() {
    return {
        name: 'John',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        greet: function() {
            return `Hello, my name is ${this.name}, and I'm ${this.age} years old. I know ${this.skills.join(', ')}.`;
        }
    }
}