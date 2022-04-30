function people(name) {
    this.name = name;
}
const people1 = new people('Colabrator');
const people2 = new people('Codechini');

console.log(people1.name, people2.name);