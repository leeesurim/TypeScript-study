// 키워드 변수이름: 타입(소문자) = 값;
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
// movieTitle = 9;

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";

let nothing: null = null;
let foo: undefined = undefined;

// Type Inference
let tvShow = "Olive Kitteridge";
tvShow = "The Other Two";
// tvShow = false;

let isFunny = false;
// isFunny = "asd";

// the any type
let thing: any = "hello";
thing = 1;
thing = false;
thing()
thing.toUpperCase()


const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMoive: string;
// 변수 타입을 애너테이션 처리하지 않고, 값을 초기 설정하지 않으면, 해당 변수의 타입은 "any"입니다

for(let movie of movies){
    if(movie === "Amadeus"){
        foundMoive = "Amadeus";
    }
}
