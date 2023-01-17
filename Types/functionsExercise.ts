// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// 내 풀이
function twoFer(name: string = "you"): string{
    return `one for ${name}, one for me`;
}

const twoFers = (name: string = "you"): string => {
    return `one for ${name}, one for me`;
};

console.log(twoFer());
console.log(twoFer("Elton"));

// 정답
function twoFerSOLUTION(person: string = "you"): string {
    return `One for ${person}, one for me.`;
}

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100 => 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않음
// OR... 
// - year is a multiple of 400 => 400으로 나누어 떨어짐
// hint - use modulo

// 내 풀이
function isLeapyear(year: number): boolean{
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) ? true : false;
}

const isLeapYears = (year: number): boolean =>{
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? true : false;
};

console.log(isLeapyear(2012));
console.log(isLeapyear(2013));

// 정답(삼항연산자를 쓰지 않아도 반환값 boolean이니까 한줄로 작성할 수 있다)
const isLeapYearSOLUTION = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    // if(year % 4 === 0 && year % 100 !== 0){
    //     return true;
    // }else if(year % 400 === 0){
    //     return true;
    // }return false;
}