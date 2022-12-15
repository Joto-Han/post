// 프로미스의 리절브,리젝트 상태
// const errorPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('First');
//         a = '여기에 쓸 말을 적어줘! 리젝트든 리절브든 여기에 값을 아래의 value로 가져가게된당!'
//         reject(a); // 직접 reject를 실행하면 프로미스에서 에러가 발생한것으로 간주됩니다.
//         // 또한 reject 부분에 resolve가 적히면 .catch가 아닌 .then부분의 함수가 실행된다.
//     }, 1000);
// });

// errorPromise
// // .then은 resolve 상태일때 실행되며 밑에 .catch는 실행되지 않음.
// .then((value) => {
//     console.log('Middle');
//     console.log('Last');
//     console.log(value)
// })
// // .catch는 reject 상태일때 실행되며 위의 .then은 실행되지 않음.
// .catch((value) => {
//     console.log('에러 발생!', value);
// });


// 프로퍼티와 메소드
// 키값과 밸류값이 있을때 밸류값엔 스트링이나 넘버, 함수가 들어갈 수 있다. 이때 여기 들어가는
// 함수를 메서드라고 부른다. 즉, class라는 객체(object)에 묶여있는 함수가 바로 메서드(Method)다.
// const avc = {
//     key: '밸류, 즉 값!',
//     helloworld: function () {
//         return '아이 엠 스파르타!!!!!!!!'
//     }
// }
// console.log(avc.key)
// console.log(avc.helloworld())

// 에러 핸들링의 트라이,캐치
// 트라이 문에 있는 함수를 실행하다 이 트라이문에서 에러가 났을때 뒤의 캐치문을 실행한다!
// 라고 이해하면 편하다.

// const names = ['han', 'kim', 'nakamura', 4, 'jackson', 5];

// try { 
//     a = 0
//     for (const name of names) {
//         console.log(a +'번째 이름', name.toUpperCase())
//         a += 1

//     }
// } catch (err) {
//     console.error(`Error: ${err.message}`)
// }

// 에러 핸들링의 쓰로우.
// 에러를 일부러 발생시키기 위한 문법.
// 쓰로우를 호출하면 그 즉시 현재 실행되고 있는 함수는 실행을 멈추게 됨
// 다만, 외부에 트라이/캐치 문으로 감싸지 않았을 경우 실제 서비스 그자체가 전부 종료됨
// function withdraw(amount, account) {
//     if (amount > account.balance)
//         throw new Error('잔고가 부족합니다.');
//     account.balance -= amount;
//     console.log(`현재 잔고가 ${account.balance}원 남아있습니다.`); // 이것과 바로 위는 출력되지 않을 것.

// }

// const account = { balance: 1000 };
// // withdraw(200, account)
// withdraw(2000, account)


// 에러 핸들링의 파이널리
// 트라이 캐치 파이널리 순으로 작성(?)
// 파이널리문은 에러가 발생했는지 여부 상관없이 언제든지 실행됨.
// function err(a){
//     try {
//         console.log('자원을 할당하였습니다.')
//         if (a == 5) throw new Error();
//         }
//         catch (error) {
//             console.log('에러가 발생하였습니다.')
//         }
//         finally {
//             console.log('자원을 삭제하였습니다.')
//         }
//     }

// err(4)
// console.log('----------')
// err(5)


// 클래스란?
// 미리 정의해 놓으면 필요할때마다 해당 클래스로 동일한 틀을 가진 객체를 만들 수 있음.
// class User {
// }
// // 유저라는 클래스가 생성한다.

// const user = new User();
// // User() << 여기서 괄호는 생성자를 뜻하며 user 라는 변수에 클래스의 인스턴스를 생성한다는 뜻.
// user.name = "이용우";
// user.age = 28;
// user.tech = "Node.js";

// console.log(user.name); // 이용우
// console.log(user.age); // 28
// console.log(user.tech); // Node.js

// const han = new User()
// han.name = '한주호'
// han.age = 45
// han.tech = 'node.js'

// console.log(han.age)
// console.log(han.name)
// console.log(han.tech)


// 생성자
// class User {
//     constructor(a, b, c) { 
//         // User 클래스의 생성자
//         this.name = a;
//         this.age = b;
//         this.tech = c;
//     }
// }

// const han = new User("한주호", 32, "Node.js"); // user 인스턴스 생성

// console.log(han.name);
// console.log(han.age); 
// console.log(han.tech);


// 상속
// 부모가 가진 메서드와 부모가 부모가 있는 생성자도 상속받게 된다.
// class User { // User 부모 클래스
//     constructor(name, age, tech) { // 부모 클래스 생성자
//       this.name = name;
//       this.age = age;
//       this.tech = tech;
//     }
//     getTech(){ return this.tech; } // 부모 클래스 getTech 메서드
//     geta(){ return this.name; }
//   }
  
//   class Employee extends User{ // Employee 자식 클래스
//     // 임플로이 클래스는 유저라는 클래스를 상속받은 자식 클래스
//     constructor(name, age, tech) { // 자식 클래스 생성자
//       super(name, age, tech); // 부모에 있는 생성자를 호출하게 된다. (위의 User 클래스를 호출)
//      // super 키워드는 부모 클래스의 생성자 또는 메서드를 호출 할 수 있다.
//     }

//   }
  
//   const employee = new Employee("이용우", "28", "Node.js");
//   console.log(employee.name); // 이용우
//   console.log(employee.age); // 28
//   console.log(employee.getTech()); // 부모 클래스의 getTech 메서드 호출: Node.js
//   console.log(employee.geta());


// 패키지 매니저란?
// 다른사람이 만들어준 코드나 내가짠 코드를 배포하여 다른 사람이 쓸 수 있도록 함.
// 대표적으로 npm과 yarn 이 있음.
// 패키지도 다른 패키지를 사용할 수 있고 반대도 마찬가지. = 의존 관게!
// npm은 js에서 사용하는 패키지(모듈)관리자임.
// 파이썬에선 pip을 통해 패키지를 설치했다면 js에선 npm을 통해 패키지를 설치함.
// npmjs.com에서 검색하여 확인할 수 있는 패키지만 설치가능.
// 누구나 설치할 수 있지만 프라이빗도 있음.
// yarn은 페이스북에서 출시한 패키지 매니저임.
// 얀은 엔피엠에서 부족한 부분을 보완하며 더욱 빠른 속도로 패키지를 관리할 수 있게함.
// 다만 두가지의 패키지는 동시에 사용할 경우 오류가 발생할 수 있으며 각 매니저로 설치한
// 버전이 다르게 설치될 경우 충돌할 수 있음.
// 즉, 어지간해선 두가지의 매니저는 같이 사용하지 말 것!

// 패키지.json이란?
// 설치한 패키지들의 버전을 관리할 때 동일한 패키지를 사용하더라도 버전별로 기능을 다르게
// 사용할 수 있다. 또한 엔피엠,얀 모두 동일한 패키지.json 파일을 참조합니다.

// 패키지-락.json


// 모듈이란?
// 모듈은 분리된 자바스크림트 파일이고 각 파일은 특정한 기능을 가진 여러 개의 함수와
// 변수들의 집합
// 모듈을 만들게 되면 다른 프로그램에서 해당 모듈을 재사용할 수 있음.
// 모듈은 자체로도 하나의 프로그램이 되며 다른 프로그램의 부품으로도 사용할 수 있음.
// 보통 하나의 파일이 하나의 모듈이 됨.
// export 함수 앞에 붙이면 이게 붙은 함수 하나하나를 외부로 가져갈 수 있으며, 함수가 아닌
// 모듈 그자체에 export를 붙이면 그 모듈 그대로 외부로 가져갈 수 있다.
// import,require 명령어는 외부에 있는 모듈을 가져와 사용할 수 있다.




// 면접때 대표가 들어오고 개발팀장이 안들어오면 안좋다.
// 팀원은 몇명이냐 내 상사는 누구냐 물어보면 좋다 = 대답을 안해준다? 안좋은 회사다..
