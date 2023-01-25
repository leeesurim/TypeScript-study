/*
    유니온(union) 타입
    유니온 타입을 이용해 이 변수의 타입을 숫자 또눈 문자열로 선언하거나
    특정 함수 두가지 타입을 모두 취하도록 선언할 수 있습니다.
    유니온 타입을 이용하면 여러 타입의 값을 가질 수 있습니다.
 */
let age: number | string = 21;
age = 23;
age = "24"; // 유니온 타입으로 지정했기 때문에 오류 발생하지 않음

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y: 34};
coordinates = {lat: 321.213, long: 23.334};

function printAge(age: number | string): void{
    console.log(`You are ${age} years old`);
}

printAge(23);
printAge("87");

/*
    Unions - Narrowing the Type(타입 좁히기)
    typeof를 이용하여 타입을 확인하고, 타입에 따라 작업을 수행
 */

function calculateTax(price: number | string, tax: number){
    // price.replace("$", "") => 숫자타입에는 대체할 $이 없다고 오류
    // return price * tax; => 가격은 숫자 또는 문자니까 오류
    if(typeof price === "string"){
        price = parseFloat(price.replace("$", "")); // price: string
    }
    return price * tax; // price: number
}

console.log(calculateTax(45, .07)); // 3.1500000000000004
console.log(calculateTax("45", .07)); // 3.1500000000000004

// 유니온 타입과 배열
// const nums: number[] = [1, 2, 3, 4];
// const stuff: any[] = [1, 2, 3, 4, true, "asdf", {}]; => any는 되도록 피하는 게 좋다

// 숫자 또는 문자열을 갖는 배열이라고 선언
const stuff: (number | string)[] = [1,2,3, "asd"]

// ()가 없으면 숫자일수도 있고, 단일 문자열 배열일수도 있다([1, 2] - 오류)
// const stuff: number | string[] 

// 숫자 배열만을 갖거나 문자열 배열만 입력 가능([1,2,3, "asd"] - 오류)
// const stuff: number[] | string[]

// Point나 Loc 타입의 패턴을 꼭 따라야 합니다.(y가 없으면 오류 발생)
const coords: (Point | Loc)[] = [];
coords.push({lat: 321.213, long: 23.334});
coords.push({x: 213, y: 43}); 

// 리터럴 타입(Literal Types)
// 변수 zero의 타입은 0이며, 리터럴 값인 0을 갖습니다. 숫자타입이 아닌 숫자 0을 선언한 것
let zero: 0 = 0;
// zero = 2; - 타입 2는 타입 0에 할당할 수 없다는 메세지를 뛰웁니다.

let mood: "Happy" | "sad" = "Happy";
mood = "sad";
// mood = "angry"; - 다른 문자열로 바꾸면 오류 발생

type DayOfWeek = 
    | "Monday" 
    | "Tuesday" 
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

let today: DayOfWeek = "Monday";

