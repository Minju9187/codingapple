// class에서 쓰는 public 키워드
// public 붙으면 모든 자식들이 이용가능
// private를 붙이면 수정할 수 없음
class User1 {
  name: string;
  familyName: string = "kim";
  constructor(a) {
    this.name = this.familyName + a;
  }
}

let 유저1 = new User("park");

class Person1 {
  constructor(public name) {}
}

let 자식 = new Person1("kim");

class User2 {
  // private protected 붙이면 class 안에서만 사용가능
  // private x = 10;
  // protected 붙이면 class 안에서 extends된 class 안에서 사용가능
  protected x = 10;
}

class NewUser extends User2 {
  doThis() {
    this.x = 20;
  }
}

class User3 {
  //static 키워드 붙이면 자식에게 안물려줌
  static x = 10;
  y = 20;
}

let 자식1 = new User3();

class User4 {
  static skill = "js"; //못 물려받게 감추고 싶음
  intro = User4.skill + " 전문가입니다"; //static을 사용한 변수들은 class명.으로 사용가능
}

let 짱구 = new User4();

User4.skill = "ts";

let 짱구2 = new User4();

// private : 클래스, 객체 내부에서만 접근, 외부나 상속받은 객체에서는 접근 불가능
// protected : 상속받는 객체에서만 멤버에 접근할 수 있게 만들어주는 접근 지정자
// public : 어디에서나 접근할 수 있는 접근 지정자

class User5 {
  private static x = 10;
  public static y = 20;

  static addOne(파라미터: number) {
    User5.x += 파라미터;
  }

  static printX() {
    console.log(User5.x);
  }
}
User5.addOne(3);
User5.addOne(10);
User5.printX();
