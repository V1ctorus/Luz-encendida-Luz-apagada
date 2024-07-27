const Rango = document.querySelector(".interruptor");
const Foco = document.getElementById("Cristal");
const Luz = document.querySelector(".res"); 

       Rango.addEventListener("click", Prender); 
function Prender(){
    let Vlr = Rango.value; 
     
    if(Vlr == 1){
        Foco.classList.add("cristal_dI2")
        Rango.classList.add("interruptor_active");
       Luz.classList.add("resplandor");
    }else{
        Foco.classList.remove("cristal_dI2")
        Rango.classList.remove("interruptor_active");
        Luz.classList.remove("resplandor");
    }
}
