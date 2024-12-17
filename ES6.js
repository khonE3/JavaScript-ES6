//* Array
let scoreS = [85, 90, 49, 52, 45, 74];
//map นำข้อมูลมาแปลงแทน
let map = scoreS.map((scoremap)=>{
    if (scoremap >= 50) {
        return "ผ่าน";
    }
    return "ตก";
})

//filter เอาข้อมูลที่ต้องการผ่าน
let filter = scoreS.filter((scorefilter)=>{
    return scorefilter >= 50
})

//reduce นำส้มมาบดใส่แก้ว แล้วแก้วก็รอส้มมาเพิ่ม
let reduceSum = scoreS.reduce((sum, scorereduce)=>{
    return sum + scorereduce;
})

//find ค้นหา
let finddic = scoreS.find((findinfo)=>{
    return findinfo <= 50;
}) //fimdIndex หาตำแหน่งตามเงื่อนไข

//every เงื่อนไขทุกอันในArrayต้องTurn
//some เงื่อนไขบางตัว

console.log(scoreS);

console.log(map);
console.log(filter);
console.log(reduceSum);
console.log(finddic);


//* Object
let dog = {
    namedog:"stardog",
    breed:"Thai",
    color:"Green",
    weight:20,
    voice(){
        console.log(this.namedog + " เห่าว่า hong hong!");
    }
}
dog.voice();

//this
//new ต้องมีมารับ


//! DOM Events ................................
let body = document.body;
let btntheme = document.querySelector('.themetoggle');
btntheme.addEventListener("click", () => {
    body.classList.toggle('dark');
});


//! Javascript ES6

//Function แบบเดิม
function oldfunction() {
    return "Old functionโง่ๆ";
}

console.log(oldfunction());


//* Arrow Function
const Arrow = (val1,val2) => `หวัดดีไอโง่ ${val1} นิสัย ${val2}`; //return ค่าเอง
console.log(Arrow("got","ใจเย็น"));



//*Destructuring ดึงเอาข้อมูลมาสร้างเป็นตัวแปรได้เลย
//Array
const RGB = ["แดง","เขียว","น้ำเงิน"];
const [Red,Green,Blue] = RGB;
console.log(Red,Blue);

//Object
const games = {
    namegame:"Valorant",
    create:"Riot Games",
    type:"Shooting"

}

const {namegame,create,type} = games;
console.log(namegame,create);


//* Object literal shorthand เอาค่าจากตัวแปรมาเป็นค่า Property
let namecar = "Honda" ,color = "Silver", style = "Smart";
const car = {
    namecar,
    color,
    style
}
console.log(car);


//* Spread & Rest Operators
const anime = ["deku","naruto","astra"];
console.log(...anime,...RGB);

const gamesandcar = {...games,...car};
console.log(gamesandcar);

const funcall = (...allin) => ( [...allin] );
console.log(funcall(anime,RGB));


//* Classes
class laptop {
    constructor () {
        this
    }
}


