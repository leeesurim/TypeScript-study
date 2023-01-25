/*
    이넘(Enums) 타입
    - JavaScript에는 없음
    - 반복적으로 참조하는 값의 집합이 있을 경우에 사용합니다.
    - (UP, DOWN, LEFT, RIGHT), (PENDING, SHIPPED, DELIVERED)
    - enum은 명명된 상수의 집합입니다.
*/

/*
    - 값이 반드시 대문자일 필요는 없지만 상수임을 분명히 알 수 있기 때문에 대문자로 작성
    - enum을 생성하고 값을 지정하지 않으면 타입스크립트가 0으로 시작하는 숫자 값을 할당
    - PENDING = 10으로 지정하면 SHIPPED는 11, 이런 식으로 1씩 증가하게 됩니다.
    - 하나의 값을 지정해주면 나머지 값들은 지정한 값을 기반으로 할당
    - enum 작업할 때는 대부분 0에서 1씩 증가하는 숫자를 사용
*/

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

// 코드 전체에서도 재사용 가능
const mystatus = OrderStatus.DELIVERED;

// status는 OrderStatus 타입
function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

// 명명된 상수인 enum, 즉 OrderStatus에 RETURNED라는 값을 넣었습니다.
isDelivered(OrderStatus.RETURNED)

// 문자열로 지정 가능 & 다양한 타입으로 지정 가능
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234
}

ArrowKeys.LEFT


/*
    - Enum은 실제로 JavaScript에 영향을 미치게 됩니다. 추가적인 코드로 나타남
    const enum을 생성하는 옵션을 사용하면 OrderStatus enum의 존재 자체를 모두 삭제해 버리고
    OrderStatus로부터 참조된 모든 값을 지정된 값으로 대체합니다.
*/