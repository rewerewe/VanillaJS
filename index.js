console.log('Im Working. Im JS. Im Beautiful. Im worth it');

// 1.5
// 모든 언어 컨셉은 비슷하다. 
// Function / Variable / Conditional Option / Event / Class / Object / Arrays 를 배우는 것 

// 1.6 
// Variable 변경되거나 변경될 수 있는 것.
// 모든 expression instruntion은 한 라인에 있어야 한다. 
// Create-Initialize-Use
// let : 변수를 생성하거나 초기화 할때 사용한다. 필요할 떄만 let으로 변수 선언하기. 
let a = 221;
let b = a - 5;
console.log(b); 

// 1.7 
// const : 변수 선언할 때 기본 사용하기. 상수 변하지 않는 값으로 변수 생성, 초기화 할 때 사용한다. 
// (let 은 문제가 발생했을 때 생성값으로 바뀌기 때문에 무슨 일이 일어났는지 알 수 없게 된다.) 
// 항상 에러를 읽으려고 시도할 것. 대부분의 정보는 에러에 있다.
const c = 221;
let d = c - 10;
// a = 4 ;  Error 발생 
console.log(d); 

// 1.8
// Kind of DataType 
// // 라인 주석 do not read. do not run it. 
// /**/ 블럭 주석 

// 일반적 변수 선언은 const(상수) 로 하기 - 특이한 경우 let(변수) 선언하기
// String
const what = "imme";
console.log(what);

// Boolean
const waf = false;

//Number
const wat = 444;
console.log(wat);

// Float 
const wata = 55.1;

// 1.9 
// Organizing Date with Arrays.
// Array : 데이터를 저장하는 곳. 리스트 같이.  
 const mon = "Mon";
 const tue = "Tue";
 const wed = "Wed";
 const thu = "Thu";
 const fri = "Fri";
 
 const dayOfWeek = ["Mon", "Tue","Wed", "Thu", "Fri", true];
 
 console.log(dayOfWeek[2]);

 // 1.10
 // Organizing Date with Object.
 // Object : Arrays와 다른 점은 각 value에 이름을 준다는 것.  
const immeInfo = {
    name: "imme",
    age: 33,
    gender: "female",
    isBeautiful: true,
    favMovies: ["Along the gods", "Inception", "Monster"],
    favFood: [
      {
        name: "Yogurt",
        fatty: false
      },
      {
        name: "fried chicken",
        fatty: true
      }
    ]
  }
  
// Object Data Edit
immeInfo.gender ="Male";

console.log(immeInfo.gender);


