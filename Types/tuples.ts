const stuff: (string | number)[] = ["a", "b", "c", 2];

/*
    튜플(Tuple) 타입
    - Javascript에는 없음
    - 개념은 본질적으로 배열 타입이지만 고정된 길이를 갖는 배열이며, 고정된 타입 세트로 순서가 정렬됩니다.
    - 튜플은 길이와 타입이 고정되어 있습니다.
    - 숫자 다음에 문자열이 오는 배열을 원한다고 선언해야 합니다.
    - 순서를 바꾸면 유효하지 않습니다.
    
    - 튜플 많이 사용하지 않지만 알아두자.
    - 튜플은 고정된 길이 타입의 배열이며 배열 순서가 상관이 없습니다.
    - 튜플 타입을 생성하는 구문은 배열 대괄호 안에 원하는 타입을 순서대로 입력하는 것입니다.
    - [boolean, string, number]
*/

// 튜플 타입으로 배열에 세 개의 숫자만 입력되도록 선언
const color: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];

// 순서가 바뀌거나 새로운 것 추가하면 오류 발생
const goodRes: HTTPResponse = [200, "OK"];

// 첫번째 요소를 문자열로 바꾸려고 하면 오류 발생
// goodRes[0] = "200";

// 튜플 생성 후 추가 요소를 푸시(push)하는 것을 막지 않습니다.
goodRes.push(2022); // 오류 발생하지 않음!!!
goodRes.pop();
goodRes.pop();
goodRes.pop(); // 세번 실행하면 빈 배열이 됩니다.

// 객체 형식이 더 나을 수 있음
const HTTPS = 
{
    code: 200,
    msg: "OK"
}

