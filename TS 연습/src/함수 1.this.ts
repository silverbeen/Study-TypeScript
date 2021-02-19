const obj = {
  a: "hello",
  b: function () {
    console.log(this.a);
  },
};

obj.b(); //hello

//bind 를 직접 사용해 this 와 연결
/* const b = obj.b.bind(obj);
b();

function someFn(cd: any) {
  cd();
}

someFn(obj.b.bind(obj));

setTimeout(obj.b.bind(obj), 100);
 */

//화살표 함수를 사용
// const b = () => obj.b();
// b();

// function someFn(cd: any) {
//   cd();
// }

// someFn(() => obj.b());

// setTimeout(() => obj.b(), 100);
/* 
class Cat {
  constructor(private name: string) {}

  getName = () => {
    console.log(this.name);
  };
}

const cat = new Cat("silver");
cat.getName(); //silver

const getName = cat.getName;
getName(); //silver

function someFn(cd: any) {
  cd();
}

someFn(cat.getName); */

//명시적 this
/* interface ICat {
  name: string;
}

const cat: ICat = {
  name: "silver",
};

function someFn(greeting: string) {
  console.log(`${greeting} ${this.name}`);
}
someFn.call(cat, "silver");

 */
/* 
interface ICat {
  name: string;
}

const cat: ICat = {
  name: "silver",
};

function someFn(this: ICat, greeting: string) {
  console.log(`${greeting} ${this.name}`);
}
someFn.call(cat, "silver"); */