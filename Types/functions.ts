// 매개변수 타입 지정
// function square(num: number){
//     return num * num;
// }
// square(3);

// function greet(person: string){
//     return `Hi, ${person}!`;
// }
// greet("toby");

// function multiply(x: any, y: any): number
// 특정 타입이 명시되지 않았다면, 함수 파라미터의 기본 타입은 “any”입니다.
function multiply(x,y){
    return x*y;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};
doSomething("ChickenFace", 76, true);

// 기본값 지정
function greet(person: string = "stranger"){
    return `Hi there, ${person}!`;
}
greet()

// 반환값 타입 지정
function square(num: number): number {
    return num * num;
}

const add = (x: number, y: number): number => {
    return x + y;
};

// function rando(num: number): string | number
function rando(num: number){
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}

const colors = ["red", "orange", "yellow"];
// (color: string) 안해줘도 괜찮음
colors.map(color => {
    return color.toUpperCase(); 
})


// void: 아무것도 반환하지 않는 함수의 반환 타입으로 사용합니다.
// 이 함수는 아무것도 반환하지 않음(return 없음)
function printTwice(msg: string): void{
    console.log(msg);
}

// 함수가 값을 참조하지 않으면, TypeScript는 해당 함수의 반환 타입을 void로 추론합니다.
function doNothing() {
    2 + 2;
}

/*
Never 타입은 몇 가지 시나리오에서 사용됩니다.
- 함수의 반환 타입으로 쓰이는 경우
- 절대 반환되지 않아야 할 함수를 애너테이션 처리할 때 쓰이는 경우

Never은 함수가 아무것도 반환하면 안 된다는 것을 나타내기 위해 사용하고,
이 함수는 일반적으로 예외를 발생시키는 함수가 될 것입니다.
 */

function makeError(msg: string): never {
    throw new Error(msg); // 새 오류를 발생, 반환 X
}

function gameLoop(): never{
    while(true){
        console.log("GAME LOOP RUNNING!");
    }
}

/*
Never vs Void
    void - 값, void를 반환하는 함수, undefined 상태로 반환
    never - 이 함수가 절대 반환할 기회를 가지면 안됨
 */