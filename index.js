// // // // let a=prompt("nhap so a")
// // // // let b=prompt("nhap so b")
// // // // let c= prompt("nhap so c")

// // // // let d=b*b-4*a*c
// // // // switch(true)
// // // // {
// // // // case d==0:
// // // //     console.log("nghiem kep")
// // // //     break;
// // // // case d<0:
// // // //     console.log("vo nghiem")
// // // //         break;
// // // // case d>0:
// // // //     console.log("nghiem phan biet")
// // // //     break;
// // // // }
// // // let $yes =document.getElementById("yes")
// // // let $no = document.getElementById("no")
// // // $yes.onclick=function(){
// // //     alert("adda")
// // // }
// // // let count =0
// // // let opacity=1
// // // $no.onmouseenter= function(){
// // // $no.style.position="fixed"
// // // console.log(window.innerWidth)
// // // console.log(window.innerHeight)
// // // $no.style.top=Math.floor(Math.random()*(window.innerHeight-$no.clientHeight)+"px"
// // // $no.style.top=Math.floor(Math.random()*(window.innerWidth-$no.clientWidth)+"px"
// // // opacity -=0.2
// // // $no.style.opacity=opacity
// // // // count++
// // // // if(count==5)
// // // // {
// // // //     alert("Hiiiiiiii")
// // // //     $answers.remove()
// // // // }
// // // }
// // // // $no.addEventListener('mousemove', function(){
// // // //     alert("aaa")
// // // // })
// // /////////////////////////////////////////////////////////
// // //class: mẫu thiết kế
// class person{
// //dc diem cua person
// name;
// age;
// address;
// favorites;
// constructor(name,age,address,favorites){
//     console.log("1 em be hieu hoc vua ra doi");
//     this.name=name;          
//     this.age=age;
//     this.address=address;
//     this.favorites=favorites;
//     console.log(this)
// }//hanh dong cua person
// speak(){
// console.log("fine");
// }
// introduce(){
//     console.log(

//      `Xin chaof casc ban,
//         Minh ten la ${this.name},
//         Minh nam nay ${this.age},
//         Minh o ${this.address},
//         So thich cua minh la ${this.favorites}
//         `
//     );
// }

// }

// //object: thể hiện cun thể của class
// let Hieu = new person("hieu", 22, "HN", null);


// // let huy= new person("huy",23,"TB","abc")
// // huy.speak()
// // huy.introduce()
// // Hieu.introduce()
// // //Khai bao 1 class animal,cac animal duoc tao ra tu class do cac thuoc tinh
// // //name, gender,species,age
// // //hanh dong: an noi ngu
// class animal{
//     name;
//     gender;
//     species;
//     age;
//     constructor(name,gender,species,age){
//         this.name=name;
//         this.gender=gender;
//         this.species=species;
//         this.age=age;


//     }
//    eat(){
//        console.log(`${this.name} dang an`)
//    }
//    speak(){
//        console.log(`$${this.nam} keu duoc`);
//    }
// }
// let pig = new animal("Un","male","suc vat",14)
// console.log(pig)
// pig.speak()
// pig.eat()


// //static
// //tinh toan
// // class myMath{

// //     constructor(){

// //     }
// //    static sum(a,b){
// //         return a+b
// //     }
// //  static   sub(a,b){
// //         return a-b

// //     }
// // static multi(a,b){
// //         return a*b
// //     }
// //    static div(a,b){
// //         return a/b
// //     }
// //    static pow(a,b){
// //         return a**b
// //     }
// // } 
// // console.log(myMath.sum(4,5));
// //inheritance: 1 class co the ke thua duoc thuoc tinh va phuong thuc cua 1 class khac
// // class goodboy extends person{
// // goodActions;
// // constructor(name,age,address,favorites,goodActions){

// // super(name,age,address,favorites,goodActions)//phai goi super cua class cha khi khai bao constructor
// // this.goodActions=goodActions
// // }
// // //ghi de
// // introduce(){
// //     console.log(`
// //       hello, minh thich hieu
// //       ten minh la ${this.name}  
// //       minh nam nahy ${this.age}

// //     `)
// // }
// // help(){
// //     console.log(`${this.name} da giup do nhieu nguoi`)
// // }

// // }
// // let Huong= new goodboy("Huong",22,"HN","Hieu","Yeu Hieu")
// // console.log(Huong)
// // Huong.introduce()
// // Huong.help()
// // class badboy extends person{
// // badactions;
// // constructor(name,age,address,favorites,badactions){
// // super(name,age,address,favorites);
// // this.badactions=badactions
// // }
// // hit(){
// //     console.log(`${this.name} rat thich danh nhau`)
// // }
// // }
// // // let quan =new person("quan",16,"HN","choi game")
// // let Nam= new badboy("Nam",22,"HN","doc sach","danh nhau")
// // Nam.hit()
// class dog extends animal{
//     constructor(name,gender,species,color,speed){
//         super(name,gender,species,)
//         this.color=color
//         this.speed=speed
//     }
//     speak(){
//         console.log("Gau gau gau");
//     }
// run(){
//     console.log(`${this.name} chay voi toc do ${this.speed}`);
// }
// }
// let milu= new dog("Milu","duc","nghiep vu","mau den", "nhanh")
// console.log(milu)
// milu.speak()
// milu.run()
// class fly extends animal{
//     constructor(name,gender,spieces,favorites){
//         super(name,gender,spieces)
//         this.favorites=favorites
//     }
//     prefer(){
//         console.log(`${this.name} thich ${this.favorites}`);
//     }

// }
// let dic = new fly("Dic","cai","ruoi giam","thich cham mut")
// dic.prefer()
