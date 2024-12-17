# JavaScript-ES6
JavaScript new gen 
---

##  How to run
1. คัดลอกโค้ดตัวอย่างไปยังไฟล์ `script.js`  
2. เชื่อมต่อไฟล์กับ HTML  
3. เปิดเบราว์เซอร์เพื่อดูผลลัพธ์  

---


---

# ตัวอย่างโค้ด JavaScript 🖥️  

โค้ดนี้สาธิตการใช้งาน **JavaScript** เบื้องต้น ตั้งแต่การทำงานกับ **Array**, **Object**, การจัดการ **DOM Events** รวมถึงฟีเจอร์ใหม่ของ **ES6** เช่น **Arrow Functions**, **Destructuring**, และอื่นๆ  

---

## ตารางเนื้อหา  
1. [การทำงานกับ Array](#การทำงานกับ-array)  
2. [Object และการเรียกใช้งาน](#object-และการเรียกใช้งาน)  
3. [DOM Events](#dom-events)  
4. [ฟีเจอร์ ES6](#ฟีเจอร์-es6)  
5. [คลาส (Classes)](#คลาส-classes)  

---

## การทำงานกับ Array  

### 1. การใช้ `map()` แปลงข้อมูล  
```javascript
let scoreS = [85, 90, 49, 52, 45, 74];
let map = scoreS.map((scoremap) => {
    return scoremap >= 50 ? "ผ่าน" : "ตก";
});
console.log(map); 
// ผลลัพธ์: ["ผ่าน", "ผ่าน", "ตก", "ผ่าน", "ตก", "ผ่าน"]
```

### 2. การใช้ `filter()` กรองข้อมูล  
```javascript
let filter = scoreS.filter((scorefilter) => {
    return scorefilter >= 50;
});
console.log(filter); 
// ผลลัพธ์: [85, 90, 52, 74]
```

### 3. การใช้ `reduce()` รวมข้อมูล  
```javascript
let reduceSum = scoreS.reduce((sum, scorereduce) => {
    return sum + scorereduce;
});
console.log(reduceSum); 
// ผลลัพธ์: 395
```

### 4. การใช้ `find()` ค้นหาข้อมูล  
```javascript
let finddic = scoreS.find((findinfo) => {
    return findinfo <= 50;
});
console.log(finddic); 
// ผลลัพธ์: 49
```

---

## Object และการเรียกใช้งาน  

### ตัวอย่าง Object พร้อมเมธอด  
```javascript
let dog = {
    namedog: "stardog",
    breed: "Thai",
    color: "Green",
    weight: 20,
    voice() {
        console.log(this.namedog + " เห่าว่า hong hong!");
    }
};
dog.voice(); 
// ผลลัพธ์: "stardog เห่าว่า hong hong!"
```

---

## DOM Events  

### การสลับธีมแบบคลิก  
```javascript
let body = document.body;
let btntheme = document.querySelector('.themetoggle');
btntheme.addEventListener("click", () => {
    body.classList.toggle('dark');
});
```

---

## ฟีเจอร์ ES6  

### 1. ฟังก์ชันแบบเดิม  
```javascript
function oldfunction() {
    return "Old functionโง่ๆ";
}
console.log(oldfunction());
```

### 2. ฟังก์ชันแบบลูกศร (Arrow Function)  
```javascript
const Arrow = (val1, val2) => `หวัดดีไอโง่ ${val1} นิสัย ${val2}`;
console.log(Arrow("got", "ใจเย็น"));
```

### 3. การ Destructuring ข้อมูล  
#### ตัวอย่างกับ Array  
```javascript
const RGB = ["แดง", "เขียว", "น้ำเงิน"];
const [Red, Green, Blue] = RGB;
console.log(Red, Blue); 
// ผลลัพธ์: แดง น้ำเงิน
```

#### ตัวอย่างกับ Object  
```javascript
const games = {
    namegame: "Valorant",
    create: "Riot Games",
    type: "Shooting"
};
const {namegame, create, type} = games;
console.log(namegame, create); 
// ผลลัพธ์: Valorant Riot Games
```

### 4. Object Literal Shorthand  
```javascript
let namecar = "Honda", color = "Silver", style = "Smart";
const car = { namecar, color, style };
console.log(car); 
// ผลลัพธ์: { namecar: "Honda", color: "Silver", style: "Smart" }
```

### 5. Spread และ Rest Operators  
```javascript
const anime = ["deku", "naruto", "astra"];
console.log(...anime, ...RGB); 
// ผลลัพธ์: deku naruto astra แดง เขียว น้ำเงิน

const gamesandcar = { ...games, ...car };
console.log(gamesandcar); 
// รวม Object games และ car

const funcall = (...allin) => ([...allin]);
console.log(funcall(anime, RGB)); 
// ผลลัพธ์: [["deku", "naruto", "astra"], ["แดง", "เขียว", "น้ำเงิน"]]
```

---

## คลาส (Classes)  

### ตัวอย่างการสร้างคลาส  
```javascript
class laptop {
    constructor() {
        this;
    }
}
```




---
