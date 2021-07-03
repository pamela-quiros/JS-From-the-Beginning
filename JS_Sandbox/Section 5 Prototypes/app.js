// Object.prototype
//Person.protptype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function () {
  //   const dif = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(dif);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

//Calculate age
Person.prototype.calculateAge = function () {
  const dif = Date.now() - this.birthday.getTime();
  const ageDate = new Date(dif);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full nanme
Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}

//Gets Married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

const jhon = new Person('Jhon', 'Doe','8-12-90');
const mary = new Person('Mary', 'Johnson','March 20 1978');

console.log(mary);

console.log(jhon.calculateAge());

console.log(mary.getFullName());

mary.getsMarried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));

console.log(mary.hasOwnProperty('getFullName'));
