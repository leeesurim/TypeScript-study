let age = "eighteen";
// age = 19;
// 숫자 타입은 문자열 타입에 할당할 수 없습니다.

const kimchi = {
    맛있어: true
}

// array 타입 -  boolean
const array: boolean[] = [true, false];

// 변수 이름 옆에 ?를 함으로써 Optional을 사용할 수 있다.
// 옵셔널(Optional)은 있을수도, 없을 수도 있는 변수를 저장하기 위해 사용
const player: {
    name?:string,
    age:number
} = {
    name:"toby",
    age:16
}

// 타입 별칭(Type Aliases)은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미합니다
type MyName = string;
const names: MyName = 'capt';

// 배열 나타내는 방법
let strArr: string[] = ['1', '2', '3'];
let numArr: Array<number> = [1, 2, 3];

// 튜플 - 서로 다른 타입을 함께 가질 수 있는 배열
// 튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있습니다.
let person: [string, number];
person = ["kim", 23];
