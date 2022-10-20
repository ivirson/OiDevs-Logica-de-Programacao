let students = ["Andre", "Jady", "Paula"];
// console.log(typeof students);
// console.log(students);
// console.log(students.length);
// console.log(students[1]);

// Adiciona item ao final da lista
students.push("José");
// console.log(students);

// Adiciona item ao final da lista
students.unshift("Ivina");
// console.log(students);

// Remove um item ao final da lista
// students.pop();
// console.log(students);

// Remove um item no início da lista
// students.shift();
// console.log(students);

// Remover um item específico
// const index = students.indexOf("Jady");
// students.splice(index, 1);
// console.log(students);

// const myArray = students;
// console.log("students", students);
// console.log("myArray", myArray);
// myArray.pop();
// console.log("students", students);
// console.log("myArray", myArray);

const myArray = students.slice();
console.log("students", students);
console.log("myArray", myArray);
myArray.pop();
console.log("students", students);
console.log("myArray", myArray);
