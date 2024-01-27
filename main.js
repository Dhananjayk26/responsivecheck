let btn1=document.querySelector('#submit');
btn1.addEventListener("click",()=>{
    
    let name=document.querySelector("#name");
    let Mobile_no=document.querySelector("#Mobile_no").value;
    let Email_id=document.querySelector("#Email_id").value;
    console.log(name.value);
    console.log(Mobile_no);
    console.log(Email_id);
    alert("Thank You ! We Will Contact You");
    name.value='';
})

let burger=document.querySelector('.burger');
let navbar=document.querySelector('.navbar');
let navright=document.querySelector('.nav_right');
let navleft=document.querySelector('.nav_left');

burger.addEventListener('click',()=>{
    navbar.classList.toggle("respo-height");
    navright.classList.toggle("respo-v-class");
    navleft.classList.toggle("respo-v-class");

})
