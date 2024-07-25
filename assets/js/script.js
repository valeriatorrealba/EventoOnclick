let sesion = document.querySelector('#BtnSalir')

let btnBorrar = document.querySelector('#BtnAgregar')

let sumarGato = document.getElementById('contadorGato')
let cantGato = document.getElementById('cantidadGato')

let sumarPerro = document.getElementById('contadorPerro')
let cantPerro = document.getElementById('cantidadPerro')

//1. Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a «Cerrar sesión».
// Inicio de Sesión
sesion.addEventListener('click', (cerrarSesion) => {
    if(cerrarSesion.target.innerText === "Iniciar sesión"){
        cerrarSesion.target.innerText = "Cerrar sesión"
    }else{
        cerrarSesion.target.innerText = "Iniciar sesión"
    }
}) 

//2. Cuando se da clic en “Agregar definición” el botón debe desaparecer.
//Borrar BTN
btnBorrar.addEventListener('click', (borrarBtn) => {
    btnBorrar.remove()
})

//3. Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando que te gusto la definición junto con el título de la misma.
// meGustaAlerta.addEventListener('click',(mensajeAlerta) => {
//     alert('Golden Retriever was liked')

// })

document.querySelectorAll('.alertaMeGusta').forEach(button => {
    button.addEventListener('click', (event) => {
        const definicion = event.target.closest('.definicion');
        const titulo = definicion.querySelector('.titulo').innerText;
        alert(`${titulo} was liked`);
    });
});

//4.Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.
//Incremenmtar me gusta
sumarGato.addEventListener('click', (likeGato) => {
    cantidadGato.innerText++
})

sumarPerro.addEventListener('click', (likePerro) => {
    cantidadPerro.innerText++
})