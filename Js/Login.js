window.addEventListener("load", ()=>{
    
 const pass = document.getElementById("toques");
 
pass.addEventListener("click", ()=>{
  
const datos = document.getElementById("codigos");
 
  if(datos.type === "text"){
      datos.type = "password";
  }else{
      datos.type = "text";
  }
    
});  
   
   //segundo checkbox de input  
 const checkbox = document.getElementById("toque");
 
checkbox.addEventListener("click", ()=>{
  
 const datos = document.getElementById("codigo");
 const digito = document.getElementById("contraseña2");
    
  if(datos.type === "text" && digito.type === "text"){
      datos.type = "password";
      digito.type = "password";
  }else{
      datos.type = "text";
      digito.type = "text";
  }
    
});


/*******desplazamiento de formularios******/

const btn = document.getElementById("boton");

//formularios
const formL = document.getElementById("login");
const formR = document.getElementById("registro");


//botones
const boton_login = document.getElementById("btnL");
const boton_register = document.getElementById("btnR");


boton_register.addEventListener("click",()=>{
    
window.navigator.vibrate(50);   
    
formL.style.transform = "translate(-340px)";
formL.style.transition = ".5s";
formL.style.height = "380px";
formR.style.overflow = "scroll";
//p.classList.replace("estilo_form","estilo");


formR.style.transform = "translate(-2px)";
formR.style.transition = ".6s";
//formR.style.width = "95vw";
//formR.style.height = "";
//formR.style.background = "#345";

boton_register.style.color = "#fff";
boton_register.style.fontWeight = "bold";
boton_login.style.color = "#333";

btn.style.transform = "translate(95px)";
btn.style.transition = ".6s";
btn.style.background = "#45b";
});

    
boton_login.addEventListener("click", ()=>{

window.navigator.vibrate(50);

formR.style.transform = "translate(340px)";
formR.style.transition = ".6s";

formL.style.transform = "translate(0)";
formL.style.transition = ".6s";
formL.style.height = "315px";

boton_login.style.color = "#fff";
boton_login.style.fontWeight = "bold";
boton_register.style.color = "#333";
boton_register.style.fontWeight = "none";


btn.style.transform = "translate(0)";
    
});


//pasando valores a los input

const inpuTexto = document.getElementById("input_text");

inpuTexto.placeholder = "Escriba su nombre";
    
inpuTexto.required = " ";


//valores al campo contraseña
const datosPass = document.getElementById("codigos");
datosPass.placeholder = "Password";
datosPass.required = " ";
datosPass.pattern = "[A-Za-z0-9]{6,12}"
datosPass.maxLength = "12";






//validando formulario registro
const formulario = document.getElementById("registro");

const inputs = document.querySelectorAll("#registro input");


//los digitos permitido que lleve cada campo
const expresiones = {
    usuario: /^[A-Za-z0-9_\-.]{5,13}$/,
    nombre: /^[A-Za-zÁ-ý\s]{4,20}$/,
    contraseña: /^.{6,15}$/,
    correo: /^[A-Za-z0-9_.+-]+@[A-Za-z0-9-]+\.[A-Za-z0-9.]+$/
    
}

const campos = {
    usuario: false,
    nombre: false,
    contraseña: false,
    correo: false
}

this.validarform = (e) => {
    switch (e.target.name){
    //en caso que el name del input sea ese
        case "usuario":
//hacemos una validacion con los digitos luego accedemos a los input y por ultimo al id del div
validaciones(expresiones.usuario, e.target, "usuarios");
        break;
        
         case "nombre":
validaciones(expresiones.nombre, e.target, "nombre");
        break;
        
         case "contraseña":
        validaciones(expresiones.contraseña, e.target, "password");
        validarpass();
        break;
        
         case "contraseña2":
        validarpass();
        break;
        
         case "correo":
        validaciones(expresiones.correo, e.target, "correo")
        break;
    }
}

const validaciones = (analizar, inputs, campo) =>{
    if(analizar.test(inputs.value)){
let mensaje = document.getElementById(`grupo_${campo}`);
mensaje.classList.add("div_correcto"); 
mensaje.classList.remove("div_incorrecto");

    
let icon = document.querySelector(`#grupo_${campo} i`);
icon.classList.add("fa-check");  
icon.classList.remove("fa-times-circle");

document.querySelector(`#grupo_${campo} .mensaje_error`).classList.remove("mensaje-activo");
campos[campo] = true;
         }else{
         
let mensaje = document.getElementById(`grupo_${campo}`);
mensaje.classList.add("div_incorrecto");
mensaje.classList.remove("div_correcto");

let icon = document.querySelector(`#grupo_${campo} i`);
icon.classList.remove("fa-check");
icon.classList.add("fa-times-circle");

 document.querySelector(`#grupo_${campo} .mensaje_error`).classList.add("mensaje-activo");
 campos[campo] = false;
         }
}

const validarpass = () =>{
    const pass = document.getElementById("codigo");
 const pass2 = document.getElementById("contraseña2");

if(pass.value !== pass2.value){

    let mensaje = document.getElementById("grupo_contraseña2");
mensaje.classList.add("div_incorrecto");
mensaje.classList.remove("div_correcto");

let icon = document.querySelector(`#grupo_contraseña2 i`);

icon.classList.remove("fa-check-double");
icon.classList.add("fa-times-circle");

 document.querySelector(`#grupo_contraseña2 .mensaje_error`).classList.add("mensaje-activo");
 
 campos["password"] = false;
}else{
if(pass.value && pass2.value !== null){
   let mensaje = document.getElementById("grupo_contraseña2");
mensaje.classList.add("div_correcto"); 
mensaje.classList.remove("div_incorrecto");
    
let icon = document.querySelector(`#grupo_contraseña2 i`);
icon.classList.add("fa-check-double");  
icon.classList.remove("fa-times-circle");

document.querySelector(`#grupo_contraseña2 .mensaje_error`).classList.remove("mensaje-activo");

 campos["password"] = true;

   }
 }
 
}


//se ejecute un evento en cada input
inputs.forEach( (datos) => {
datos.addEventListener("keyup",  validarform);
datos.addEventListener("blur",  validarform);
/*datos.addEventListener("blur", (evento)=>{
    evento.target.style.background = "#333";
   });*/
});



//para prevenir recargar la pagina
//const formulario = document.getElementById("registro");

formulario.addEventListener("submit", (e)=>{
   e.preventDefault();
   
/*  if(expresiones.usuario && expresiones.nombre && expresiones.contraseña && expresiones.correo){
     formulario.reset();
       
    let mensaje = document.getElementById("form_exito");
    mensaje.classList.add("form_exito-activo");
    
    setTimeout(() =>{
         let mensaje = document.getElementById("form_exito");
    mensaje.classList.remove("form_exito-activo");
    }, 5000);
    
    document.querySelectorAll(".div_correcto").forEach((icono) =>{
        icono.classList.remove("div_correcto");
    });
    
   }else{
      let error = document.querySelector(".abvertencia");
      error.classList.add("abvertencia-active");
      
   }*/
 });



//pasando valores a los input del formulario registro

const user = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const contraseña = document.getElementById("codigo");
const pass2 = document.getElementById("contraseña2");
const correo = document.getElementById("correo");

//ahora a utilizar las variables 

user.placeholder = "Tipo de Usuario";
user.required = " ";
//user.patterns = "{5,13}";

nombre.placeholder = "Escriba su nombre";
nombre.required = " ";

contraseña.placeholder = "password";
contraseña.required = " ";
contraseña.maxLength = "15";
//contraseña.patterns = "[a-z]{8,15}";

pass2.placeholder = "Validar Password";
pass2.required = " ";
pass2.maxLength = "15";

correo.placeholder = "henry@gmail.com";


});
