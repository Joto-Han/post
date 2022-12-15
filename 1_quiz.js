
// // 내가 쓴 코드 . 정답이 아닌거같음.
// class Unit {
//     constructor(name, hp){
//       this.name = name
//       this.hp = hp
//     }
//     gethealing(h){ 
//         if (this.hp < 100) {
//             this.hp += h
//         }
//         else if (this.hp >= 100) {
//             this.hp = 100
//         }
//      }

//     getdamaged(d){ 
//         if (this.hp >= d) {
//             this.hp -= d
//         }
//         else if (this.hp <= d) {
//             this.hp = 0
//             count += 1
//         }
//     }
// }

// const monster = new Unit('박쥐',100)
// monster.getdamaged(70)
// monster.gethealing(10)
// monster.getdamaged(50)
// monster.gethealing(100)

// 정답 코드
class Unit {
    constructor(name, hp) {
      this.name = name;
      this.hp = hp;
    }
    healing(heal) {
      if (this.hp <= 0) return;
      // 내생각엔 hp가 0보다 작기에 죽었다고 판단하여 밑에 코드를 실행하지 않고 리턴해주는거 같음
      this.hp += heal;
      if (this.hp >= 100) this.hp = 100;
    }
    damaged(damage) {
      if (this.hp <= 0) return;
      // 마찬가지로 hp가 0보다 작기에 밑에 코드는 실행하지 않음.
      this.hp -= damage;
      if (this.hp <= 0) this.hp = 0;
      // 여기서 hp보다 큰 공격을 맞고 0이 될 경우 위의 리턴으로 전부 막히게 됨.
    }
  }
  
  const unit = new Unit('유닛', 100);
  unit.damaged(70); // 30
  unit.healing(10); // 40
  unit.damaged(50); // 0
  unit.healing(100); // 0
  