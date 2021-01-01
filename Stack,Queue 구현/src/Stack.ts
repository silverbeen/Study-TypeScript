//any 를 이용하여 구현하면 저장하고 있는 자료의 타입이 모두 같지 않다는 문제점 발생
//스택에서 자료를 추출하는 경우 런타임에서 항상 타입검사를 해줘야 한다.
/* class Stack {
    private data : any[] =[];

    constructor() {}

    push(item:any):void {
        this.data.push(item);
    }

    pop():any {
        return this.data.pop();
    }
}

const stack = new Stack();
stack.push(1);
stack.push('a');
stack.pop().substring(0) // 'a' 
stack.pop().substring(0)// 타입 에러 */

//제네릭
//스택 자료구조를 제네릭으로 구현
class Stack<T> {
  // 제네릭을 사용하겠다는 의미로 <식별자> 식별자 : 타입

  private data: T[] = [];

  constructor() {}

  push(item: T): void {
    this.data.push(item);
  }

  pop(): T {
    return this.data.pop();
  }
}

//생성자를 호출하여 객체를 만들때 T 로 사용될 타입을 지정해주면 된다.
const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

//각 스택은 생성할 때 선언한 타입만을 저장하고 리턴
//장점 : 컴파일러가 리턴하는 타입을 알 수 있어 에디터에서 자동 완성 사용 할 수 있어 생산성 향상에 기여한다.
numberStack.push(1);
stringStack.push("a");
