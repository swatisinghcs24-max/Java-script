
// function changeText(event){
//     console.log(event);
// let fpara = document.getElementById('fpara');
// fpara.textContent = "hello swati"
// }

// let fpara = document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click',function(event){
// event.preventDefault();
// anchorElement.textContent="click done bhai"
// });

// let para = document.querySelectorAll('p');

// for(let  i=0; i<para.length; i++){
// let para = para[i];
// para.addEventListener('click', function(){
//     alert("you have clicked on para:" +i);
// })
// }
 function alertPara(event) {
    if(event.target.nodeName === 'SPAN'){
    alert("you have clicked on para :" + event.target.textContent);}
 }
 let mydiv = document.getElementById('wrapper');

 document.addEventListener('click' , alertPara);