// CODE here for your Lambda Classes

class Person {
	constructor(att) {
		this.name = att.name;
		this.age = att.age;
		this.location = att.location;
		this.gender = att.gender;
	}
	speak() {
		console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
	}
}

class Instructor extends Person {
	constructor(att) {
		super(att);
		this.speciality = att.speciality;
		this.favLanguage = att.favLanguage;
		this.catchPhrase = att.catchPhrase;
	}
	demo(subject) {
		console.log(`Today we are leasning about ${subject}.`);
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}`);
	}
}

class Student extends Person {
	constructor(att) {
		super(att);
		this.previousBackground = att.previousBackground;
		this.className = att.className;
		this.favSubjects = att.favSubjects;
	}
	listsSubjects() {
		for (let i = 0; i < this.favSubjects.length; i++) {
			console.log(this.favSubjects[i]);
		}
	}
	PRAssignment(subject) {
		console.log(`${student.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge(subject) {
		console.log(`${student.name} has began sprint challenfe on ${subject}`);
	}
}

class ProjectManager extends Instructor {
	constructor(attr) {
		super();
		this.gradClassName = att.gradClassName;
		this.favInstructor = att.favInstructor;
	}
	standUp(slackChannel) {
		console.log(
			`${this.name} announces to ${slackChannel}, @channel standy times!`
		);
	}
	debugsCode(student, subject) {
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
	}
}

const personTest = new Instructor({
	name: "Ivana",
	age: 29,
	location: "Slovakia",
	gender: "Female",
	speciality: "Frontend",
	FavLanguage: "Javascript",
	catchPhrase: "Salalala"
});

//STUDENTS

//INSTRUCTORS

//PMS
