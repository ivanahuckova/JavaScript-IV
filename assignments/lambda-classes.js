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

class Student extends Person {
	constructor(att) {
		super(att);
		this.previousBackground = att.previousBackground;
		this.className = att.className;
		this.favSubjects = att.favSubjects;
		this.grade = att.grade;
	}
	listsSubjects() {
		for (let i = 0; i < this.favSubjects.length; i++) {
			console.log(this.favSubjects[i]);
		}
	}
	PRAssignment(subject) {
		console.log(`${this.name} has submitted a PR for ${subject}.`);
	}
	sprintChallenge(subject) {
		console.log(`${this.name} has began sprint challenfe on ${subject}.`);
	}
	graduate() {
		if (this.grade > 70) {
			console.log(`${this.name} graduates!!!!`);
		} else {
			ilana.gradeStudent(this);
			console.log(
				`${this.name} you have ${
					this.grade
				}/100 which is not enought points mate. But I am going to grade your latest test and we will see. Try to check again soon.`
			);
		}
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
		console.log(`Today we are learning about ${subject}.`);
	}
	grade(student, subject) {
		console.log(`${student.name} receives a perfect score on ${subject}.`);
	}

	gradeStudent(student) {
		const randomNumber = function randomizeGrade() {
			let plusOrMinus = Math.random() < 0.35 ? -1 : 1;
			let randomPoints = Math.floor(Math.random() * Math.floor(20));
			return plusOrMinus * randomPoints;
		};
		let points = randomNumber();
		if (student.grade + points > 100) {
			student.grade = 100;
		} else if (student.grade + points < 0) {
			student.grade = 0;
		} else {
			student.grade += points;
		}

		return `${student.name} : ${student.grade}`;
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
		console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
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
	favSubjects: ["React", "Python", "CS"],
	grade: 56
});

const sam = new Student({
	name: "Sam",
	age: "27",
	location: "Belgium",
	gender: "Male",
	previousBackground: "Doctor",
	className: "WEBEU3",
	favSubjects: ["Redux", "Javascript", "CS"],
	grade: 78
});

const severus = new Student({
	name: "Severus",
	age: "89",
	location: "Finland",
	gender: "Male",
	previousBackground: "Accountant",
	className: "WEBEU5",
	favSubjects: ["Redux", "Javascript", "CS"],
	grade: 20
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

//TESTING OUT STUDENTS

console.log(sam);
console.log(sam.listsSubjects());
console.log(sabrina.PRAssignment("Javascript II"));
console.log(severus.sprintChallenge("React"));
console.log(severus.speak());

//TESTING OUT INSTRUCTORS
console.log(ibrahim);
console.log(ilana.grade(sabrina, "Redux"));
console.log(ivor.demo("React"));
console.log(ibrahim.speak());

//TESTING OUT PMs
console.log(peter);
console.log(patrick.standUp("#WEBEU1"));
console.log(penelope.debugsCode(sabrina, "Preprocessors"));
console.log(peter.speak());
