### Create React App과 함께 타입스크립트 사용

```
npx create-react-app my-app --template typescript
```

## 만약 타입스크립트 react 오류가 난다면?

```
npm install —save @type/react
```


### 기존 Create React App 프로젝트에 추가 하려면?

1. 타입 정의 파일을 다운받는다.
```
npm install --save @types/react @types/react-dom
```

2. 타입스크립트 코드를 작성하기 위해 typescript 패키지도 설치한다.
```
npm install --save-dev typescript
```



### styled-component 설치

```
npm i --save-dev @types/styled-components
```

설치 후  `package.json`에 `styled-components`가 추가된 것을 확인!!

```
  "dependencies": {
    "react": "^16.8.0",
    "react-dom": "^16.8.0",
    "styled-components": "^4.3.2"
  },
```



사용법) 

1. 사용하고하는 상위 파일에서 위처럼 선언

```
import * as S from './style';
```

2. 스타일.js 파일을 생성후 선언

```
import styled from 'styled-components';
```





### scss 설치

```
npm install node-sass --save
```

css와 사용법은 거의 동일하지만, css에서 지원하지않는 변수지정 함수활용 등을 활용해 더욱 생산적인 디자인 작업이 가능하다!



### redux 설치

```
yarn add redux react-redux @types/react-redux
```




### react-router-dom 설치



```
npm i --save-dev @types/react-router-dom
```

설치 후  `package.json`에 `styled-components`가 추가된 것을 확인!!



사용법)

```react
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
```

1. 사용할 것들을 선언 해준다

```react
return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
			//=> Main컴포넌트와 연결
          <Route exact path="/login" component={Login} />
            //=> Login컴포넌트와 연결
        </Switch>
      </Router>
    );
```

2. 위처럼 작성







### axios 설치

```
npm install axios
```



사용법)

1. utils 폴더를 생성우 axios 폴더를 만든다

2. ```react
   import Axios from "axios";
   ```

   선언한다음

3. MainURL 선언하고 함수를 만든다.

```react
export const MainURL = "http://111111111111"; //MainURL 선언!!

export function request(method, url, header, data) {
  return Axios({
    method, 
    url: MainURL + url,
    headers: header,
    data: data,
  })
    .then((res) => { // 성공
      console.log("다 받기 성공");
      console.log(res);
      return res;
    })
    .catch((e) => {  // 오류
      console.error(e);
    });
}
```

4. 연동할 파일

```react
const [이름, set이름] = useState([]); //배열로 받아올 것이니 배열로 초기값을 해준다.

const 이름 = async () => {
      try {
        const data = await request(
          "get", // post, put, delete 등 사용가능
          `/axios`, // url 작성!!
          { Authorization: `Bearer ${localStorage.getItem("access-token")}` }, 
          "" // body 작성
        );
        set이름(data.이름); // 이름안에 받아온 데이터를 넣어준다.
      } catch (e) {
        console.error(e);
      }
    };
```
