/* /* 배열 선언 */
// let arr = new Array();
/* let arr = [];
console.log(arr); */

/* 배열 추가 삭제 :뒤에서 */
/*  arr.push('❤'); // 이모티콘 -> 윈도우 + .
 arr.push('😊');
 console.log(arr); */
/* 배열 추가 삭제 :앞에서 */
/*   arr.pop(); // 값 사용하지 않음
  console.log(arr) */

/* 배열 순회 */
arr = ['🍕', '🍔', '🍗', '🍜'];
/* for (let i = 0; i < arr.length ; i++){
  console.log(arr[i])
}  */

for (let i of arr) {
    console.log(i);
}

/* 배열의 length 속성*/
//배열 비우기 JS는 배열의 길이가 조절이 가능함 (초과값은 모두 버림)
arr.length = 2;
console.log(arr)

/* 배열을 문자열로 반환*/
arr = ['🍕', '🍔', '🍗', '🍜'];
let arrs = String(arr);
console.log(arrs);

/* 문자열 split하면 배열반환*/
arr2 = arrs.split(','); // 지정한 문자를 기준으로 배열로 쪼갬
console.log(arr2);

/* 배열 정렬 */
let num = [1, 3, 5, 2, 4];
num.sort();
console.log(num);

/* filter : 주어진 함수의 조건을 만족하는 요소를 모아 새로운 배열로 반환*/
//3보다 큰수 집합
let nf = num.filter((x) => {
    return x > 3
});
console.log(nf);

/* 실습 : 합집합, 교집합, 차집합 */
let setA = [1, 2, 3, 4, 5];
let setB = [4, 5, 6, 7, 8];

//얕은 복사 : 주소값 복사
let setC = setA;
console.log(`setC => ${setC}`);

setA[0] = 100;
console.log(`setC => ${setC}`);

//깊은 복사 : 원본두고 복사본 만들기
setA[0] = 1;

let setD = [...setA]
console.log(`setD => ${setD}`);

setA[0] = 100;
console.log(`setD => ${setD}`);

//합집합
let union = [
    ...setA,
    ...setB
]
console.log(union);

//교집합
let intersection = setA.filter((item) => setB.includes(item));
console.log(intersection);

//차집합
let difference = setA.filter((item) => !setB.includes(item));
console.log(difference);

// 배열 섞기
let num2 = [1, 3, 5, 2, 4];
num.sort();

const shuffle = (num2) => {
    for (let i = 0; i < num2.length; i++) {
        let idx1 = Math.floor(Math.random() * 5); // 0~4가지의 랜덤수 생성
        let idx2 = Math.floor(Math.random() * 5);

        if (idx1 == idx2) 
            continue;
        
        //idx1위치의 값과 idx2위치의 값을 바꿔치기
        let temp = num2[idx1];
        num2[idx1] = num2[idx2];
        num2[idx2] = temp;

        console.log(`idx1 = ${idx1}, idx2 =${idx2}`);
        //console.log(num2)
    }
    return num2;
}

//Sort 함수를 이용한 Shuffle
const shuffle2 = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

console.log("셔플 1 : " + shuffle(num2));
console.log("셔플 2 : " + shuffle2(num2));
