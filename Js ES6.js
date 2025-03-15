//?📋 Data Types
// String (ข้อความ)
const name1 = 'John' // Single-quote
const name2 = "John" // Double-quote
const name3 = `John` // Backtick (ใช้เมื่อต้องการ Template Literal)

// Number (จำนวน)
const income1 = 1000000       // Number
const income2 = 1_000_000     // Underscore
const income3 = 1e6           // Exponential Notation
const floating = 1.25e-6      // 0.00000125
const binary = 0b11010        // Binary (เลขฐาน 2)
const octal = 0o32            // Octal (เลขฐาน 8)
const hex = 0x1a              // Hexadecimal (เลขฐาน 16)
const big = 9999999999999999n // BigInt

// Boolean (ค่าจริงเท็จ)
const isPaid1 = true  // ✅
const isPaid2 = false // ❌

// อื่นๆ
const empty1 = null             // Null (ไม่มีข้อมูล)
const empty2 = undefined        // Undefined (ไม่ได้กำหนดค่า)
const object = { key: 'value' } // Object (ข้อมูลแบบจับคู่ Key-Value)
const array = [1, 2, 3]         // Array (ข้อมูลหลายมิติ)
// NaN = Not a number

console.log(name1, typeof name1) // ตรวจสอบประเภทข้อมูล


//?🔠 String
const firstName = 'John'
const lastName = 'Doe'
const age = 18

// รวมคำ
console.log('Name: ' + firstName + ' ' + lastName + ', age: ' + age)
console.log(`Name: ${firstName} ${lastName}, age: ${age}`)

// ต่อคำ
let a = 'a', b = 'b', c = 'c'
let alphabet1 = a + b + c
let alphabet2
alphabet2 += a // alphabet2 = alphabet2 + a
alphabet2 += b // alphabet2 = alphabet2 + b
alphabet2 += c // alphabet2 = alphabet2 + c

// Escape Character
console.log('Backslash: \\')
console.log('Single-quote: \' & Double-quote: "')
console.log("Single-quote: ' & Double-quote: \"")
console.log(`Single-quote: ' & Double-quote: "`)  // 😎 ใช้ Backtick จบๆไป ไม่ต้องกังวลเรื่อง Quote ซ้ำกัน

// แปลงค่า
const fromNumber = String(123)
const fromObject = JSON.stringify({ name: 'John' })


//?🔠🛠️ String Methods
const text = 'abc123'

text.length                 // 📏 ความยาวข้อความ
text.concat('456')          // 🔗 รวมข้อความ (ใช้ + ก็ได้)
text.charAt(2)              // 🔠❌ (ไม่แนะนำ) ดึงตัวอักษรตาม index
text.at(2)                  // 🔠❌ ดึงตัวอักษรตาม index ใช้เลขติดลบได้ และเมื่อไม่มีข้อมูลจะเป็น undefined
text[2]                     // 🔠✅ ดึงตัวอักษรตาม index
text.indexOf('c')           // 🔍🔢 ค้นหาตำแหน่ง index ของข้อความ
text.includes('c')          // 🔍👌 ตรวจสอบว่ามีข้อความหรือไม่
text.startsWith('abc')      // 🔍👌➡️ ตรวจสอบว่ามีข้อความหรือไม่ (ดูจากท้ายสุดก่อน)
text.search(/\d+/)          // 🔍🔢😎 ค้นหาตำแหน่ง index ของข้อความ (รองรับ RegExp)
text.match(/\d/)            // 🔍👌😎 ตรวจสอบว่ามีข้อความหรือไม่ (รองรับ RegExp)
//[...text.matchAll(/\d/g)]   // 🔍👌😎🌍 ตรวจสอบว่ามีข้อความหรือไม่ (รองรับ RegExp และบังคับใช้ global)
text.replace(/\d/, 'X')     // ⤵️ แทนที่ข้อความตามกำหนด (รองรับ RegExp)
text.replaceAll(/\d/g, 'X') // ⤵️🌍 แทนที่ข้อความตามกำหนด (รองรับ RegExp และบังคับใช้ global)
text.substr(3, 6)           // ✂️❌ (Deprecated ไม่แนะนำอย่างมาก) ตัดข้อความ
text.substring(3, 6)        // ✂️❌ (ไม่แนะนำ) ตัดข้อความ (ถ้าใช้เลขเกินจะ Swapped Indices)
text.slice(3, 6)            // ✂️✅ ตัดข้อความ ใช้เลขติดลบได้
text.split('')              // 🔀 แยกข้อความด้วยตัวอักษรกลายเป็น (String to Array)
text.trim()                 // 🧹 ตัด Whitespace ด้านหน้าและหลังข้อความ
text.repeat(3)              // 🔁 ทำซ้ำข้อความ
text.padStart(10, '0')      // 🔢➡️ แทรกข้อความส่วนหน้าเมื่อจำนวนข้อความไม่ครบ
text.padEnd(10, '0')        // 🔢⬅️  แทรกข้อความส่วนหลังเมื่อจำนวนข้อความไม่ครบ
text.toLowerCase()          // 🔠 แปลงข้อความเป็นตัวพิมพ์เล็ก
text.toUpperCase()          // 🔡 แปลงข้อความเป็นตัวพิมพ์ใหญ่


//?🔢 Number
const aa = 3
const bb = 2
const notANumber = NaN
const infinity = Infinity

console.log(a + b)   // บวก
console.log(a - b)   // ลบ
console.log(a * b)   // คูณ
console.log(a / b)   // หาร
console.log(a % b)   // หารเอาเศษ
console.log(a ** b) // ยกกําลัง
console.log((2 + 3) * ((9 - 3) / 2)) // ดำเนินการในวงเล็บก่อน
console.log(2 + 3 * 9 - 3 / 2) // การตามความสำคัญ เช่น * / จะดำเนินการก่อน + -

let num = 0
num++     // num = num + 1
num--     // num = num - 1
num += 2  // num = num + 2
num -= 2  // num = num - 2
num *= 2  // num = num * 2
num /= 2  // num = num / 2
num %= 2  // num = num % 2
num **= 2 // num = num ** 2

let x = 0, y = 0
console.log(x++) // 0
console.log(x)   // 1
console.log(++y) // 1
console.log(y)   // 1

// แปลงค่า
const fromString1 = Number('00123')    // 123
const fromString2 = parseInt('123abc') // 123
const fromString3 = +'123'             // 123

//! IEEE 754
console.log(0.3 - 0.2) // ❓ ไม่ได้เท่ากับ 0.1 แต่ได้ใกล้เคียง

console.log((0.3).toFixed(2))  // ✅ แสดงสองหน่วย
console.log((0.3).toFixed(16)) // ✅ แสดง 16 หน่วย
console.log((0.3).toFixed(17)) // ❌ แสดง 17 หน่วย เริ่มเห็นว่าจำนวน 0.3 มีความคลาดเคลื่อน

// ภาษาโปรแกรมหลายตัวใช้มาตรฐานคอมพิวเตอร์ IEEE 754 ในการแปลงจำนวนจาก Binary (2) ไปเป็น Decimal (10)

const base = 2 // ทดลองเปลี่ยนระหว่าง 2, 10
console.log((1).toString(base), (2).toString(base), (3).toString(base), (4).toString(base), (5).toString(base), (6).toString(base), (7).toString(base), (8).toString(base), (9).toString(base), (10).toString(base), (11).toString(base), (11).toString(base))
console.log((0.3).toString(2)) // ค่าที่ได้เป็น Binary

// ปัญหานี้ไม่ได้มีแค่ JavaScript แต่ Python, C++, Java, PHP, Go, SQL และอื่นๆ ล้วนก็มีปัญหาเช่นนี้ และมีวิธีแก้ไขแตกต่างกัน
// ลักษณะปัญหาคล้ายกับการ 2 / 3 = 0.6666666666666666 (0.67) อ่านเพิ่มเติม: https://www.geeksforgeeks.org/ieee-standard-754-floating-point-numbers/

const aaa = 0.3
const bbb = 0.2
console.log(a - b)
console.log((a - b).toFixed(1))         // แก้ด้วย .toFixed()
console.log(((a * 10) - (b * 10)) / 10) // แก้ด้วย *10 และ /10

console.log((a - b).toFixed(17)) // ❌ แบบนี้จะกลับมามีปัญหาอีกรอบ

// 🧑‍💻 มือโปรส่วนใหญ่จะเลือกใช้ Library ช่วยแก้ปัญหานี้ เช่น decimal.js: https://mikemcl.github.io/decimal.js/

//?🔢🛠️ Number Methods
const number = 31

number.toString()          // 🔠 แปลงเป็น String
number.toString(2)         // 🔠 แปลงเป็น String (เลขฐานสอง)
number.toString(8)         // 🔠 แปลงเป็น String (เลขฐานแปด)
number.toString(16)        // 🔠 แปลงเป็น String (เลขฐานสิบหก)
//numberWithFloat.toFixed(2)  *️⃣ แปลงเป็น String และกำหนดจำนวนทศนิยม
isNaN(numberAsNaN)         // 🔍 ตรวจสอบว่าเป็น NaN หรือไม่
isFinite(number)           // 🔍 ตรวจสอบว่าเป็นจำนวนเต็มหรือไม่ (คือไม่ใช่ Infinity)
Number('150px')            // 🔢❌ ได้ NaN เพราะมีข้อความปนเข้ามา
parseInt('15.459')         // 🔢✅ แปลงเป็นจำนวนเต็ม
parseInt('150px')          // 🔢✅ รองรับที่มีข้อความรวมเข้ามาด้วย โดยตัดข้อความออกไป
parseFloat('1.2.3')        // 🔢✅ แปลงเป็นจำนวนทศนิยม
parseFloat('95.45px')      // 🔢✅ รองรับที่มีข้อความรวมเข้ามาเช่นกัน


//?➗🛠️ Math Methods
Math.round(1.5)              // ➕➖ ปัดเศษตามหลักคณิตศาสตร์
Math.floor(1.5)              // 🔻 ปัดเศษลง
Math.ceil(1.5)               // 🔺 ปัดเศษขึ้น
Math.trunc(1.5)              // 🗑️ ลบเศษออกโดยไม่ปัดเศษ
Math.sign(-9)                // 🔍 ค้นหาจำนวนบวกหรือลบ (1, 0, -1)
Math.abs(-9)                 // ➕ แปลงเป็นจำนวนเต็มบวก
Math.pow(2, 3)               // 🔼 ยกกําลัง
2 ** 3                       // 🔼 ยกกําลัง
Math.sqrt(64)                // 🔳 Square Root
Math.min(20, 50, 30, 10, 40) // 🔍⬇️ ค้นหาจำนวนน้อยที่สุด
Math.max(20, 50, 30, 10, 40) // 🔍⬆️ ค้นหาจำนวนมากที่สุด
Math.random()                // 🎲 สุ่มจำนวนจาก 0 ถึง 1


//?✅❌ Boolean
const aaaa = 2
const bbbb = 5
console.log(a < b)   // น้อยกว่า
console.log(a > b)   // มากกว่า
console.log(a <= b)  // น้อยกว่าหรือเท่ากับ
console.log(a >= b)  // มากกว่าหรือเท่ากับ
console.log(a == b)  // เท่ากับ (เฉพาะ Value)
console.log(a != b)  // ไม่เท่ากับ (เฉพาะ Value)
console.log(a === b) // เท่ากับทั้ง Data Type & Value
console.log(a !== b) // ไม่เท่ากับทั้ง Data Type & Value
console.log(a = b)   // ⚠️ ระวัง: กำหนดค่า (Assignment)

//? Logic
const t = true
const f = false
const not = !t
console.log(t && f) // และ
console.log(t || f) // หรือ

const input = 15
console.log(input >= 10 && input <= 20) // 10 ถึง 20

// แปลงค่า
// const fromString1 = Boolean(' ') // true
// const fromString2 = Boolean('')  // false
// 0, NaN, '', null, undefined = false


//?💫 Short-Circuit Evaluation
isActive && renderActive() // ถ้า Boolean(isActive) = true ให้ทำงานข้างหลังต่อ
input || 'Default Value'   // ถ้า Boolean(input) = false ให้ทำงานข้างหลังต่อ
input && 'Default Value'   // ถ้า input = null || undefined ให้ทำงานข้างหลังต่อ



//?🍔 Array
const colors = ['red', 'green', 'blue']
console.log(typeof colors) // ❓ object เพราะ JavaScript ไม่มีข้อมูลประเภท array แต่จะเป็นหนึ่งในรูปแบบ object แทน
console.log(colors[0])     // 🔴 red
console.log(colors[1])     // 🟢 green
console.log(colors[2])     // 🔵 blue
console.log(colors[3])     // 🚫 undefined (เรียกขาดหรือเกิน จะไม่พบข้อมูล)

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
arr1 === arr2         // ❌ เทียบค่าแบบนี้ไม่ได้
_.isEqual(arr1, arr2) // ✅ ใช้ Lodash หรืออื่นๆในการเทียบค่าแทน

//const arr3 = arr1                  // Reference Type
//const arr3 = structuredClone(arr1) // Deep Clone

const [red, green, blue] = colors // Array Destructuring
arr1.concat(arr2)          // รวมรายการ (Method)
//[...arr1, ...arr2]         // รวมรายการ (Array Spread)
Math.max(...arr1)          // ค้นหาจำนวนมากที่สุด (Array Spread)
function sum(...numbers) { // Rest Parameters
  Array.isArray(numbers)   // true
}


//?🍔🛠️ Array Methods
const list = ['A', 'B', 'C']
const people = ['Anna', 'John', 'Jane', 'Joe', 'Kevin', 'Max', 'Sally', 'Zoe', 'Tina']

list.length                   // 📏 จำนวนของ Array items
list.at(0)                    // 🔠 ดึงข้อมูลจาก Array ตาม Index (ใช้เลขติดลบได้)
list[0]                       // 🔠 ดึงข้อมูลจาก Array ตาม Index
list.concat(['D', 'E', 'F'])  // 🔗 รวม Array
//[...list, ...['D', 'E', 'F']] // 🔗 รวม Array
list.join('-')                // 🧩🧩🧩 รวม Array ด้วยตัวแบ่งที่กำหนด
list.reverse()                // 🔀 สลับลำดับ Array
[3, 1, 2].sort()              // 🔃 จัดเรียงลำดับ Array
[[1, 2, 3], [4, 5, 6]].flat() // ⬇️ ลดลำดับชั้นของ Array
list.push('D')                // ➕➡️ เพิ่มส่วนท้าย ได้จำนวน Items กลับมา
list.unshift('Z')             // ➕⬅️ เพิ่มส่วนหน้า ได้จำนวน Items กลับมา
list.pop()                    // ➖➡️ ลบส่วนท้าย ได้สิ่งที่ลบออก
list.shift()                  // ➖⬅️ ลบส่วนหน้า ได้สิ่งที่ลบออก
listSlice.slice(2, 4)         // 🗑️🔢 ลบจากตำแหน่งที่ 2 หยุดที่ 4 (หมายถึงลบ 2, 3)
listSplice.splice(2, 2)       // 🗑️📏 ลบจากตำแหน่งที่ 2 เป็นจำนวน 2 รายการ (หมายถึงลบ 2, 3)

// 🔬 คัดกรอกตามเงื่อนไข Callback
people.filter(person => person.startsWith('J'))

// 👌 ค้นหาว่ามีข้อมูลหรือไม่
people.includes('John')

// 🔒⬅️ ค้นหา Value แรกที่เจอ
people.find(person => person.startsWith('J'))

// 🔑⬅️ ค้นหาลำดับ Key แรกที่เจอ
people.findIndex(person => person.startsWith('J'))

// 🔒➡️ ค้นหา Value สุดท้ายที่เจอ
people.findLast(person => person.startsWith('J'))

// 🔑➡️ ค้นหาลำดับ Key สุดท้ายที่เจอ
people.findLastIndex(person => person.startsWith('J'))

// ✅✅✅ ตรวจสอบว่าทุกอันต้องเป็นไปตาม Callback
people.every(person => typeof person === 'string')

// ✅❌❌ ตรวจสอบเพียงบางอันต้องเป็นไปตาม Callback
people.some(person => person.endsWith('y'))

// 🌈 ดัดแปลงเนื้อหาตาม Callback (🩷 ตัวนี้ใช้บ่อยมาก!)
people.map(person => person.toUpperCase())

// ➖ ลดจำนวนเนื้อหาจาก Array ให้กลายเป็นอย่างอื่น ตาม Callback ที่จะมีค่าก่อนหน้า และค่าปัจจุบัน (คล้ายกัย .join())
numbers.reduce((total, number) => total + number, 0)


//?🍡 Set
const set1 = new Set(['A', 'B', 'C'])
const set2 = new Set(['B', 'C', 'D'])

set.has('A')            // 🔍 Set.has() ตรวจสอบการมีตัวตน
set.add('D')            // ✍️ Set.add() เพิ่มข้อมูล
set.delete('B')         // 🗑️ Set.delete() ลบข้อมูล
set.size                // 📏 Set.size จํานวนข้อมูล
set1.difference(set2)   // Difference
set1.intersection(set2) // Intersection
set1.symmetricDifference(set2) // Symmetric Difference
set1.union(set2)        // Union


//?🍭 Object
const person = {
  name: 'John Doe',
  age: 22,
  isPaid: true,
  showInfo: function () { // Declaration
    return `Name: ${this.name}, age: ${this.age}`
  },
  showInfo() {            // Shorthand
    return `Name: ${this.name}, age: ${this.age}`
  }
}
console.log(person.name)          // (Property) John Doe
console.log(person.age)           // (Property) 22
console.log(person.isPaid)        // (Property) true
console.log(person['isPaid'])     // (Property) true
const getKey = 'isPaid'
console.log(person[getKey])       // (Property) true
console.log(person.address?.city) // (Optional Chaining) undefined
console.log(person.showInfo())    // (Method) Name: John Doe, age: 22

person.age++          // อัปเดต Property (23)
person.age = 23       // อัปเดต Property (23)
person.country = 'US' // เพิ่ม Property
delete person.isPaid  // ลบ Property

'country' in person              // ตรวจสอบว่ามี Property หรือไม่
person.hasOwnProperty('country') // ตรวจสอบว่ามี Property หรือไม่

const data1 = { message: 'ok' }
const data2 = { message: 'ok' }
data1 === data2         // ❌ เทียบค่าแบบนี้ไม่ได้
_.isEqual(data1, data2) // ✅ ใช้ Lodash หรืออื่นๆในการเทียบค่าแทน

//const data3 = data1                  // Reference Type
//const data3 = structuredClone(data1) // Deep Clone

//const { name, age } = person // Object Destructuring
//{ ...person, country: 'TH' } // รวม Object (Object Spread)
Object.assign({}, person, { country: 'TH' }) // รวม Object (Method)


//?🍭🛠️ Object Methods
const persons = { name: 'John Doe', age: 22 }

Object.keys(persons)    // Object to Array (Keys)
Object.values(persons)  // Object to Array (Values)
Object.entries(persons) // Object to Array (Keys & Values)
Object.fromEntries([['name', 'John Doe'], ['age', 22]]) // Array to Object

JSON.stringify(persons)                        // Object to String
JSON.parse('{"name": "John Doe", "age": 22}') // String to Object


//?🗃️ Object-oriented Programming (OOP)
// Design Pattern: https://refactoring.guru/

class User {
  username = ''  // Public Property
  #password = '' // Private Property
  constructor(username, password) {
    this.username = username
    this.#password = password
  }
  login(password) {        // Public Method
    // ...
  }
  logout() {
    // ...
  }
  #getPassword() {         // Private Method
    // ...
  }
  static isLogin(user) {   // Static Method
    // ...
  }
  get password() {         // Getter
    // ...
  }
  set password(password) { // Setter
    // ...
  }
}

class Admin extends User {
  isSuperAdmin = false
  constructor(username, password, isSuperAdmin) {
    super(username, password) // Call Parent Constructor
    this.isSuperAdmin = isSuperAdmin
  }
  deleteUser(userId) {
    // ...
  }
}

const user = new User('john', 'user123') // new Instance
const admin = new Admin('jane', 'admin123', true)
user.login('user123')    // Call Instance Method
user.username            // Call Instance Property
user.password            // Call Getter
user.password = 'new123' // Call Setter
User.isLogin(user)       // Call Static Method
admin.login('admin123')
admin.deleteUser(1)


//?⚠️ Error Handling
try {
  someFunctionDoAnything()
  maybeItWillBeThrow()
  if (hasError) {
    throw new Error('Something went wrong')
  }
} catch (error) {
  if (error instanceof SomeErrorClass) {
    // ...
  } else if (error instanceof AnotherErrorClass) {
    // ...
  }
} finally {
  // ... (optional)
}


//?🫸⌚ Promise & Async/Await
function doSomething(params, cb) { // Callback
  // ...
  cb(error, result)
}

function doSomething(params) {   // Promise
  return new Promise((resolve, reject) => {
    // ...
    resolve(result)
    reject(error)
  })
}

// Call as Callback
doSomething(args, (error, result) => {
  if (error) {
    // ...
  } else {
    // result ...
  }
})

// Call as Promise
doSomething(args)
  .then((result) => {
    // ...
  })
  .catch((error) => {
    // ...
  })

// Call Promise as Async/Await
async function run() {
  try {
    const result = await doSomething(args)
    // ...
  } catch (error) {
    // ...
  }
}
run() // อย่าลืมเรียกใช้งาน async function ที่ประกาศ


//?🫸🛠️ Promise Methods
const jobs = [
  doSomething(args1),
  doSomething(args2),
]

Promise.all(jobs)        // รอทุกตัวรันจนเสร็จ ห้าม throw
Promise.allSettled(jobs) // รอทุกตัวรันจนเสร็จ throw ได้
Promise.race(jobs)       // ตัวไหนรันเสร็จก่อนนำผลลัพธ์นั้นไปใช้ ห้าม throw
Promise.any(jobs)        // ตัวไหนรันเสร็จก่อนนำผลลัพธ์นั้นไปใช้ throw ได้


//?🗺️ Map
//const map = new Map([['name', 'John Doe'], ['age', 22])

map.has('age')       // 🔍 Map.has() ตรวจสอบการมีตัวตน
map.set('age', 23)   // ✍️ Map.set() ตั้งค่าข้อมูล
map.get('age')       // ↗️ Map.get() เรียกข้อมูลโดยใช้ Key
map.delete('isPaid') // 🗑️ Map.delete() ลบข้อมูล
map.size             // 📏 Map.size จํานวนข้อมูล


//?⌛ Delay
const timeoutId = setTimeout(() => {
  // รันหลังจากเวลาที่กำหนด
}, 1000) // (1000 = 1 วินาที)

const intervalId = setInterval(() => {
  // รันทุกๆเวลาที่กำหนด
}, 1000)

clearTimeout(timeoutId) // ยกเลิกการรัน setTimeout
clearInterval(intervalId) // ยกเลิกการรัน setInterval

// สร้างฟังก์ชั่น Delay แบบ Promise
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
await delay(1000) // รอเวลาที่กำหนด


//?📅⌚ Date & Time
const date = new Date()

date.getFullYear()     // ปี
date.getMonth()        // เดือน (เดือนมกราคม = 0)
date.getDate()         // วันที่
date.getHours()        // ชั่วโมง
date.getMinutes()      // นาที
date.getSeconds()      // วินาที
date.getMilliseconds() // มิลลิวินาที
date.getDay()          // 0 คือวันอาทิตย์ 6 คือวันเสาร์
date.getTime()         // เวลา (Unix Timestamp)

const locale = 'th'
const options = {       // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locale_options
  hourCycle: 'h24',     // นับแบบ 24 ชั่วโมง
  calendar: 'buddhist', // ปี พ.ศ.
}

date.toLocaleString(locale, options)     // แสดงวันและเวลาตาม locale, options
date.toLocaleDateString(locale, options) // แสดงวันตาม locale, options
date.toLocaleTimeString(locale, options) // แสดงเวลาตาม locale, options
date.toISOString()                       // วันเวลาแบบ ISO


//?🔗 URL
const url = new URL('https://example.com:8080/path/name?query=value#hash')

url.origin       // https://example.com:8080
url.protocol     // https:
url.host         // example.com:8080
url.hostname     // example.com
url.port         // 8080
url.pathname     // /path/name
url.search       // ?query=value
url.hash         // #hash

url.searchParams                        // URLSearchParams
url.searchParams.get('query')           // เรียก Query
url.searchParams.append('key', 'value') // เพิ่ม Query ใหม่
url.searchParams.set('key', 'value')    // เพิ่ม Query หรือตั้ง Query เดิม
url.searchParams.delete('key')          // ลบ Query

encodeURIComponent(url) // Encode เป็น URL ที่ใช้งานได้
decodeURIComponent(url) // Decode เป็น URL ที่อ่านได้


//?🐶🦴 Fetch
//const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(error => console.error(error))

async function run() {
  try {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
  } catch (error) {
    console.error(error)
  }
}
run()

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John Doe' }),
  include: 'credentials'
})


//?⌨️ Form Data
const formData = new FormData()
const file = document.querySelector('#avatar').files[0]

formData.append('name', 'John Doe')
formData.append('age', 22)
formData.append('avatar', file)

fetct('/api/user/upload-avatar', {
  method: 'POST',
  body: formData
})



//?🖥️ DOM
document.documentElement // <html>
document.body            // <body>
document.head            // <head>
document.title           // <title>
document.links           // <a>
document.images          // <img>
document.forms           // <form>
document.scripts         // <script>
document.fonts           // FontFaceSet
document.getElementById('my-text')           // #my-text
document.getElementsByClassName('text-blue') // .text-blue
document.getElementsByTagName('p')           // <p>
document.querySelector('#my-text')           // #my-text
document.querySelectorAll('ul li')           // ul li

const el = document.querySelector('#some-element')
el.textContent = 'Hello, world!'     // Text เท่านั้น
el.innerHTML = '<b>Bold</b>'         // ใช้ HTML ได้
el.style.backgroundColor = 'red'     // Style CSS
el.classList.add('my-class')         // เพิ่ม Class
el.classList.remove('my-class')      // ลบ Class
el.classList.toggle('my-class')      // สลับการใช้ Class
el.classList.contains('my-class')    // ตรวจสอบ Class
el.attributes                        // Attributes ทั้งหมด
el.hasAttribute('href')              // ตรวจสอบ Attribute
el.getAttribute('href')              // เรียก Attribute
el.href                              // เรียก Attribute
el.setAttribute('href', '/new/page') // เพิ่ม Attribute
el.removeAttribute('href')           // ลบ Attribute
el.dataset.myAttribute               // [data-my-attribute]
el.firstElementChild                 // Child คนแรก
el.lastElementChild                  // Child คนสุดท้าย
el.nextElementSibling                // Sibling ถัดไป
el.previousElementSibling            // Sibling ก่อนหน้า
el.parentElement                     // Parent

const aaaaa = document.createElement('a')
a.href = '/new/page'
a.textContent = 'New Page'
el.append(a)       // เพิ่ม Element ด้านหลัง
el.prepend(a)      // เพิ่ม Element ด้านหน้า
el.replaceWith(a)  // แทนที่ Element
el.removeChild(document.querySelector('#some-child-element')) // ลบ Child Element
el.remove()        // ลบ Element

// รายการ Event ทั้งหมด: https://developer.mozilla.org/en-US/docs/Web/Events
el.onclick = () => {}                     // เพิ่ม Event Listener
el.addEventListener('click', () => {})    // เพิ่ม Event Listener
el.removeEventListener('click', () => {}) // ลบ Event Listener

form.addEventListener('submit', (event) => {
  event.preventDefault()  // หยุดใช้งาน Event เดิม (Submit ผ่าน HTML <form>)
})
button.addEventListener('click', (event) => {
  event.stopPropagation() // หยุดใช้งาน Event จาก Parent
  event.target            // Element ที่ถูกคลิก (รวมถึง Children Element)
  event.currentTarget     // Element โดยตรงของ Event Listener เท่านั้่น
})
document.addEventListener('DOMContentLoaded', () => {}) // รอ DOM เสร็จ


//?💽 localStorage
localStorage.setItem('name', 'John Doe') // บันทึกข้อมูล
localStorage.getItem('name')             // เรียกข้อมูล
localStorage.removeItem('name')          // ลบข้อมูล
localStorage.clear()                     // ลบข้อมูลทั้งหมด

sessionStorage.setItem('name', 'John Doe')
sessionStorage.getItem('name')
sessionStorage.removeItem('name')
sessionStorage.clear()


//?🧋 Web API
// Clipboard API
navigator.clipboard.writeText(text)

// Geolocation API
navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords
})

// Screen Capture API
const stream = await navigator.mediaDevices.getDisplayMedia({
  video: true
})

// Share API
navigator.share({
  title: 'Hello, world!',
  text: 'This is a share',
  url: 'https://example.com'
})

// Speech Synthesis API
const utterance = new SpeechSynthesisUtterance('Hello, world!')
speechSynthesis.speak(utterance)

// Speech Recognition API
const speechRecognition = new SpeechRecognition()
speechRecognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript
}

// Picture-in-Picture API
if (document.pictureInPictureElement) {
  document.exitPictureInPicture()
} else {
  videoElement.requestPictureInPicture()
}

// Notification API
Notification.requestPermission().then((result) => {
  if (result === 'granted') {
    const notification = new Notification('Hello, world!', {
      body: 'This is a notification',
      icon: 'https://example.com/icon.png'
    })
  }
})

// File API
inputFileElement.addEventListener('change', (event) => {
  const reader = new FileReader()
  reader.onload = () => {
    previewImage.src = reader.result
  }
  reader.readAsDataURL(event.target.files[0])
})

