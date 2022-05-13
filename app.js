console.log("Hello Alyaa");
var x=30;
var y=10;
function adding(a,b){
    return a+b;
}
console.log(window);
/*
*let vs var
*let-->block scope
*var-->function scope
*/
//Dom elements
//let userName =prompt("Please inter Your Name");
// if (userName != null){
   // document.getElementById('gradeSystem').innerText = "Hello" + userName ;

//document.getElementById('gradeSystem').innerText = 'Grading System';
//let grade = parseInt(prompt("Please inter Your Grade"));
// if (grade<=100 && grade >=90){
//    // console.log(parseInt('grade'));
//    document.getElementById('grade').innerText = "A" ;
// }
// else if(grade<=90 && grade >=85){
//     document.getElementById('grade').innerText = "B";
// }
// else if(grade<=85 && grade >=70){
//     document.getElementById('grade').innerText = "C";
// }
// else if(grade<=70 && grade >=60){
//     document.getElementById('grade').innerText = "D";
// }
// else{
//     document.getElementById('gradeSystem').innerText = "F";
// }
for (let i = 0; i<=10 ; i++){
    if (i%2 == 0){
        console.log(i  +  ' is even ')
    }
}

let i = 0 ;
while (i<=10){
    if(i%2 !=0){
    console.log(i +' is odd ')
 }
    i++;
}



function add(a,b){
    return a + b
}
console.log(add(5,5))


let add1 = (a,b)=>{
    return a + b
}
console.log(add(4,4))

function measures(uName,h,w){
    console.log(uName)
    return h*w
}

let measures1 = (uName,h,w)=>{
   
    return h*w
}
console.log(measures1('Alyaa', 10 , 20))









let fruits = ['Apple','Banana','Orange']
for (let i =0 ;i<fruits.length;i++){
    console.log(fruits[i])
}


fruits.forEach(fruit => {
    console.log(fruit)
});

let user = {
    name:'Alyaa',
    age:25,
    email:'Alyaa@gmail'
}
user.name = 'Hassan'


let selection ='name'
user[selection] ='Ahmed'




document.getElementById('myForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    let u = document.getElementById('text1').value 
    console.log(u)

})



let students = [ 
    { name:'Omar', 
      age:15,
      math:17, 
      arabic:17, 
      eng:20, 
      deg:[17,17,20] 
    },
    { 
     name:'Mostafa', 
     age:15, 
     math:13, 
     arabic:11, 
     eng:10, 
     deg:[13,11,10]
     }, 
    { 
      name:'Yassin', 
      age:17, 
      math:16, 
      arabic:13, 
      eng:1, 
      deg:[16,13,1]
     } ] 
     


     students.forEach(students => {
        console.log(students.name)


        sum = 0;
        students.deg.forEach((d)=>{
         sum +=d
        })
        console.log(sum)
    });
     

    for(let i=0 ;i<students.length; i++){
        console.log(students[i].name)

        sum = 0;
        
    }


    // let selec ='name'
    // students[selec] ='Omar'
    // function total(o,m,y){
    //     return o+m+y
    //     console.log(total)
    // }



    function displayResult(sum){
        console.log('Result is ' + sum )
    }
    function sumCalculation(num1,num2,myCallback){
        myCallback(sum)
    }
   
    sumCalculation(5,5,(sum)=>{
        console.log('Result is' + sum)
    })
    console.log('first')
    setTimeout( ()=>{
        console.log('This msg is shown after 2 sec')
    },2000)
    console.log('last')






    let myPromise = new Promise ((resolve,reject)=>{
        if(3>2){
            resolve('Right')
        }
        reject('wrong')
    })
    myPromise
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err)})




    let fetchUsers = async () =>{
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    }
    fetchUsers()
    console.log('newwww')



