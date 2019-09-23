var readlineSync = require('readline-sync');
var fs = require('fs');

var students = [];

function loadData() {
	var fileContent = fs.readFileSync('./data.json', {encoding: 'utf8'});
	students = JSON.parse(fileContent);
}

function showStudents() {
	for(var student of students){
		console.log(student.name, student.age);
	}
}

function showCreateStudents() {
	var name = readlineSync.question('name:');
	var age = readlineSync.question('age: ');
	var student = {
		name: name,
		age: parseInt(age)
	}
	students.push(student);
}

function saveAndExit() {
	var content = JSON.stringify(students);
	fs.writeFileSync('./data.json', content);
}
function showMenu(){
	console.log('1. Show all students');
	console.log('2. Create a new student');
	console.log('3. Save & Exit');

	var option = readlineSync.question('> ');
	switch(option){
		case '1':
			showStudents();
			showMenu();
			break;
		case '2':
			showCreateStudents();
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			console.log('option wrong');
			showMenu();
	}
}

function main(){
	loadData();
	showMenu();
}
main()