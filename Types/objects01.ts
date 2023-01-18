// 함수 파라미터 타입 애너테이션을 작성해 객체를 만들 수 있음
// 객체이름: {키-값 쌍으로 넣을 수 있다}: 반환타입
function printName(person: {first: string, last: string}): void {
    console.log(`${person.first} ${person.last}`);
}
printName({first:"Thomas", last:"Jenkins"});

// 객체 타입을 사용하는 변수를 가질 수 있음
// 객체 리터럴 - 객체 생성 방식 중 가장 일반적이고 간단한 방법으로, 컨텐츠를 그대로 대입하는 방법
let coordinate: {x: number, y: number} = {x: 34, y: 2};
console.log(coordinate);

// {x: number, y: number} - 함수가 반환하는 객체 타입
// 객체 리터럴 형태의 반환 타입 애너테이션을 가지는 함수를 만들 수 있음
function randomCoordinate(): {x: number, y: number} {
    return { x: Math.random(), y: Math.random() };
}
console.log(randomCoordinate());

// 오류 - 객체 리터럴은 알려진 프로퍼티만 지정할 수 있고, age는 이 타입에 존재하지 않는다 오류발생
// printName({first: "Mick", last: "Jagger", age: 473})

// 객체를 변수로 가지고 있다면 함수에 필요한 프로퍼티뿐만 아니라 다른 프로퍼티가 들어가도 괜찮아
const singer = {first: "Mick", last: "Jagger", age: 473, isAlive: true};
// 오류X - 객체 안에 first, last 있는지만 확인하기 때문에 추가 확인하지 않음
printName(singer) // 지정된 프로퍼티 외에는 그냥 무시하게 된다.


function createUser(user: {
    username: string;
    email: string;
    isAdmin: boolean;
}) {
    return "blah";
}

// 함수를 호출할 때 객체의 프로퍼티가 누락되면 안되고, 없는 프로퍼티를 추가해도 안됨
console.log(createUser({isAdmin: true, username:"Chickenman", email: "todd@gmail.com"}));

/*
    타입 별칭(Type alias) - 타입을 재사용하고 이름을 지정하는 방법
    여러 프로퍼티를 가지는 객체 타입 같은 좀 복잡한 타입에 이런 작업을 한다.
 */

// type 이름(대문자) = {프로퍼티: 타입}
type Point = {
    x: number;
    y: number;
}

// let coordinate: Point = {x: 34, y: 2};
// console.log(coordinate);

// function randomCoordinate(): Point {
//     return { x: Math.random(), y: Math.random() };
// }

// 이 타입을 재사용하는 함수 - 이럴 경우 타입 별칭 사용
// 이 객체는 숫자인 x와 숫자인 y를 가지고 숫자인 x와 숫자인 y를 가지는 객체를 반환
function doublePoint(point: Point): Point {
    return {x: point.x * 2, y: point.y * 2};
}

// 타입에 사용자 정의 레이블 지정
type MyNum = number;
let age: MyNum = 24234;

