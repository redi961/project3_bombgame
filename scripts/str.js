/* // /* 문자열 순회 */
// let s = "토마토"
// let i = 0;
// /* console.log(s); */

// /* 실습 : 회문인지 판별 */
// /* console.log(s[0]);
// console.log(s.charAt(0)); */

// /* 실습 : 문자열에 포함된 숫자의 합구하기*/
// let sr = "";

// for (let i = s.length - 1; i >= 0; i--) {
//     sr = sr + s[i]
//     console.log(sr);
// }
// // If 조건식으로 판단
// /* if (s == sr) {
//     console.log(`s는 회문입니다`)
// } else {
//     console.log(`s는 회문이 아닙니다.`)
// } */

// //상황연산자로 판단
// //조건식? 참:거짓 -> 짧고 간단한 조건식을 줄여쓸때 편함
// (s == sr) ? console.log (`${s}는 회문입니다.`) : console.log(`${s}는 회문이 아닙니다.`)

/* 실습 : 문자열에 포함된 숫자의 합구하기 */
let s = "Hello 2022 JS 09!!";
let sum = 0;


/* for (let c of s) {
    //if ( c >= '0' && c<= '9' ) {
     if (!isNaN(c) && c != '') {
      sum = sum + parseInt(c);
      console.log(`${c} => ${isNaN(c)}`);
    }
  } 
console.log(sum); */

/* 여러줄 문자열 저장 */
s = `Ecma International의 프로토타입 기반의 프로그래밍 언어로, 스크립트 언어에 해당된다.
특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다. 
오늘날 HTML, CSS와 함께 웹을 구성하는 요소 중 하나다.
HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 
JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다.
웹 페이지를 자동차에 비유하자면, HTML은 자동차의 뼈대, CSS는 자동차의 외관, 
JavaScript는 자동차의 동력이라고 볼 수 있다.`
/*실습 : 위의 문자열에서 HTML은 몇번 사용되었는지 확인*/

// Split을 이용한 탐색
let search = "HTML";
let count = s.split(search).length - 1;
console.log(count);

//includes를 이용한 탐색

let pos = 0;
let cnt = 0;

s.includes("HTML" , pos); // True
pos = s.indexOf("HTML"); // True일시 위치값 , False일시 -1이 출력됨
console.log(pos);

/* while (true) {
 if ( s.includes("HTML", pos) ) {
  if (s.includes(("HTML") == 1)) break; {
    pos = s.indexOf("HTML") + 1; // HTML이 발견된 위치를 기준으로 +1을 하여 위치값 재설정
    s = s.slice(pos); // HTML이 발견된 위치를 기준으로 잘라서 다시 행렬을 생성함
    cnt++;
  }
 }
} */
console.log(cnt) ;





/* 문자열 슬라이싱*/
 