// es21
let x = "Johon"
let y ="Doe"

console.log(x+'<>'+y)

// es22
let object= {
 name: 'Davide',
 surname: 'Maragni',
 email:'dav2live@live.it'
}

delete object.email

console.log(object)

//es24 
function randomInt(min, max){
return Math.floor(Math.random() * (max - min + 1) + min)
}
function giveMeRandom(length){
const myArr = [];
for(let i = 0; i < length ; i++ ){
 myArr.push(randomInt(0, 10))
}
return myArr;
}

const random = giveMeRandom(10)

 console.log(random)

//es26
const myArr2 = [];
for(let i = 0; i < 10 ; i++ ){
myArr2.push(randomInt(0, 100))
}

console.log(myArr2)

//  es27
const max = (myArr2) => {
 let maxItem = null;
 for(const item of myArr2) {
   if(maxItem === null || item > maxItem) {
     maxItem = item;
   }
 }
 return maxItem;
}

const max2 = max(myArr2);
console.log(max2)

//es28  
const buildMatrix = (x) => {
 const matrix = [];
 
 let row =[];
  for(let i = 0; i < x ; i++ ){
  row.push(randomInt(0, 100))
 matrix.push(row);
}
return matrix;
}

console.log(buildMatrix(10))

//  es29

let list=['ps5','console','assasnin','telecamera']
let list2=['joisitic','telecamera']

function longerList (length){
 if(list.length>list2.length){
   console.log(list)
 }else{
   console.log(list2)
 }
}

console.log(longerList())

//  es30

let primo = [10,15,9,50]
let secondo = [90,1,4]


 let sum = 0;
 let sum2 = 0;
 for (let i = 0; i < primo.length; i++) {
   sum += primo[i];
 }
 for (let i = 0; i < secondo.length; i++) {
   sum2 += secondo[i];
 }
 if(sum>sum2){
   console.log(sum)
 }else{
   console.log(sum2)
 }
 
 
//  es DOM
//  es31
const contenuto= document.getElementsById('container')

//es32  
const title= document.querySelectorAll('td')

//es33  

for (const elem of title) {
console.log(elem.innerText);
}

//  es34
const changeTitle = newTitle => {
   document.querySelector('h1').innerText = newTitle;
 }
 changeTitle('nuovo titolo')

 // es35
 const addRiga =  () => {
   const newtr= document.createElement('tr');
   const tab = document.querySelector('table')
   tab.appendChild(newtr)
 }

 //es 36
 const addClass = () => {
  const tab = document.querySelectorAll('tr');

  for(const text of tab){
    elem.classList.add('test');
  }
 }

 //  es37
 const addColorRed= (tag) =>{}
 document.getElementById("sfondo").style.background = "red";

 //  es38
 window.onload = () => {
  allert('Page loaded!');
 }

 // es39
 const addToTheSecond = function (content) {
   const newUl= document.createElement('ul');
   newUl.innerHTML = content;

   const il = document.getElementById('secondList');
   ul.appendChild(newLi);

 }

 // 40
 function myFunction() {
 const list = document.getElementById("secondList");
 list.removeChild(list.firstElementChild);
 }

 //Es 41
 const showAler = () => {
  const links = document.querySelectorAll('a');

  for(const el of links){
    el.addEventListener('mouseover', event => {
    alert(el.href);
    });
  }
}
