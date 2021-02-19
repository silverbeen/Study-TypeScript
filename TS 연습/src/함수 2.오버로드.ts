function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  // 함수구현
  return a + b;
}

add("silver", "hello");
add(1, 3);
//add("silver", 3); //에러

interface IUser {
  name: string;
  age: number;
  getData(x: string): string[];
  getData(x: number): string;
}

let user: IUser = {
  name: "silver",
  age: 36,
  getData: (data: any) => {
    if (typeof data === "string") {
      return data.split("");
    } else {
      return data.toString();
    }
  },
};

user.getData("Hello"); // ['h', 'e', 'l', 'l', 'o']
user.getData(123); // '123'
