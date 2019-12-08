// 2.1 
// First JS Function
// console.log(immeInfo, console);
// 브라우저가 가진 자바스크립트를 object에 넣을 수 있다. 
// console : built-in function. console은 내장함수이다. 
// function : 어떤걸 수행하려는 한 부분. 한조각 코드 원하는 만큼 사용할 수 있다.

// 자바스크립트에서 함수만들기
function sayHello(name, age){
  console.log("hello!", name, " you have", age, " year of age.");
}

sayHello("Imme", 33); //("name") = arguments : argument는 변수와 같은 것. 변수를 저장하여 함수로 가지고 가는 것. 함수에게 외부에 있는 데이터를 준다.  

function sayHi(name, age){
    return `Hello ${name} you are ${age} years old`;
}
  
// 2.1.1 
const greetImme = sayHi("Imme", 33);
// console.log(greetImme)

// 2.2 
// JS DOM Function
// HTML Document는 Javascript가 된다. 
//console.log(document); 
const titleID = document.getElementById("title");
console.log(titleID)

// DOM : Document Object Module. 자바스크립트는 HTML에 있는 모든 태그를 가지고 온다. 그리고 객체로 바꾼다.
// 객체를 .으로 찍었을 때 나온다. Document의 모든 건 다 객체가 된다. (=모든 HTML은 객체가 된다.)
// 객체가 많은 키를 갖는다는 것을 알아야 접근해 수정할 수 있다. 
// titleID.innerHTML = "Hi! From JS";

// 2.3 
// Modifying the DOM with JS
// 자바스크립트 객체 표기법

// 우리가 배울 모든 함수들은 모든 객체들의 함수들 DOM(Document Object Model)형태로 변경 가능하다. 
// console.dir()로 이벤트를 찾고 html을 조종할 수 있다. 
console.dir(document); 

// DOM 객체로 접근하여 JS로 수정할수 있고, HTML을 바꿀 수 있다. 
// (class 추가, 애니메이션 변경, toggle 적용, click 감지 etc)
titleID.style.color = "red";
document.titleID = "I own you now";


// 2.4
// Event and Event handlers
// JS가 만들어진 이유는?
// - 단지 HTML 과 CSS 를 바꾸는데만 사용하지 않는다. 
// JS는 이벤트(웹사이트에서 반응하는 것들)에 반응하기 위해서 만들어졌다! 
// (click, resize, submit, input, change, load, before, closing, printing)

function handleResize(event) {
  // 이벤트를 다를 함수를 만들 때마다. JS는 자동으로 함수를 객체에 붙인다. 
  // = event 발생할 때마다, 이벤트 객체가 호출된다. (form, click link 할 때 유용함)
  console.log(event);
}

window.addEventListener("resize", handleResize(event));

// 2.5
// if, else, and, or 
// === Check Condition
if(10 === 5){
  console.log("hi");
} else {
  console.log("ho");
}

// && true and true
// || true or true
if (20 > 5 && "immes" == "immes") {
  console.log("yes");
} else {
  console.log("no");
}
