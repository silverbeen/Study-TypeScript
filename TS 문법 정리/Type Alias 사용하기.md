# Type Alias 

type 은 특정 타ㅣㅂ에 별칭을 붙이는 용도로 사용.

이를 사용하여 객체를 위한 타입 설정, 배열, 또는 어떤 타입이던 별칭을 지어 질 수 있다. 

```typescript
type Person = {
    name : string;
    age? : number; 
    //물음표의 의미는 설정을 해도 되고 안해도 되는 값을 의미
};

//&는 intersection 으로서 두개 이상의 타입들을 합쳐준다.
type Developer = Person & {
    skills : string[];
};

const person : Person = {
    name : '강은빈'
};

const expert : Developer = {
    name  : '실버빈',
    skills : ['react', 'c']
};

type People = Person[]; //Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있다.
const people: People = [person, expert];

type Color = 'red' |'orange' |'yellow';
const color : Color = 'red';
const colors : Color[] = ['red', 'orange'];


```

- interface 와 type 중 아무거나 써도 되긴하지만 일관성 있게 쓰면 상관 없다. ㄴ