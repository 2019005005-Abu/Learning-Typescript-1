let myName=():void=>{
    var name:string='Abu Al Shahriar Rifat';
    console.log("My Name is "+name);
}
myName();
function display():void{
    console.log("Hi I am Rifat");
}
display();

let buildId:number=101;
let  UserName:string="Abu Al Shahriar Rifat";
let IsActivated:boolean=true;
let SystemId:any;
let firstName,lastName,fullName:string;
let university:string="University Of Sharda";
let date:Date=new Date();

firstName="Abu Al Shahriar";
lastName="Rifat";
fullName=firstName.concat(lastName);
console.log(`
 My name is :${UserName},
 build-Id :${buildId}
 University-name:${university}
`)
console.log("My full name is Using Typescript ",fullName);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());
console.log("Today is=",date.getDate());
//Union Types
let USERID:string|number;
USERID=201905503737;
console.log(`
User-Type(number):${USERID}`)
USERID="636363";
console.log(USERID);
function displayUserId(user:string|number|boolean){
    console.log(user);
}
console.log(displayUserId("1000"));
console.log(displayUserId(20919282))
console.log(displayUserId(true));

//Array Type

let userNameArray:string[];
let userIdArray:Array<number>
userNameArray=['Rifat','Rimon','oditi'];
userIdArray=[2019006,27262,36525,26252,628];
for(let i:number=0;i<userNameArray.length;i++){
    console.log(userNameArray[i]);
}
const using_forch=userIdArray.forEach(element => {
    console.log(element);
});
console.log(using_forch);
const usingMapping=userIdArray.map(id=>{
    console.log(id);
})
console.log(usingMapping);
//sort in Typescrtpt

