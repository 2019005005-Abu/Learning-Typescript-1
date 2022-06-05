var myName = function () {
    var name = 'Abu Al Shahriar Rifat';
    console.log("My Name is " + name);
};
myName();
function display() {
    console.log("Hi I am Rifat");
}
display();
var buildId = 101;
var UserName = "Abu Al Shahriar Rifat";
var IsActivated = true;
var SystemId;
var firstName, lastName, fullName;
var university = "University Of Sharda";
var date = new Date();
firstName = "Abu Al Shahriar";
lastName = "Rifat";
fullName = firstName.concat(lastName);
console.log("\n My name is :" + UserName + ",\n build-Id :" + buildId + "\n University-name:" + university + "\n");
console.log("My full name is Using Typescript ", fullName);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());
console.log("Today is=", date.getDate());
//Union Types
var USERID;
USERID = 201905503737;
console.log("\nUser-Type(number):" + USERID);
USERID = "636363";
console.log(USERID);
function displayUserId(user) {
    console.log(user);
}
console.log(displayUserId("1000"));
console.log(displayUserId(20919282));
console.log(displayUserId(true));
//Array Type
var userNameArray;
var userIdArray;
userNameArray = ['Rifat', 'Rimon', 'oditi'];
userIdArray = [2019006, 27262, 36525, 26252, 628];
for (var i = 0; i < userNameArray.length; i++) {
    console.log(userNameArray[i]);
}
var using_forch = userIdArray.forEach(function (element) {
    console.log(element);
});
console.log(using_forch);
