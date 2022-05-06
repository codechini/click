// function people(name) {
//     this.name = name;
// }
// const people1 = new people('Colabrator');
// const people2 = new people('Codechini');

// console.log(people1.name, people2.name);

function people(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}
people.prototype.getFullname = function() {
    return this.firstName + ' ' + this.lastName;
}

function mailBoy(fname, lname) {
    people.call(this, fname, lname);
    this.isArriving = true
}
mailBoy.prototype.delivered = function() {
    console.log('delivered the Mail')
}

mailBoy.prototype = object.create(people.prototype)

const cornor = new mailBoy('Cornor', 'O Brian')
console.log(cornor.getFullname());