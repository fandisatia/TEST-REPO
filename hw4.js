let randomArray = [];
let oddArray = [];
let evenArray = [];

for (let i = 0; i < 100; i++) {
let randomNum = Math.floor(Math.random() * 50) + 1;
randomArray.push(randomNum);
}
console.log("Array setelah diisi dengan 100 angka random: " + randomArray);
for (let num of randomArray) {
if (num % 2 === 0) {
evenArray.push(num);
} else {
oddArray.push(num);
}
}
console.log("Array genap: " + evenArray);
console.log("Array ganjil: " + oddArray);
let oddMax = -Infinity;
let oddMin = Infinity;
let oddTotal = 0;

for (let num of oddArray) {
if (num > oddMax) {
oddMax = num;
}
if (num < oddMin) {
oddMin = num;
}
oddTotal += num;
}

let oddAvg = oddTotal / oddArray.length;

let evenMax = -Infinity;
let evenMin = Infinity;
let evenTotal = 0;

for (let num of evenArray) {
if (num > evenMax) {
evenMax = num;
}
if (num < evenMin) {
evenMin = num;
}
evenTotal += num;
}

let evenAvg = evenTotal / evenArray.length;

console.log("Nilai maksimum dari oddArray: " + oddMax);
console.log("Nilai minimum dari oddArray: " + oddMin);
console.log("Nilai rata-rata dari oddArray: " + oddAvg);
console.log("Nilai total dari oddArray: " + oddTotal);

console.log("Nilai maksimum dari evenArray: " + evenMax);
console.log("Nilai minimum dari evenArray: " + evenMin);
console.log("Nilai rata-rata dari evenArray: " + evenAvg);
console.log("Nilai total dari evenArray: " + evenTotal);

console.log("Perbandingan nilai maksimum dari oddArray dan evenArray: " + (oddMax > evenMax ? "oddArray lebih besar" : "evenArray lebih besar"));
console.log("Perbandingan nilai minimum dari oddArray dan evenArray: " + (oddMin < evenMin ? "oddArray lebih kecil" : "evenArray lebih kecil"));
console.log("Perbandingan nilai rata-rata dari oddArray dan evenArray: " + (oddAvg > evenAvg ? "oddArray lebih besar" : "evenArray lebih besar"));
console.log("Perbandingan nilai total dari oddArray dan evenArray: " + (oddTotal > evenTotal ? "oddArray lebih besar" : "evenArray lebih besar"));