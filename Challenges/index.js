// 2.7 
// css, Javascript, html 파일 분리
// HTMLDivElement - className
// classList에서 메소드를 갖는다 = 함수를 쓸 수 있다. 

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  /* 1) className
    const currentClass = title.className;

    if (currentClass !== CLICKED_CLASS){
      title.className = CLICKED_CLASS;
    } else {
      title.className = "";
    }
  */

  // 2) add() remove()
  const hasClass = title.classList.contains(CLICKED_CLASS);
  
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  
  // 3) toggle() 
  // title.classList.toggle(CLICKED_CLASS);
  
}

function init() {
  // JS는 이벤트 받기를 기다림. handleClick() 함수는 즉시 호출하지 않는것이 포인트.    
  title.addEventListener("click", handleClick);
}

init();


// Day3 Quiz 
const calculator = {
    plus: function(a, b){
    return a + b;
    },
    
    minus: function(a, b){
    return a - b; 
    },
    
    multiply: function(a, b){
    return a * b;
    },

    division: function(a, b){
    return a / b; 
    },
    
    squareRoot: function(a,b){
    return a ** b;
    }
}
  
const plus = calculator.plus(5, 5)
const minus = calculator.minus(10, 5)
const multiply = calculator.multiply(5, 5)
const division = calculator.division(10, 5)
const squareRoot = calculator.squareRoot(5, 5)

console.log(`+ ${plus}, - ${minus}, * ${multiply}, / ${division}, ** ${squareRoot}`)


