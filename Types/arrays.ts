const activeUsers: string[] = [];
activeUsers.push("Tony");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;

// const bools: Array<boolean> = []
const bools: boolean[] = [];

// 배열에도 객체 타입 적용 가능
type Point = {
    x: number,
    y: number
}

const coords: Point[] = [];
coords.push({x: 23, y: 8});
// coords.push({y: 8}); => x 없다고 오류

// 문자열을 갖는 2차원 배열을 선언
const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
];

// 3차원 배열
const demo: number[][][] = [[[1]]];