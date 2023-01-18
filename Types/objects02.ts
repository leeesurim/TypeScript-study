// Nested Objects (중첩 객체)
type Song = {
    title: string;
    artist: string;
    numStreams: number
    credits: {producer: string, writer: string};
};

function calculatePayout(song: Song): number{
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void{
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    // credits: "asdf" - Song 하나라도 없으면 오류 발생
    credits: {
        producer: "Phill Spector",
        writer: "Alex North"
    }
}

// 출력하기 위해서 변수로 지정
const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);


// 선택적 프로퍼티
// 물음표를 넣어서 선택적 요소로 만들 수 있다
type Points = {
    x: number;
    y: number;
    z?: number;
};

// z가 없어도 오류 발생X
const myPoint: Points = { x: 1, y: 3};

/*
    readonly 제어자 - JavaScript 키워드 X
    TypeScript에서 사용하는 제어자로 객체 내의 특정 프로퍼티를 표시하거나
    또는 배열이나 클래스에 접근할 때 사용
    객체의 프로퍼티를 readonly로 표시하면 우리가 프로퍼티 변경할 때 경고준다
 */

type User = {
    readonly id: number,
    username: string,
};

const user: User = {
    id: 12837,
    username: "catgurl"
}

console.log(user.id);
// user.id = 239845 - 변경하려고 하면 일기전용이라고 경고한다.


// 교차타입(intersection type) - 여러 타입을 & 기호로 결합
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
};

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

// Cat, Dog에 없는 새로운 타입을 추가할 때
type CatDog = Cat & Dog & {
    age: number;
};

const christy: CatDog = {
    numLives: 7,
    breed: "husky",
    age: 9
};