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
		console.log(`${this.name} has submitted a PR for ${subject}`);
	}
	sprintChallenge(subject) {
		console.log(`${this.name} has began sprint challenfe on ${subject}`);
	}
}

class ProjectManager extends Instructor {
	constructor(att) {
		super(att);
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

//STUDENTS
const sabrina = new Student({
	name: "Sabrina",
	age: "45",
	location: "France",
	gender: "Female",
	previousBackground: "Lawyer",
	className: "WEBEU1",
	favSubjects: ["React", "Python", "CS"]
});

const sam = new Student({
	name: "Sam",
	age: "27",
	location: "Belgium",
	gender: "Male",
	previousBackground: "Doctor",
	className: "WEBEU3",
	favSubjects: ["Redux", "Javascript", "CS"]
});

const severus = new Student({
	name: "Severus",
	age: "89",
	location: "Finland",
	gender: "Male",
	previousBackground: "Accountant",
	className: "WEBEU5",
	favSubjects: ["Redux", "Javascript", "CS"]
});

//INSTRUCTORS

const ilana = new Instructor({
	name: "Ilana",
	age: "29",
	location: "USA",
	gender: "Female",
	speciality: "Machine Learning",
	favLanguage: "Python",
	catchPhrase: "You go!"
});

const ibrahim = new Instructor({
	name: "Ibrahim",
	age: "46",
	location: "USA",
	gender: "Male",
	speciality: "Frontend",
	favLanguage: "Javascript",
	catchPhrase: "Try harder!"
});

const ivor = new Instructor({
	name: "Ivor",
	age: "52",
	location: "USA",
	gender: "Male",
	speciality: "Backend",
	favLanguage: "Python",
	catchPhrase: "Don't forget the homies"
});

//PM

const peter = new ProjectManager({
	name: "Peter",
	age: "32",
	location: "Canada",
	gender: "Male",
	speciality: "Data Science",
	favLanguage: "Python",
	catchPhrase: "Have fun",
	gradClassName: "CS1",
	favInstructor: "Ivor"
});

const patrick = new ProjectManager({
	name: "Patrick",
	age: "38",
	location: "Argentina",
	gender: "Male",
	speciality: "Frontend",
	favLanguage: "Javascript",
	catchPhrase: "Take it easy",
	gradClassName: "CS4",
	favInstructor: "Ilana"
});

const penelope = new ProjectManager({
	name: "Penelope",
	age: "23",
	location: "Russia",
	gender: "Female",
	speciality: "Frontend",
	favLanguage: "Javascript",
	catchPhrase: "Work hard play hard",
	gradClassName: "WEB4",
	favInstructor: "Ibrahim"
});
