// var age = 24;

// console.log(age);

// {
//     console.log(age);
// }

// if(true){
//     console.log(age);
// }

// function sayhello(){

//     var name = "swati";
//     console.log("hello duniya", name);
// }

// sayhello();

// {
//     var height = 180;
// }
// console.log(height);

// let marks = 100;
// console.log(marks);


// class human {
//     age;
//  #wt = 55;
//     ht = 200; 

//     constructor(newage ,newheight){
//            this.age = newage;
//            this.height = newheight;
//     }
//     walking(){
//         console.log("i am walking" , this.#wt);
//     }
//     running(){
//         console.log("i am running")
//     }

//     get fetchweight(){
//         return this.#wt;
//     }

//     set modifyweight(val){
//         this.#wt = val ;
//     }
// }

// let obj = new human(50 , 190);

// console.log(obj.height);

// obj.walking();

// function sayname( fname = "uday" , lname = fname.toUpperCase() ){
//  console.log("my name is:" , fname , " " , lname);
// }

// sayname("swati" );

// function solve(value){
//     console.log("hello jii"  , value);
// }

// solve(15);

function getage(){
    return 190;
}

function utility(name = "love" , age = getage()){
 console.log(name , " " ,age);
}
utility();