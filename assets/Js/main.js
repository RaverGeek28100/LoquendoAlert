
//obtener
let Links = document.querySelectorAll(".close");


//recorrer
Links.forEach(function(link) {

   //evento al dar click

   link.addEventListener("click",function(ev){
       ev.preventDefault();
       let content= document.querySelector('.content');


       //remove class
       content.classList.remove("animate__fadeInDown");
       content.classList.remove("animate__animated");

       //add

       content.classList.add("animate__fadeOutUp")
       content.classList.add("animate__animated")

       setTimeout(function() {
           location.href="/";
           
       }, 601);




    return false;

   });

  });